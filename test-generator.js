// 试卷生成器 - 随机抽题并根据难度调整

// 标签切换
function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    event.target.classList.add('active');
    document.getElementById(tabName + '-tab').classList.add('active');
}

// 随机打乱数组
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// 根据难度筛选题目
function filterByDifficulty(questions, difficulty, count) {
    let filtered = [];

    if (difficulty === 'easy') {
        // 基础：60% easy + 30% medium + 10% hard
        const easy = questions.filter(q => q.difficulty === 'easy');
        const medium = questions.filter(q => q.difficulty === 'medium');
        const hard = questions.filter(q => q.difficulty === 'hard');

        filtered = [
            ...shuffleArray(easy).slice(0, Math.ceil(count * 0.6)),
            ...shuffleArray(medium).slice(0, Math.ceil(count * 0.3)),
            ...shuffleArray(hard).slice(0, Math.ceil(count * 0.1))
        ];
    } else if (difficulty === 'medium') {
        // 中等：30% easy + 50% medium + 20% hard
        const easy = questions.filter(q => q.difficulty === 'easy');
        const medium = questions.filter(q => q.difficulty === 'medium');
        const hard = questions.filter(q => q.difficulty === 'hard');

        filtered = [
            ...shuffleArray(easy).slice(0, Math.ceil(count * 0.3)),
            ...shuffleArray(medium).slice(0, Math.ceil(count * 0.5)),
            ...shuffleArray(hard).slice(0, Math.ceil(count * 0.2))
        ];
    } else if (difficulty === 'hard') {
        // 提高：10% easy + 40% medium + 50% hard
        const easy = questions.filter(q => q.difficulty === 'easy');
        const medium = questions.filter(q => q.difficulty === 'medium');
        const hard = questions.filter(q => q.difficulty === 'hard');

        filtered = [
            ...shuffleArray(easy).slice(0, Math.ceil(count * 0.1)),
            ...shuffleArray(medium).slice(0, Math.ceil(count * 0.4)),
            ...shuffleArray(hard).slice(0, Math.ceil(count * 0.5))
        ];
    }

    return shuffleArray(filtered).slice(0, count);
}

// 生成测试卷
function generateTest() {
    const unit = document.getElementById('unit-select').value;
    const difficulty = document.getElementById('difficulty-select').value;

    const bank = questionBank[unit];

    if (!bank) {
        alert('该单元题库正在完善中，请选择第1、3、5单元！');
        return;
    }

    // 根据难度随机抽取题目
    const multipleChoice = filterByDifficulty(bank.multipleChoice, difficulty, 5);
    const fillBlank = filterByDifficulty(bank.fillBlank, difficulty, 5);
    const calculation = filterByDifficulty(bank.calculation, difficulty, 6);
    const wordProblems = filterByDifficulty(bank.wordProblems, difficulty, 3);

    // 生成试卷内容
    let content = `四年级数学第${getUnitNumber(unit)}单元测试卷 - ${bank.title}
（北师大版 · 难度：${getDifficultyName(difficulty)}）

班级：________    姓名：________    学号：________    成绩：________

================================================================================

一、选择题（每题3分，共${multipleChoice.length * 3}分）

`;

    multipleChoice.forEach((item, index) => {
        content += `${index + 1}. ${item.q}\n`;
        item.options.forEach((opt, i) => {
            content += `   ${String.fromCharCode(65 + i)}. ${opt}    `;
        });
        content += '\n\n';
    });

    content += `================================================================================

二、填空题（每空2分，共${fillBlank.length * 4}分）

`;

    fillBlank.forEach((item, index) => {
        content += `${index + multipleChoice.length + 1}. ${item.q}\n\n`;
    });

    content += `================================================================================

三、计算题（每题3分，共${calculation.length * 3}分）

`;

    calculation.forEach((item, index) => {
        content += `${index + multipleChoice.length + fillBlank.length + 1}. ${item.q} =\n\n`;
    });

    content += `================================================================================

四、应用题（每题6分，共${wordProblems.length * 6}分）

`;

    wordProblems.forEach((item, index) => {
        content += `${index + multipleChoice.length + fillBlank.length + calculation.length + 1}. ${item.q}\n\n\n\n`;
    });

    content += `================================================================================

注意事项：
1. 请认真审题，仔细计算
2. 计算题要写出完整过程
3. 应用题要写出算式和答案
4. 检查时注意单位是否正确

本试卷总分：100分    考试时间：60分钟`;

    document.getElementById('test-content').textContent = content;
    document.getElementById('test-output').style.display = 'block';
    document.getElementById('test-output').scrollIntoView({ behavior: 'smooth' });
}

function getUnitNumber(unit) {
    const units = {
        '1': '一', '2': '二', '3': '三', '4': '四',
        '5': '五', '6': '六', '7': '七', '8': '八'
    };
    return units[unit] || unit;
}

function getDifficultyName(difficulty) {
    const names = {
        'easy': '基础',
        'medium': '中等（海淀区标准）',
        'hard': '提高'
    };
    return names[difficulty] || difficulty;
}

// 打印功能 - 只打印试卷内容
function printTest() {
    window.print();
}

// 下载功能
function downloadTest() {
    const content = document.getElementById('test-content').textContent;
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);

    const unit = document.getElementById('unit-select').value;
    const difficulty = document.getElementById('difficulty-select').value;
    const date = new Date().toISOString().slice(0, 10);

    link.download = `四年级数学第${unit}单元-${difficulty}-${date}.md`;
    link.click();
}

console.log('Test generator loaded successfully');
