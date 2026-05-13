// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 标签切换功能
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.getAttribute('data-tab');

            // 移除所有active类
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

            // 添加active类到当前标签
            btn.classList.add('active');
            document.getElementById(`${tabName}-tab`).classList.add('active');
        });
    });
});

// 试卷模板库
const testTemplates = {
    1: {
        title: "第一单元 - 认识更大的数",
        multipleChoice: [
            { q: "下面各数中，最大的数是（  ）", options: ["9999", "10000", "9998", "10001"], answer: "D" },
            { q: "由8个千、6个百和5个一组成的数是（  ）", options: ["865", "8065", "8605", "8650"], answer: "C" },
            { q: "与"九千零七"相等的数是（  ）", options: ["9700", "9007", "9070", "907"], answer: "B" },
            { q: "下面各数中，一个零也不读的是（  ）", options: ["5008", "5080", "5800", "5088"], answer: "D" },
            { q: "最小的四位数比最大的三位数多（  ）", options: ["1", "10", "100", "1000"], answer: "A" }
        ],
        fillBlank: [
            { q: "一万里面有（  ）个千，（  ）个百。", answer: "10, 100" },
            { q: "6725是由（  ）个千、（  ）个百、（  ）个十和（  ）个一组成的。", answer: "6, 7, 2, 5" },
            { q: "用3、0、8、5组成的最大四位数是（  ），最小四位数是（  ）。", answer: "8530, 3058" },
            { q: "一个数由5个千和9个一组成，这个数是（  ），读作（  ）。", answer: "5009, 五千零九" },
            { q: "按规律填数：2000、3000、4000、（  ）、（  ）。", answer: "5000, 6000" }
        ],
        calculation: [
            { q: "3000 + 2000 =", answer: "5000" },
            { q: "7000 - 4000 =", answer: "3000" },
            { q: "3425 + 2367 =", answer: "5792" },
            { q: "6843 - 2759 =", answer: "4084" }
        ],
        wordProblems: [
            { q: "学校图书馆有故事书3500本，科技书比故事书少800本。图书馆一共有故事书和科技书多少本？", answer: "3500-800=2700(本)，3500+2700=6200(本)" },
            { q: "水果店上午卖出苹果2450千克，下午卖出苹果1780千克。这一天一共卖出苹果多少千克？", answer: "2450+1780=4230(千克)" },
            { q: "一个工厂原计划生产8000个零件，已经生产了5600个，还要生产多少个？", answer: "8000-5600=2400(个)" }
        ]
    },
    2: {
        title: "第二单元 - 线与角",
        multipleChoice: [
            { q: "一个平角等于（  ）个直角", options: ["1", "2", "3", "4"], answer: "B" },
            { q: "钟表上3点整，时针和分针成（  ）角", options: ["锐角", "直角", "钝角", "平角"], answer: "B" },
            { q: "下面的角中，最大的是（  ）", options: ["45°", "90°", "120°", "180°"], answer: "D" }
        ],
        fillBlank: [
            { q: "1个平角=（  ）个直角=（  ）度", answer: "2, 180" },
            { q: "小于90度的角叫（  ）角，大于90度小于180度的角叫（  ）角", answer: "锐, 钝" }
        ],
        calculation: [],
        wordProblems: [
            { q: "画一个60度的角，并标出角的各部分名称", answer: "图形题（略）" }
        ]
    }
};

// 生成测试卷
function generateTest() {
    const unit = document.getElementById('unit-select').value;
    const difficulty = document.getElementById('difficulty-select').value;
    const template = testTemplates[unit];

    if (!template) {
        alert('该单元试卷正在开发中，请选择第一单元或第二单元！');
        return;
    }

    let testContent = generateTestContent(template, unit, difficulty);

    document.getElementById('test-content').innerHTML = `<pre>${testContent}</pre>`;
    document.getElementById('test-output').style.display = 'block';

    // 滚动到结果
    document.getElementById('test-output').scrollIntoView({ behavior: 'smooth' });
}

