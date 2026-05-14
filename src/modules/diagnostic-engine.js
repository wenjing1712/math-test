/**
 * 学生能力模型 + 诊断引擎 + 自适应出题
 *
 * 数据存储在 localStorage，每个孩子独立一份
 */

const DIAGNOSTIC_STORAGE_KEY = 'math_grade4_student_models';

// ======================== 能力模型 ========================

class StudentModel {
    constructor(studentName) {
        this.name = studentName;
        this.createdAt = Date.now();
        this.updatedAt = Date.now();
        this.sessionCount = 0;

        // 知识点掌握度: { kp_s1u1_01: { correct: 5, wrong: 1, history: [...] } }
        this.knowledgeMap = {};

        // 考试记录
        this.testRecords = [];

        // 初始化所有知识点
        this._initKnowledgeMap();
    }

    _initKnowledgeMap() {
        const allKps = getAllKnowledgePoints();
        for (const kp of allKps) {
            this.knowledgeMap[kp.id] = {
                correct: 0,
                wrong: 0,
                history: []  // [{ timestamp, correct, question, unit }]
            };
        }
    }

    /**
     * 记录一次答题结果
     * @param {string} kpId - 知识点ID
     * @param {boolean} isCorrect - 是否答对
     * @param {object} questionRef - 题目引用 { q, answer, unit }
     */
    recordAnswer(kpId, isCorrect, questionRef) {
        if (!this.knowledgeMap[kpId]) {
            this.knowledgeMap[kpId] = { correct: 0, wrong: 0, history: [] };
        }

        this.knowledgeMap[kpId].history.push({
            timestamp: Date.now(),
            correct: isCorrect,
            question: questionRef.q,
            unit: questionRef.unit
        });

        if (isCorrect) {
            this.knowledgeMap[kpId].correct++;
        } else {
            this.knowledgeMap[kpId].wrong++;
        }

        this.updatedAt = Date.now();
        this._save();
    }

    /**
     * 获取某个知识点的掌握度 (0-1)
     */
    getMastery(kpId) {
        const kp = this.knowledgeMap[kpId];
        if (!kp || (kp.correct + kp.wrong) === 0) return null; // 未测过
        return kp.correct / (kp.correct + kp.wrong);
    }

    /**
     * 获取某个知识点的答题次数
     */
    getAttemptCount(kpId) {
        const kp = this.knowledgeMap[kpId];
        if (!kp) return 0;
        return kp.correct + kp.wrong;
    }

    /**
     * 获取薄弱知识点（掌握度 < threshold 且至少答过 2 题）
     */
    getWeakPoints(threshold = 0.7) {
        const weak = [];
        for (const kpId in this.knowledgeMap) {
            const mastery = this.getMastery(kpId);
            if (mastery !== null && mastery < threshold && this.getAttemptCount(kpId) >= 2) {
                const info = getKnowledgePoint(kpId);
                weak.push({
                    kpId,
                    name: info ? info.name : kpId,
                    unitName: info ? info.unitName : '',
                    category: info ? info.category : '',
                    mastery: Math.round(mastery * 100),
                    correct: this.knowledgeMap[kpId].correct,
                    wrong: this.knowledgeMap[kpId].wrong,
                    total: this.getAttemptCount(kpId)
                });
            }
        }
        // 按掌握度升序排列（最弱的排最前）
        weak.sort((a, b) => a.mastery - b.mastery);
        return weak;
    }

    /**
     * 获取强项知识点（掌握度 >= threshold 且至少答过 2 题）
     */
    getStrongPoints(threshold = 0.8) {
        const strong = [];
        for (const kpId in this.knowledgeMap) {
            const mastery = this.getMastery(kpId);
            if (mastery !== null && mastery >= threshold && this.getAttemptCount(kpId) >= 2) {
                const info = getKnowledgePoint(kpId);
                strong.push({
                    kpId,
                    name: info ? info.name : kpId,
                    unitName: info ? info.unitName : '',
                    category: info ? info.category : '',
                    mastery: Math.round(mastery * 100),
                    correct: this.knowledgeMap[kpId].correct,
                    wrong: this.knowledgeMap[kpId].wrong
                });
            }
        }
        strong.sort((a, b) => b.mastery - a.mastery);
        return strong;
    }

    /**
     * 获取整体掌握度
     */
    getOverallMastery() {
        let total = 0, count = 0;
        for (const kpId in this.knowledgeMap) {
            const mastery = this.getMastery(kpId);
            if (mastery !== null) {
                total += mastery;
                count++;
            }
        }
        return count > 0 ? Math.round((total / count) * 100) : 0;
    }

