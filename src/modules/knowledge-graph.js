/**
 * 四年级数学知识图谱（北师大版·海淀区）
 *
 * 每个知识点结构：
 *   id: 唯一标识
 *   name: 知识点名称
 *   unit: 所属单元代码
 *   dependsOn: 依赖的前置知识点ID列表
 *   category: 能力分类（数与运算/图形与几何/统计与概率/方程与代数）
 */

const knowledgeGraph = {
    // ==================== 上学期 ====================

    s1u1: {
        unit: "认识更大的数",
        semester: "上学期",
        knowledgePoints: {
            kp_s1u1_01: { id: "kp_s1u1_01", name: "万以内数的读写", category: "数与运算", dependsOn: [] },
            kp_s1u1_02: { id: "kp_s1u1_02", name: "数位与计数单位", category: "数与运算", dependsOn: ["kp_s1u1_01"] },
            kp_s1u1_03: { id: "kp_s1u1_03", name: "多位数大小比较", category: "数与运算", dependsOn: ["kp_s1u1_01", "kp_s1u1_02"] },
            kp_s1u1_04: { id: "kp_s1u1_04", name: "近似数与估算", category: "数与运算", dependsOn: ["kp_s1u1_03"] },
            kp_s1u1_05: { id: "kp_s1u1_05", name: "大数的加减运算", category: "数与运算", dependsOn: ["kp_s1u1_02"] },
            kp_s1u1_06: { id: "kp_s1u1_06", name: "大数实际应用", category: "数与运算", dependsOn: ["kp_s1u1_05"] }
        }
    },
    s1u2: {
        unit: "线与角",
        semester: "上学期",
        knowledgePoints: {
            kp_s1u2_01: { id: "kp_s1u2_01", name: "线段、射线与直线", category: "图形与几何", dependsOn: [] },
            kp_s1u2_02: { id: "kp_s1u2_02", name: "角的分类与大小", category: "图形与几何", dependsOn: ["kp_s1u2_01"] },
            kp_s1u2_03: { id: "kp_s1u2_03", name: "角的度量与计算", category: "图形与几何", dependsOn: ["kp_s1u2_02"] },
            kp_s1u2_04: { id: "kp_s1u2_04", name: "角的实际应用", category: "图形与几何", dependsOn: ["kp_s1u2_03"] }
        }
    },
    s1u3: {
        unit: "乘法",
        semester: "上学期",
        knowledgePoints: {
            kp_s1u3_01: { id: "kp_s1u3_01", name: "乘法口诀与口算", category: "数与运算", dependsOn: [] },
            kp_s1u3_02: { id: "kp_s1u3_02", name: "多位数乘法计算", category: "数与运算", dependsOn: ["kp_s1u3_01"] },
            kp_s1u3_03: { id: "kp_s1u3_03", name: "乘法运算规律", category: "数与运算", dependsOn: ["kp_s1u3_02"] },
            kp_s1u3_04: { id: "kp_s1u3_04", name: "乘法应用题", category: "数与运算", dependsOn: ["kp_s1u3_02"] }
        }
    },
    s1u4: {
        unit: "图形的变换",
        semester: "上学期",
        knowledgePoints: {
            kp_s1u4_01: { id: "kp_s1u4_01", name: "轴对称图形", category: "图形与几何", dependsOn: [] },
            kp_s1u4_02: { id: "kp_s1u4_02", name: "平移与旋转", category: "图形与几何", dependsOn: [] }
        }
    },
    s1u5: {
        unit: "除法",
        semester: "上学期",
        knowledgePoints: {
            kp_s1u5_01: { id: "kp_s1u5_01", name: "除法口算", category: "数与运算", dependsOn: ["kp_s1u3_01"] },
            kp_s1u5_02: { id: "kp_s1u5_02", name: "多位数除法计算", category: "数与运算", dependsOn: ["kp_s1u5_01"] },
            kp_s1u5_03: { id: "kp_s1u5_03", name: "除法运算规律（含余数）", category: "数与运算", dependsOn: ["kp_s1u5_02"] },
            kp_s1u5_04: { id: "kp_s1u5_04", name: "除法应用题", category: "数与运算", dependsOn: ["kp_s1u5_02"] }
        }
    },
    s1u6: {
        unit: "方向与位置",
        semester: "上学期",
        knowledgePoints: {
            kp_s1u6_01: { id: "kp_s1u6_01", name: "方向识别（东南西北）", category: "图形与几何", dependsOn: [] },
            kp_s1u6_02: { id: "kp_s1u6_02", name: "位置与路线", category: "图形与几何", dependsOn: ["kp_s1u6_01"] }
        }
    },
    s1u7: {
        unit: "生活中的负数",
        semester: "上学期",
        knowledgePoints: {
            kp_s1u7_01: { id: "kp_s1u7_01", name: "负数的认识与表示", category: "数与运算", dependsOn: [] },
            kp_s1u7_02: { id: "kp_s1u7_02", name: "正负数大小比较", category: "数与运算", dependsOn: ["kp_s1u7_01"] },
            kp_s1u7_03: { id: "kp_s1u7_03", name: "正负数的实际应用", category: "数与运算", dependsOn: ["kp_s1u7_02"] }
        }
    },
    s1u8: {
        unit: "可能性",
        semester: "上学期",
        knowledgePoints: {
            kp_s1u8_01: { id: "kp_s1u8_01", name: "确定与不确定事件", category: "统计与概率", dependsOn: [] },
            kp_s1u8_02: { id: "kp_s1u8_02", name: "可能性大小比较", category: "统计与概率", dependsOn: ["kp_s1u8_01"] }
        }
    },

    // ==================== 下学期 ====================

    s2u1: {
        unit: "小数的意义和加减法",
        semester: "下学期",
        knowledgePoints: {
            kp_s2u1_01: { id: "kp_s2u1_01", name: "小数的意义与数位", category: "数与运算", dependsOn: ["kp_s1u1_02"] },
            kp_s2u1_02: { id: "kp_s2u1_02", name: "小数大小比较", category: "数与运算", dependsOn: ["kp_s2u1_01"] },
            kp_s2u1_03: { id: "kp_s2u1_03", name: "小数的加减计算", category: "数与运算", dependsOn: ["kp_s2u1_01"] },
            kp_s2u1_04: { id: "kp_s2u1_04", name: "小数加减应用题", category: "数与运算", dependsOn: ["kp_s2u1_03"] }
        }
    },
    s2u2: {
        unit: "认识三角形和四边形",
        semester: "下学期",
        knowledgePoints: {
            kp_s2u2_01: { id: "kp_s2u2_01", name: "三角形的特性与分类", category: "图形与几何", dependsOn: [] },
            kp_s2u2_02: { id: "kp_s2u2_02", name: "三角形内角和", category: "图形与几何", dependsOn: ["kp_s2u2_01"] },
            kp_s2u2_03: { id: "kp_s2u2_03", name: "四边形的特性与分类", category: "图形与几何", dependsOn: [] },
            kp_s2u2_04: { id: "kp_s2u2_04", name: "平行四边形与梯形", category: "图形与几何", dependsOn: ["kp_s2u2_03"] },
            kp_s2u2_05: { id: "kp_s2u2_05", name: "图形周长与面积", category: "图形与几何", dependsOn: ["kp_s2u2_04"] }
        }
    },
    s2u3: {
        unit: "小数乘法",
        semester: "下学期",
        knowledgePoints: {
            kp_s2u3_01: { id: "kp_s2u3_01", name: "小数乘法口算", category: "数与运算", dependsOn: ["kp_s2u1_01", "kp_s1u3_01"] },
            kp_s2u3_02: { id: "kp_s2u3_02", name: "小数乘法计算", category: "数与运算", dependsOn: ["kp_s2u3_01"] },
            kp_s2u3_03: { id: "kp_s2u3_03", name: "小数点移动规律", category: "数与运算", dependsOn: ["kp_s2u3_01"] },
            kp_s2u3_04: { id: "kp_s2u3_04", name: "小数乘法应用题", category: "数与运算", dependsOn: ["kp_s2u3_02"] }
        }
    },
    s2u4: {
        unit: "观察物体",
        semester: "下学期",
        knowledgePoints: {
            kp_s2u4_01: { id: "kp_s2u4_01", name: "三视图（正面/上面/侧面）", category: "图形与几何", dependsOn: [] },
            kp_s2u4_02: { id: "kp_s2u4_02", name: "空间想象与推理", category: "图形与几何", dependsOn: ["kp_s2u4_01"] }
        }
    },
    s2u5: {
        unit: "认识方程",
        semester: "下学期",
        knowledgePoints: {
            kp_s2u5_01: { id: "kp_s2u5_01", name: "方程的认识与概念", category: "方程与代数", dependsOn: [] },
            kp_s2u5_02: { id: "kp_s2u5_02", name: "解简单方程", category: "方程与代数", dependsOn: ["kp_s2u5_01"] },
            kp_s2u5_03: { id: "kp_s2u5_03", name: "列方程解应用题", category: "方程与代数", dependsOn: ["kp_s2u5_02"] }
        }
    },
    s2u6: {
        unit: "数据的表示和分析",
        semester: "下学期",
        knowledgePoints: {
            kp_s2u6_01: { id: "kp_s2u6_01", name: "统计图的认识与选择", category: "统计与概率", dependsOn: [] },
            kp_s2u6_02: { id: "kp_s2u6_02", name: "平均数的计算", category: "统计与概率", dependsOn: [] },
            kp_s2u6_03: { id: "kp_s2u6_03", name: "平均数实际应用", category: "统计与概率", dependsOn: ["kp_s2u6_02"] }
        }
    },
    s2u7: {
        unit: "认识负数",
        semester: "下学期",
        knowledgePoints: {
            kp_s2u7_01: { id: "kp_s2u7_01", name: "负数的认识与表示", category: "数与运算", dependsOn: [] },
            kp_s2u7_02: { id: "kp_s2u7_02", name: "正负数大小比较", category: "数与运算", dependsOn: ["kp_s2u7_01"] },
            kp_s2u7_03: { id: "kp_s2u7_03", name: "正负数的实际应用", category: "数与运算", dependsOn: ["kp_s2u7_02"] }
        }
    },
    s2u8: {
        unit: "总复习",
        semester: "下学期",
        knowledgePoints: {
            kp_s2u8_01: { id: "kp_s2u8_01", name: "期末综合（数与运算）", category: "数与运算", dependsOn: [] },
            kp_s2u8_02: { id: "kp_s2u8_02", name: "期末综合（图形与几何）", category: "图形与几何", dependsOn: [] },
            kp_s2u8_03: { id: "kp_s2u8_03", name: "期末综合（方程与代数）", category: "方程与代数", dependsOn: [] },
            kp_s2u8_04: { id: "kp_s2u8_04", name: "期末综合（统计与概率）", category: "统计与概率", dependsOn: [] }
        }
    }
};