// 生成试卷内容
function generateTestContent(template, unit, difficulty) {
    let content = `# 四年级数学${template.title}测试卷
**（北师大版）**

**班级：________ 姓名：________ 学号：________ 成绩：________**

---

## 一、选择题（每题3分，共${template.multipleChoice.length * 3}分）

`;

    template.multipleChoice.forEach((item, index) => {
        content += `**${index + 1}. ${item.q}**\n`;
        item.options.forEach((opt, i) => {
            content += `   ${String.fromCharCode(65 + i)}. ${opt}\n`;
        });
        content += '\n';
    });

    if (template.fillBlank.length > 0) {
        content += `\n## 二、填空题（每空2分，共${template.fillBlank.length * 4}分）\n\n`;
        template.fillBlank.forEach((item, index) => {
            content += `**${index + template.multipleChoice.length + 1}. ${item.q}**\n\n`;
        });
    }

    if (template.calculation.length > 0) {
        content += `\n## 三、计算题（共${template.calculation.length * 3}分）\n\n`;
        template.calculation.forEach((item, index) => {
            content += `**${index + template.multipleChoice.length + template.fillBlank.length + 1}. ${item.q}**\n\n`;
        });
    }

    if (template.wordProblems.length > 0) {
        content += `\n## 四、应用题（每题6分，共${template.wordProblems.length * 6}分）\n\n`;
        template.wordProblems.forEach((item, index) => {
            content += `**${index + template.multipleChoice.length + template.fillBlank.length + template.calculation.length + 1}. ${item.q}**\n\n\n\n`;
        });
    }

    content += `\n---\n\n**注意事项：**\n1. 请认真审题，仔细计算\n2. 应用题要写出算式和答案\n3. 检查时注意单位是否正确\n`;

    return content;
}

// 批改试卷
function gradeTest() {
    const studentName = document.getElementById('student-name').value;
    const unit = document.getElementById('test-unit').value;
    const answersText = document.getElementById('student-answers').value;

    if (!studentName || !answersText) {
        alert('请输入学生姓名和答案！');
        return;
    }

    const template = testTemplates[unit];
    if (!template) {
        alert('该单元试卷正在开发中！');
        return;
    }

    // 解析学生答案
    const studentAnswers = parseStudentAnswers(answersText);

    // 批改
    const result = gradeAnswers(studentAnswers, template);

    // 显示结果
    displayGradeResult(result, studentName);

    document.getElementById('grade-output').style.display = 'block';
    document.getElementById('grade-output').scrollIntoView({ behavior: 'smooth' });
}

// 解析学生答案
function parseStudentAnswers(text) {
    const answers = {};
    const lines = text.split('\n');

    lines.forEach(line => {
        const match = line.match(/^(\d+)\.\s*(.+)$/);
        if (match) {
            answers[match[1]] = match[2].trim();
        }
    });

    return answers;
}