    /**
     * 按能力分类统计掌握度
     */
    getCategoryMastery() {
        const categories = {};
        const allKps = getAllKnowledgePoints();
        for (const kp of allKps) {
            if (!categories[kp.category]) {
                categories[kp.category] = { total: 0, count: 0 };
            }
            const mastery = this.getMastery(kp.id);
            if (mastery !== null) {
                categories[kp.category].total += mastery;
                categories[kp.category].count++;
            }
        }
        const result = {};
        for (const cat in categories) {
            result[cat] = categories[cat].count > 0
                ? Math.round((categories[cat].total / categories[cat].count) * 100)
                : null;
        }
        return result;
    }

    /**
     * 获取趋势（最近几次答题的准确率变化）
     */
    getTrend(lastN = 20) {
        const allHistory = [];
        for (const kpId in this.knowledgeMap) {
            for (const h of this.knowledgeMap[kpId].history) {
                allHistory.push(h);
            }
        }
        allHistory.sort((a, b) => a.timestamp - b.timestamp);
        const recent = allHistory.slice(-lastN);
        if (recent.length < 5) return null;

        const half = Math.floor(recent.length / 2);
        const firstHalf = recent.slice(0, half).filter(h => h.correct).length / half;
        const secondHalf = recent.slice(-half).filter(h => h.correct).length / half;
        return {
            firstHalfRate: Math.round(firstHalf * 100),
            secondHalfRate: Math.round(secondHalf * 100),
            isImproving: secondHalf > firstHalf
        };
    }

    /**
     * 记录一次完整的测试
     */
    recordTest(testData) {
        this.sessionCount++;
        this.testRecords.push({
            timestamp: Date.now(),
            sessionNumber: this.sessionCount,
            ...testData
        });
        this._save();
    }

    _save() {
        saveStudentModel(this);
    }
}

// ======================== 存储管理 ========================

/**
 * 获取所有学生模型
 */
function getAllStudentModels() {
    try {
        const data = localStorage.getItem(DIAGNOSTIC_STORAGE_KEY);
        return data ? JSON.parse(data) : {};
    } catch (e) {
        console.error('读取学生模型失败:', e);
        return {};
    }
}

/**
 * 保存学生模型
 */
function saveStudentModel(model) {
    try {
        const models = getAllStudentModels();
        models[model.name] = {
            name: model.name,
            createdAt: model.createdAt,
            updatedAt: model.updatedAt,
            sessionCount: model.sessionCount,
            knowledgeMap: model.knowledgeMap,
            testRecords: model.testRecords
        };
        localStorage.setItem(DIAGNOSTIC_STORAGE_KEY, JSON.stringify(models));
    } catch (e) {
        console.error('保存学生模型失败:', e);
    }
}

/**
 * 获取或创建学生模型
 */
function getOrCreateStudent(name) {
    const models = getAllStudentModels();
    if (models[name]) {
        const m = models[name];
        const model = new StudentModel(m.name);
        model.createdAt = m.createdAt;
        model.updatedAt = m.updatedAt;
        model.sessionCount = m.sessionCount;
        model.knowledgeMap = m.knowledgeMap;
        model.testRecords = m.testRecords || [];
        return model;
    }
    // 新学生：创建并保存
    const model = new StudentModel(name);
    saveStudentModel(model);
    return model;
}

/**
 * 删除学生模型
 */
function deleteStudentModel(name) {
    const models = getAllStudentModels();
    delete models[name];
    localStorage.setItem(DIAGNOSTIC_STORAGE_KEY, JSON.stringify(models));
}

/**
 * 获取所有学生名字列表
 */
function getStudentNames() {
    const models = getAllStudentModels();
    return Object.keys(models).sort();
}

// ======================== 诊断引擎 ========================

