# 开发文档

## 快速开始

### 克隆仓库
```bash
git clone https://github.com/wenjing1712/math-test.git
cd math-test
```

### 本地运行
直接在浏览器打开 `index.html` 即可使用，无需安装任何依赖。

---

## 项目结构

```
math-test/
├── index.html                      # 主页面（AI自适应学习系统）
├── src/
│   ├── data/
│   │   └── question-bank.js        # 完整题库（16个单元，600+题）
│   ├── modules/
│   │   ├── knowledge-graph.js      # 知识图谱（60+知识点）
│   │   └── diagnostic-engine.js    # 诊断引擎（批改+自适应）
│   └── styles/
│       └── main.css                # 主样式文件
├── docs/
│   ├── DEVELOPMENT.md              # 本文档
│   └── CONTRIBUTING.md             # 贡献指南
├── .github/workflows/
│   └── deploy.yml                  # GitHub Actions 自动部署
├── .prettierrc                     # 代码格式化配置
├── .eslintrc.json                  # 代码质量检查配置
├── .editorconfig                   # 编辑器配置
├── .gitignore                      # Git 忽略配置
├── LICENSE                         # MIT 开源许可证
└── README.md                       # 项目说明文档
```

---

## 核心模块说明

### 1. 题库系统 (`src/data/question-bank.js`)

#### 数据结构
```javascript
const questionBank = {
  's1u1': {
    title: '认识更大的数',
    multipleChoice: [
      {
        q: '题目内容',
        options: ['A', 'B', 'C', 'D'],
        answer: 'A',
        difficulty: 'easy',
        knowledgePoints: ['万以内数的读写', '数位与计数单位']
      }
    ],
    fillBlank: [...],
    calculation: [...],
    wordProblems: [...]
  },
  's1u2': {...},
  // ... 共16个单元
};
```

#### 知识点标注
每道题目都标注了所属知识点，用于：
- 错题诊断时定位薄弱环节
- 自适应出题时优先选择薄弱知识点
- 能力报告生成

### 2. 知识图谱 (`src/modules/knowledge-graph.js`)

#### 作用
- 定义知识点分类（数与运算、图形与几何等）
- 标注知识点间的依赖关系
- 支持诊断引擎判断前置知识是否掌握

#### 示例
```javascript
const knowledgeGraph = {
  '万以内数的读写': {
    category: '数与运算',
    prerequisites: [], // 前置知识点
    difficulty: 'easy'
  },
  '乘法竖式计算': {
    category: '数与运算',
    prerequisites: ['乘法口诀', '数位对齐'],
    difficulty: 'medium'
  }
};
```

### 3. 诊断引擎 (`src/modules/diagnostic-engine.js`)

#### 核心功能
1. **批改试卷**：对比学生答案与标准答案
2. **错题分析**：按知识点归纳错误类型
3. **能力建模**：为每个学生维护能力模型
4. **自适应出题**：根据薄弱项优先出题

#### 能力模型结构
```javascript
const studentModel = {
  name: '学生姓名',
  knowledgePoints: {
    '万以内数的读写': {
      masteryLevel: 0.85, // 掌握度 0-1
      practiceCount: 12,   // 练习次数
      correctCount: 10,    // 正确次数
      lastPracticeDate: '2026-05-14'
    }
  },
  testHistory: [
    {
      date: '2026-05-14',
      unit: 's1u1',
      score: 85,
      wrongQuestions: [...]
    }
  ]
};
```

---

## 添加新功能

### 添加新单元

1. **在题库中添加题目** (`src/data/question-bank.js`)
```javascript
's1u9': {
  title: '新单元名称',
  multipleChoice: [...],
  fillBlank: [...],
  calculation: [...],
  wordProblems: [...]
}
```

2. **在知识图谱中添加知识点** (`src/modules/knowledge-graph.js`)
```javascript
'新知识点名称': {
  category: '数与运算',
  prerequisites: ['前置知识点1'],
  difficulty: 'medium'
}
```

3. **在主页面添加单元选项** (`index.html`)
```javascript
const semesterUnits = {
  first: [
    // ...
    { value: 's1u9', text: '第九单元 - 新单元名称' }
  ]
};
```