// 批改答案
function gradeAnswers(studentAnswers, template) {
    const results = [];
    let totalScore = 0;
    let correctCount = 0;
    const errors = [];

    // 批改选择题
    template.multipleChoice.forEach((item, index) => {
        const qNum = index + 1;
        const studentAnswer = studentAnswers[qNum];
        const isCorrect = studentAnswer && studentAnswer.toUpperCase() === item.answer;

        results.push({
            question: qNum,
            type: '选择题',
            content: item.q,
            correctAnswer: item.answer,
            studentAnswer: studentAnswer || '未作答',
            isCorrect: isCorrect,
            score: isCorrect ? 3 : 0
        });

        if (isCorrect) {
            totalScore += 3;
            correctCount++;
        } else {
            errors.push({
                question: qNum,
                type: '选择题',
                knowledgePoint: '基础概念',
                content: item.q,
                correctAnswer: item.answer,
                studentAnswer: studentAnswer || '未作答'
            });
        }
    });

    // 批改填空题
    template.fillBlank.forEach((item, index) => {
        const qNum = index + template.multipleChoice.length + 1;
        const studentAnswer = studentAnswers[qNum];
        const isCorrect = studentAnswer && normalizeAnswer(studentAnswer) === normalizeAnswer(item.answer);

        results.push({
            question: qNum,
            type: '填空题',
            content: item.q,
            correctAnswer: item.answer,
            studentAnswer: studentAnswer || '未作答',
            isCorrect: isCorrect,
            score: isCorrect ? 4 : 0
        });

        if (isCorrect) {
            totalScore += 4;
            correctCount++;
        } else {
            errors.push({
                question: qNum,
                type: '填空题',
                knowledgePoint: '数的组成与读写',
                content: item.q,
                correctAnswer: item.answer,
                studentAnswer: studentAnswer || '未作答'
            });
        }
    });

    // 批改计算题
    template.calculation.forEach((item, index) => {
        const qNum = index + template.multipleChoice.length + template.fillBlank.length + 1;
        const studentAnswer = studentAnswers[qNum];
        const isCorrect = studentAnswer && normalizeAnswer(studentAnswer) === normalizeAnswer(item.answer);

        results.push({
            question: qNum,
            type: '计算题',
            content: item.q,
            correctAnswer: item.answer,
            studentAnswer: studentAnswer || '未作答',
            isCorrect: isCorrect,
            score: isCorrect ? 3 : 0
        });

        if (isCorrect) {
            totalScore += 3;
            correctCount++;
        } else {
            errors.push({
                question: qNum,
                type: '计算题',
                knowledgePoint: '计算能力',
                content: item.q,
                correctAnswer: item.answer,
                studentAnswer: studentAnswer || '未作答'
            });
        }
    });

    return {
        results: results,
        totalScore: totalScore,
        correctCount: correctCount,
        totalQuestions: results.length,
        errors: errors
    };
}

// 标准化答案（去除空格等）
function normalizeAnswer(answer) {
    return answer.replace(/\s+/g, '').toLowerCase();
}

// 显示批改结果
function displayGradeResult(result, studentName) {
    document.getElementById('total-score').textContent = result.totalScore;

    let gradeHTML = `<h3>${studentName} 的答题情况</h3>`;
    gradeHTML += `<p>正确题数：${result.correctCount} / ${result.totalQuestions}</p>`;

    result.results.forEach(item => {
        const className = item.isCorrect ? 'correct' : 'incorrect';
        const icon = item.isCorrect ? '✓' : '✗';

        gradeHTML += `
            <div class="question-result ${className}">
                <h4>${icon} 第${item.question}题 (${item.type}) ${item.score}分</h4>
                <p><strong>题目：</strong>${item.content}</p>
                <p><strong>学生答案：</strong>${item.studentAnswer}</p>
                ${!item.isCorrect ? `<p><strong>正确答案：</strong>${item.correctAnswer}</p>` : ''}
            </div>
        `;
    });

    document.getElementById('grade-content').innerHTML = gradeHTML;

    // 显示错题分析
    if (result.errors.length > 0) {
        displayErrorAnalysis(result.errors);
    } else {
        document.getElementById('error-analysis').innerHTML = '<h3>🎉 全部正确！继续保持！</h3>';
    }
}

// 显示错题分析
function displayErrorAnalysis(errors) {
    const knowledgePoints = {};

    errors.forEach(error => {
        if (!knowledgePoints[error.knowledgePoint]) {
            knowledgePoints[error.knowledgePoint] = [];
        }
        knowledgePoints[error.knowledgePoint].push(error);
    });

    let analysisHTML = '<h3>📊 错题分析与知识点归纳</h3>';

    Object.keys(knowledgePoints).forEach(point => {
        analysisHTML += `
            <div class="knowledge-point">
                <h4>🎯 知识点：${point}</h4>
                <p><strong>错题数量：</strong>${knowledgePoints[point].length} 题</p>
                <ul>
        `;

        knowledgePoints[point].forEach(error => {
            analysisHTML += `
                <li>
                    <strong>第${error.question}题：</strong>${error.content}<br>
                    <span style="color: #dc3545;">学生答案：${error.studentAnswer}</span> →
                    <span style="color: #28a745;">正确答案：${error.correctAnswer}</span>
                </li>
            `;
        });

        analysisHTML += `
                </ul>
                <p><strong>💡 建议：</strong>针对"${point}"进行专项练习</p>
            </div>
        `;
    });

    document.getElementById('error-analysis').innerHTML = analysisHTML;
}