const DiagnosticEngine = {
    /**
     * 批量批改答案并更新能力模型
     * @param {StudentModel} model - 学生模型
     * @param {string} unitCode - 单元代码
     * @param {array} answers - [{ questionIndex, questionRef, studentAnswer }]
     * @returns {object} 批改结果
     */
    gradeAndDiagnose(model, unitCode, answers) {
        const results = {
            total: answers.length,
            correct: 0,
            wrong: 0,
            score: 0,
            details: [],
            weakPointsDetected: [],
            suggestions: []
        };

        for (const ans of answers) {
            const q = ans.questionRef;
            const isCorrect = this._checkAnswer(q, ans.studentAnswer);
            const kps = q.knowledgePoints || [];

            if (isCorrect) {
                results.correct++;
            } else {
                results.wrong++;
                // 只记录首次发现的薄弱点
                for (const kpId of kps) {
                    const mastery = model.getMastery(kpId);
                    if (mastery === null || mastery >= 0.7) {
                        // 首次发现这个知识点有问题
                    }
                }
            }

            // 更新能力模型
            for (const kpId of kps) {
                model.recordAnswer(kpId, isCorrect, { q: q.q, unit: unitCode });
            }

            results.details.push({
                question: q.q,
                correctAnswer: q.answer,
                studentAnswer: ans.studentAnswer,
                isCorrect,
                knowledgePoints: kps.map(kpId => {
                    const info = getKnowledgePoint(kpId);
                    return info ? info.name : kpId;
                })
            });
        }

        results.score = Math.round((results.correct / results.total) * 100);

        // 诊断薄弱点
        results.weakPointsDetected = model.getWeakPoints(0.7);

        // 生成建议
        if (results.weakPointsDetected.length > 0) {
            const topWeak = results.weakPointsDetected[0];
            results.suggestions.push(`建议优先加强「${topWeak.name}」，当前掌握度仅 ${topWeak.mastery}%`);
            if (results.weakPointsDetected.length > 1) {
                results.suggestions.push(`同时关注「${results.weakPointsDetected[1].name}」的练习`);
            }
        } else if (results.score >= 90) {
            results.suggestions.push('掌握得很好！可以尝试提高难度或学习下一单元');
        } else if (results.score >= 70) {
            results.suggestions.push('总体不错，个别知识点可以再巩固一下');
        } else {
            results.suggestions.push('建议从头梳理本单元的基础概念，再重新测试');
        }

        // 记录本次测试
        model.recordTest({
            unitCode,
            score: results.score,
            total: results.total,
            correct: results.correct,
            wrong: results.wrong,
            weakPoints: results.weakPointsDetected.map(w => w.kpId)
        });

        return results;
    },

    /**
     * 检查答案是否正确（支持多种题型）
     */
    _checkAnswer(question, studentAnswer) {
        if (!studentAnswer || studentAnswer.trim() === '') return false;
        const sa = studentAnswer.trim().replace(/\s+/g, '');
        const ca = question.answer.replace(/\s+/g, '');

        // 选择题答案比对（A/B/C/D）
        if (question.options) {
            return sa.toUpperCase() === ca.toUpperCase();
        }

        // 数值类答案：支持多种格式
        if (!isNaN(parseFloat(ca))) {
            return this._compareNumericAnswer(sa, ca);
        }

        // 文本答案：模糊匹配
        return sa.includes(ca) || ca.includes(sa);
    },

    _compareNumericAnswer(studentAns, correctAns) {
        const sa = studentAns.replace(/[^0-9.\-]/g, '');
        const ca = correctAns.replace(/[^0-9.\-]/g, '');
        if (sa === ca) return true;
        // 多个数值（如填空题多个空）
        const saParts = studentAns.split(/[,，、]/).map(s => s.trim().replace(/[^0-9.\-]/g, ''));
        const caParts = correctAns.split(/[,，、]/).map(s => s.trim().replace(/[^0-9.\-]/g, ''));
        if (saParts.length !== caParts.length) return false;
        return saParts.every((p, i) => p === caParts[i]);
    },

    /**
     * 自适应出题：根据薄弱知识点优先出题
     * @param {StudentModel} model - 学生模型
     * @param {string} unitCode - 单元代码
     * @param {number} count - 出题数量
     * @param {boolean} priorityWeak - 是否优先薄弱点
     * @returns {array} 选中的题目数组
     */
    adaptiveSelect(model, unitCode, count = 10, priorityWeak = true) {
        const bank = questionBank[unitCode];
        if (!bank) return [];

        // 收集该单元所有题目并打平
        const allQuestions = [];
        const types = ['multipleChoice', 'fillBlank', 'calculation', 'wordProblems'];
        for (const type of types) {
            for (const q of (bank[type] || [])) {
                allQuestions.push({ ...q, type });
            }
        }

        if (!priorityWeak || !model) {
            return shuffleArray(allQuestions).slice(0, count);
        }

        // 获取该单元的薄弱知识点
        const unitKps = getUnitKnowledgePoints(unitCode).map(kp => kp.id);
        const weakPoints = model.getWeakPoints(0.7);
        const weakKpIds = new Set(
            weakPoints
                .filter(w => unitKps.includes(w.kpId))
                .map(w => w.kpId)
        );

        // 从未测试过的知识点（也是薄弱候选）
        const untestedKpIds = new Set();
        for (const kpId of unitKps) {
            if (model.getAttemptCount(kpId) === 0) {
                untestedKpIds.add(kpId);
            }
        }

        // 给题目打分：薄弱知识点相关 > 未测知识点 > 已掌握知识点
        const scored = allQuestions.map(q => {
            const qKps = q.knowledgePoints || [];
            let score = 0;
            for (const kp of qKps) {
                if (weakKpIds.has(kp)) score += 3;
                else if (untestedKpIds.has(kp)) score += 2;
            }
            // 最近答过的题降权
            const recentWrong = this._isRecentlyTested(model, q, 3);
            if (recentWrong) score -= 1;
            return { ...q, _priority: score };
        });

        // 按优先级降序排列，然后随机打乱同优先级
        scored.sort((a, b) => {
            if (b._priority !== a._priority) return b._priority - a._priority;
            return Math.random() - 0.5;
        });

        // 确保覆盖薄弱知识点
        const selected = [];
        const coveredKps = new Set();

        // 先选薄弱点题目
        for (const q of scored) {
            if (selected.length >= count) break;
            const hasWeak = (q.knowledgePoints || []).some(kp => weakKpIds.has(kp));
            if (hasWeak && !selected.includes(q)) {
                selected.push(q);
                for (const kp of (q.knowledgePoints || [])) coveredKps.add(kp);
            }
        }

        // 补充到目标数量
        for (const q of scored) {
            if (selected.length >= count) break;
            if (!selected.includes(q)) {
                selected.push(q);
            }
        }

        return selected;
    },

    /**
     * 检查某道题是否最近被测试过
     */
    _isRecentlyTested(model, question, withinLastNSessions = 3) {
        const recentSessions = model.testRecords.slice(-withinLastNSessions);
        for (const session of recentSessions) {
            // 简单的检查：看题目的文本是否出现过
            // 更精确的可以用题目索引
        }
        return false;
    }
};