// 获取所有知识点的扁平列表（含所属单元信息）
function getAllKnowledgePoints() {
    const all = [];
    for (const unitCode in knowledgeGraph) {
        const unit = knowledgeGraph[unitCode];
        for (const kpId in unit.knowledgePoints) {
            all.push({
                ...unit.knowledgePoints[kpId],
                unitCode: unitCode,
                unitName: unit.unit,
                semester: unit.semester
            });
        }
    }
    return all;
}

// 获取某个单元的知识点列表
function getUnitKnowledgePoints(unitCode) {
    const unit = knowledgeGraph[unitCode];
    if (!unit) return [];
    return Object.values(unit.knowledgePoints);
}

// 获取某个知识点的详细信息
function getKnowledgePoint(kpId) {
    for (const unitCode in knowledgeGraph) {
        if (knowledgeGraph[unitCode].knowledgePoints[kpId]) {
            const kp = knowledgeGraph[unitCode].knowledgePoints[kpId];
            return {
                ...kp,
                unitCode: unitCode,
                unitName: knowledgeGraph[unitCode].unit,
                semester: knowledgeGraph[unitCode].semester
            };
        }
    }
    return null;
}

// 获取知识点的前置依赖（递归）
function getPrerequisites(kpId, depth = 0) {
    const kp = getKnowledgePoint(kpId);
    if (!kp || depth > 5) return [];
    const prereqs = [];
    for (const depId of kp.dependsOn) {
        prereqs.push(depId);
        prereqs.push(...getPrerequisites(depId, depth + 1));
    }
    return prereqs;
}