// 生成针对性练习
function generatePractice() {
    const selectedPoints = [];
    document.querySelectorAll('.checkbox-group input[type="checkbox"]:checked').forEach(cb => {
        selectedPoints.push(cb.value);
    });

    if (selectedPoints.length === 0) {
        alert('请至少选择一个薄弱知识点！');
        return;
    }

    const count = document.getElementById('practice-count').value;

    let practiceContent = generatePracticeContent(selectedPoints, count);

    document.getElementById('practice-content').innerHTML = `<pre>${practiceContent}</pre>`;
    document.getElementById('practice-output').style.display = 'block';
    document.getElementById('practice-output').scrollIntoView({ behavior: 'smooth' });
}

// 生成练习内容
function generatePracticeContent(points, count) {
    let content = `# 四年级数学针对性练习题
**班级：________ 姓名：________ 日期：________**

**薄弱知识点：${points.join('、')}**

---

`;

    const practiceQuestions = {
        'large-numbers': [
            '读出下面各数：10050（  ）、20007（  ）',
            '写出下面各数：三万零五十（  ）、九千零九（  ）',
            '比较大小：5670 ○ 5760，10000 ○ 9999'
        ],
        'calculation': [
            '3500 + 2800 = ',
            '7000 - 3450 = ',
            '4326 + 1895 = ',
            '8000 - 2678 = '
        ],
        'multiplication': [
            '25 × 4 = ',
            '125 × 8 = ',
            '36 × 12 = ',
            '48 × 23 = '
        ],
        'word-problems': [
            '小明有3500元，买书花了1280元，还剩多少元？',
            '果园里有苹果树2400棵，梨树比苹果树多800棵，两种树一共有多少棵？',
            '学校买来45盒粉笔，每盒12支，一共买来多少支粉笔？'
        ]
    };

    let questionNum = 1;
    points.forEach(point => {
        if (practiceQuestions[point]) {
            content += `## ${getPointName(point)}\n\n`;
            practiceQuestions[point].forEach(q => {
                content += `**${questionNum}. ${q}**\n\n\n`;
                questionNum++;
                if (questionNum > count) return;
            });
            content += '\n';
        }
    });

    content += `\n---\n**完成日期：________ 家长签字：________**`;

    return content;
}

// 获取知识点名称
function getPointName(value) {
    const names = {
        'large-numbers': '大数的认识与读写',
        'calculation': '万以内加减法',
        'multiplication': '多位数乘法',
        'division': '除法运算',
        'decimals': '小数运算',
        'area': '面积与周长',
        'angles': '角的度量',
        'word-problems': '应用题解答',
        'unit-conversion': '单位换算',
        'logic': '逻辑推理'
    };
    return names[value] || value;
}

// 打印功能
function printTest() {
    window.print();
}

function printPractice() {
    window.print();
}

// 下载功能
function downloadTest() {
    const content = document.getElementById('test-content').textContent;
    downloadFile('四年级数学测试卷.md', content);
}

function downloadPractice() {
    const content = document.getElementById('practice-content').textContent;
    downloadFile('四年级数学练习题.md', content);
}

function downloadFile(filename, content) {
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}

// 复制功能
function copyTest() {
    const content = document.getElementById('test-content').textContent;
    navigator.clipboard.writeText(content).then(() => {
        alert('✓ 试卷内容已复制到剪贴板！');
    });
}