// ======================== 能力报告生成 ========================

/**
 * 生成学生能力报告文本
 */
function generateReport(model) {
    const overall = model.getOverallMastery();
    const weakPoints = model.getWeakPoints();
    const strongPoints = model.getStrongPoints();
    const categoryMastery = model.getCategoryMastery();
    const trend = model.getTrend();

    let report = '';
    report += '='.repeat(50) + '\n';
    report += `  学生：${model.name}\n`;
    report += `  整体掌握度：${overall}%\n`;
    if (trend) {
        report += `  趋势：${trend.isImproving ? '↑ 进步中' : '↓ 需要关注'} (近${trend.firstHalfRate}% → ${trend.secondHalfRate}%)\n`;
    }
    report += `  练习次数：${model.sessionCount} 次\n`;
    report += '='.repeat(50) + '\n\n';

    // 能力分类
    report += '【能力分布】\n';
    for (const cat in categoryMastery) {
        const val = categoryMastery[cat];
        const bar = val !== null ? '█'.repeat(Math.floor(val / 10)) + '░'.repeat(10 - Math.floor(val / 10)) : '░░░░░░░░░░';
        report += `  ${cat}：${bar} ${val !== null ? val + '%' : '未测'}\n`;
    }
    report += '\n';

    // 薄弱点
    report += '【需要加强的知识点】\n';
    if (weakPoints.length === 0) {
        report += '  暂无明显的薄弱点，继续保持！\n';
    } else {
        for (const w of weakPoints.slice(0, 5)) {
            report += `  ⚠ ${w.name}（${w.unitName}）- 掌握度 ${w.mastery}%（对${w.correct}/错${w.wrong}）\n`;
        }
    }
    report += '\n';

    // 强项
    report += '【已掌握的知识点】\n';
    if (strongPoints.length === 0) {
        report += '  暂无明显强项，继续努力！\n';
    } else {
        for (const s of strongPoints.slice(0, 5)) {
            report += `  ✓ ${s.name} - 掌握度 ${s.mastery}%\n`;
        }
    }

    report += '\n' + '='.repeat(50) + '\n';

    return report;
}

/**
 * 生成薄弱点雷达数据（用于图表展示）
 */
function generateRadarData(model) {
    const categories = model.getCategoryMastery();
    return {
        labels: Object.keys(categories).map(c => c.replace('数与运算', '计算').replace('图形与几何', '图形').replace('统计与概率', '统计').replace('方程与代数', '方程')),
        values: Object.values(categories).map(v => v !== null ? v : 0)
    };
}
