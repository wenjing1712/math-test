# 贡献指南

感谢你对"四年级数学 AI 自适应学习系统"的关注！我们欢迎任何形式的贡献。

---

## 如何贡献

### 1. 报告问题（Bug Report）

如果你发现了 Bug，请：

1. 在 [Issues](https://github.com/wenjing1712/math-test/issues) 中搜索是否已有相同问题
2. 如果没有，创建新 Issue，包含以下信息：
   - **问题描述**：清楚描述问题
   - **复现步骤**：如何触发这个问题
   - **预期行为**：你期望看到什么
   - **实际行为**：实际发生了什么
   - **环境信息**：浏览器版本、操作系统等
   - **截图**：如果可能，附上截图

#### Bug Report 模板
```markdown
### 问题描述
简要描述问题

### 复现步骤
1. 打开页面
2. 点击"生成测试卷"
3. ...

### 预期行为
应该生成一份试卷

### 实际行为
页面报错

### 环境信息
- 浏览器：Chrome 120
- 操作系统：macOS 14

### 截图
（如果有）
```

---

### 2. 功能建议（Feature Request）

如果你有新功能想法，请：

1. 在 Issues 中创建 Feature Request
2. 描述你的需求和使用场景
3. 说明这个功能为什么重要

#### Feature Request 模板
```markdown
### 功能描述
我希望系统能够...

### 使用场景
作为一名家长，我想要...，这样可以...

### 可选实现方案
可以考虑添加一个按钮...
```

---

### 3. 提交代码（Pull Request）

#### 准备工作

1. **Fork 本仓库**
   - 点击右上角"Fork"按钮

2. **克隆你的 Fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/math-test.git
   cd math-test
   ```

3. **添加上游仓库**
   ```bash
   git remote add upstream https://github.com/wenjing1712/math-test.git
   ```

#### 开发流程

1. **创建功能分支**
   ```bash
   git checkout -b feature/your-feature-name
   ```

   分支命名规范：
   - `feature/` - 新功能
   - `fix/` - Bug 修复
   - `docs/` - 文档更新
   - `refactor/` - 代码重构
   - `test/` - 测试相关

2. **编写代码**
   - 遵循项目代码规范（见下文）
   - 添加必要的注释
   - 测试你的修改

3. **提交代码**
   ```bash
   git add .
   git commit -m "feat: 添加导出学生数据功能"
   ```

   提交信息规范（Conventional Commits）：
   - `feat:` - 新功能
   - `fix:` - Bug 修复
   - `docs:` - 文档更新
   - `style:` - 代码格式调整（不影响功能）
   - `refactor:` - 代码重构
   - `test:` - 测试相关
   - `chore:` - 构建/工具相关

4. **推送到你的 Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **创建 Pull Request**
   - 访问你的 Fork 页面
   - 点击"New Pull Request"
   - 填写 PR 描述（见下文）
   - 提交 PR

#### Pull Request 模板

```markdown
### 改动说明
简要描述你做了什么改动

### 相关 Issue
Closes #123 （如果解决了某个 Issue）

### 改动类型
- [ ] Bug 修复
- [ ] 新功能
- [ ] 文档更新
- [ ] 代码重构
- [ ] 其他

### 测试
- [ ] 我已在 Chrome 中测试
- [ ] 我已在 Firefox 中测试
- [ ] 我已在 Safari 中测试
- [ ] 我已添加必要的注释

### 截图
（如果是 UI 相关改动）
```

---

## 代码规范

### JavaScript

1. **使用 ES6+ 语法**
   ```javascript
   // 好的
   const students = ['小明', '小红'];
   const filteredStudents = students.filter(s => s.includes('小'));

   // 不好的
   var students = ['小明', '小红'];
   var filteredStudents = students.filter(function(s) {
     return s.includes('小');
   });
   ```

2. **命名规范**
   ```javascript
   // 变量和函数：小驼峰
   const studentName = '小明';
   function generateTest() { }

   // 常量：大写下划线
   const MAX_QUESTIONS = 20;

   // 类：大驼峰
   class DiagnosticEngine { }
   ```

3. **添加 JSDoc 注释**
   ```javascript
   /**
    * 批改试卷
    * @param {Array<string>} studentAnswers - 学生答案数组
    * @param {Array<string>} correctAnswers - 正确答案数组
    * @returns {Object} { score: number, wrongQuestions: Array }
    */
   function gradeTest(studentAnswers, correctAnswers) {
     // ...
   }
   ```

4. **使用 Prettier 格式化**
   ```bash
   prettier --write "**/*.{js,html,css}"
   ```

### HTML

1. **语义化标签**
   ```html
   <!-- 好的 -->
   <header>
     <h1>标题</h1>
   </header>
   <main>
     <article>内容</article>
   </main>

   <!-- 不好的 -->
   <div class="header">
     <div class="title">标题</div>
   </div>
   ```

2. **可访问性**
   ```html
   <!-- 添加 alt 属性 -->
   <img src="icon.png" alt="图标说明">

   <!-- 添加 label -->
   <label for="student-name">学生姓名</label>
   <input id="student-name" type="text">
   ```

### CSS

1. **使用类选择器，避免 ID 选择器**
   ```css
   /* 好的 */
   .btn-primary { }

   /* 不好的 */
   #btn1 { }
   ```

2. **命名规范（BEM）**
   ```css
   .student-card { }
   .student-card__name { }
   .student-card__score { }
   .student-card--active { }
   ```

---

## 题库贡献规范

如果你想贡献题目，请：

### 1. 题目格式

```javascript
{
  q: '题目内容（必须清晰、准确）',
  options: ['A选项', 'B选项', 'C选项', 'D选项'], // 仅选择题需要
  answer: 'A', // 或 '10, 100'（填空）或 '5000'（计算）
  difficulty: 'easy', // easy | medium | hard
  knowledgePoints: ['万以内数的读写', '数位与计数单位'] // 必须标注
}
```

### 2. 题目质量要求

- ✅ 符合四年级学生认知水平
- ✅ 题目表述清晰、准确
- ✅ 答案唯一且正确
- ✅ 难度标注准确
- ✅ 知识点标注完整
- ❌ 避免超纲内容
- ❌ 避免歧义选项
- ❌ 避免错别字

### 3. 提交流程

1. 在 `src/data/question-bank.js` 中添加题目
2. 在 `src/modules/knowledge-graph.js` 中确认知识点已定义
3. 本地测试：生成试卷并检查题目显示
4. 提交 PR，标题格式：`feat: 为 [单元名称] 添加 [题目数量] 道题`

---

## 文档贡献

文档同样重要！你可以：

- 修正错别字
- 补充示例代码
- 翻译成其他语言
- 添加常见问题解答
- 改进文档结构

---

## 行为准则

为了营造一个友好、包容的社区环境，我们要求所有贡献者：

- 🤝 **尊重他人**：友善、礼貌地交流
- 💡 **建设性反馈**：批评代码而非人
- 📚 **乐于分享**：分享知识和经验
- 🎯 **保持专注**：讨论应围绕项目本身
- 🚫 **零容忍**：不接受任何形式的骚扰

---

## 获得帮助

如果你在贡献过程中遇到问题：

1. 查看 [开发文档](DEVELOPMENT.md)
2. 搜索 [Issues](https://github.com/wenjing1712/math-test/issues)
3. 创建新 Issue 提问
4. 发邮件给维护者：flywenjing@163.com

---

## 感谢

感谢每一位贡献者！🎉

你的贡献将帮助更多四年级学生提升数学能力。

---

## 许可证

本项目采用 MIT 许可证。提交 PR 即表示你同意将你的贡献以相同许可证发布。

---

*最后更新：2026-05-14*