### 添加新题型

1. **扩展题库数据结构**
```javascript
's1u1': {
  title: '...',
  // 现有题型
  multipleChoice: [...],
  // 新题型
  trueFalse: [
    { q: '判断题内容', answer: true, difficulty: 'easy' }
  ]
}
```

2. **修改试卷生成逻辑**
```javascript
function generateTest() {
  // ...
  const trueFalse = shuffleArray(bank.trueFalse).slice(0, 5);
  // 添加到试卷内容中
}
```

---

## 代码规范

### 使用 Prettier 格式化代码
```bash
# 安装 Prettier（需要 Node.js）
npm install --global prettier

# 格式化所有文件
prettier --write "**/*.{js,html,css,md}"
```

### 使用 ESLint 检查代码质量
```bash
# 安装 ESLint
npm install --global eslint

# 检查代码
eslint src/**/*.js
```

### 命名规范
- **变量和函数**：小驼峰命名 `studentModel`, `generateTest()`
- **常量**：大写下划线 `QUESTION_BANK`, `MAX_QUESTIONS`
- **文件名**：短横线分隔 `question-bank.js`, `diagnostic-engine.js`

### 注释规范
```javascript
/**
 * 生成单元测试卷
 * @param {string} semester - 学期 ('first' | 'second')
 * @param {string} unit - 单元ID (如 's1u1')
 * @param {string} mode - 出题模式 ('standard' | 'adaptive')
 * @returns {Object} 生成的试卷对象 { questions, answers }
 */
function generateTest(semester, unit, mode) {
  // 实现代码
}
```

---

## 测试

### 手动测试清单

#### 基础功能
- [ ] 添加新学生
- [ ] 切换学生
- [ ] 删除学生

#### 试卷生成
- [ ] 标准模式生成试卷
- [ ] 自适应模式生成试卷
- [ ] 打印试卷（检查格式）
- [ ] 切换学期/单元

#### 批改诊断
- [ ] 上传试卷照片
- [ ] 输入答案
- [ ] 查看分数和错题分析
- [ ] 查看辅导建议

#### 针对性练习
- [ ] 查看薄弱知识点
- [ ] 生成针对性练习
- [ ] 批改练习

#### 能力报告
- [ ] 查看整体掌握度
- [ ] 查看能力分布图
- [ ] 查看强弱项排名
- [ ] 查看练习历史

### 浏览器兼容性测试
- [ ] Chrome 90+
- [ ] Firefox 88+
- [ ] Safari 14+
- [ ] Edge 90+

---

## 调试技巧

### 查看 localStorage 数据
```javascript
// 在浏览器控制台执行
console.log(localStorage);

// 查看特定学生数据
const studentData = JSON.parse(localStorage.getItem('student_小明'));
console.log(studentData);

// 清空所有数据
localStorage.clear();
```

### 开启详细日志
在 `index.html` 中添加：
```javascript
const DEBUG = true;

function log(...args) {
  if (DEBUG) console.log(...args);
}

// 使用
log('生成试卷:', unit, mode);
```

---

## 性能优化

### localStorage 容量管理
- 浏览器 localStorage 限制通常为 5-10MB
- 定期清理历史记录（保留最近 30 次）
- 压缩能力模型数据

### 大题库加载优化
- 当前所有题目一次性加载（~60KB）
- 未来可考虑按学期拆分，按需加载

---

## 常见问题

### Q: 如何备份学生数据？
A: 使用"导出数据"功能，下载 JSON 文件保存。

### Q: 更换浏览器后数据丢失？
A: localStorage 数据仅存储在当前浏览器。需要先导出数据，再在新浏览器导入。

### Q: 如何添加自定义题目？
A: 修改 `src/data/question-bank.js`，按格式添加题目并刷新页面。

---

## 联系方式

- **开发者**：wenjing1712
- **邮箱**：flywenjing@163.com
- **GitHub**：https://github.com/wenjing1712/math-test
- **问题反馈**：https://github.com/wenjing1712/math-test/issues

---

*最后更新：2026-05-14*
