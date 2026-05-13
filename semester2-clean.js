// 四年级下学期题库 (北师大版)

const semester2QuestionBank = {
    '2-1': {
        title: "小数的意义和加减法",
        multipleChoice: [
            { q: "0.8里面有（  ）个0.1", options: ["8", "0.8", "80", "0.08"], answer: "A", difficulty: "easy" },
            { q: "3.45中的4在（  ）位上", options: ["个位", "十分位", "百分位", "十位"], answer: "B", difficulty: "easy" },
            { q: "下面各数中，最大的是（  ）", options: ["0.9", "0.99", "0.999", "1.0"], answer: "D", difficulty: "medium" },
            { q: "把5.6扩大10倍是（  ）", options: ["0.56", "56", "560", "5.60"], answer: "B", difficulty: "medium" },
            { q: "0.7和0.70比较（  ）", options: ["0.7>0.70", "0.7<0.70", "0.7=0.70", "无法比较"], answer: "C", difficulty: "easy" },
            { q: "3.6-1.8的结果是（  ）", options: ["1.8", "2.2", "1.2", "2.8"], answer: "A", difficulty: "medium" },
            { q: "下面哪个小数不能改写成三位小数（  ）", options: ["0.5", "1.23", "2.100", "都可以"], answer: "D", difficulty: "hard" },
            { q: "4.05读作（  ）", options: ["四点零五", "四点五", "四十点五", "四点五十"], answer: "A", difficulty: "easy" }
        ],
        fillBlank: [
            { q: "0.6是（  ）个0.1，也是（  ）个0.01", answer: "6, 60", difficulty: "easy" },
            { q: "5.43是由（  ）个1、（  ）个0.1和（  ）个0.01组成的", answer: "5, 4, 3", difficulty: "medium" },
            { q: "把3改写成一位小数是（  ），改写成两位小数是（  ）", answer: "3.0, 3.00", difficulty: "easy" },
            { q: "0.58里面有（  ）个0.01，2.3里面有（  ）个0.1", answer: "58, 23", difficulty: "medium" },
            { q: "在2.4和2.5之间有（  ）个一位小数", answer: "0", difficulty: "hard" },
            { q: "6.8缩小100倍是（  ）", answer: "0.068", difficulty: "medium" },
            { q: "比0.9大比1.1小的一位小数有（  ）个", answer: "1", difficulty: "medium" },
            { q: "3.60的计数单位是（  ），它有（  ）个这样的计数单位", answer: "0.01, 360", difficulty: "hard" }
        ],
        calculation: [
            { q: "2.5 + 3.8", answer: "6.3", difficulty: "easy" },
            { q: "7.2 - 4.5", answer: "2.7", difficulty: "easy" },
            { q: "5.6 + 2.8 - 3.4", answer: "5.0", difficulty: "medium" },
            { q: "10 - 3.7", answer: "6.3", difficulty: "medium" },
            { q: "4.25 + 5.75", answer: "10", difficulty: "medium" },
            { q: "8.4 - 2.6 + 1.2", answer: "7.0", difficulty: "medium" },
            { q: "6.35 + 3.65 - 5", answer: "5.0", difficulty: "hard" },
            { q: "12.8 - 7.9 + 3.1", answer: "8.0", difficulty: "hard" }
        ],
        wordProblems: [
            { q: "小明身高1.35米，小红比小明高0.08米。小红身高多少米？", answer: "1.35+0.08=1.43(米)", difficulty: "easy" },
            { q: "一根绳子长5.6米，用去2.8米后，还剩多少米？", answer: "5.6-2.8=2.8(米)", difficulty: "easy" },
            { q: "水果店运来苹果3.5千克，梨比苹果多1.2千克，橙子比梨少0.8千克。橙子有多少千克？", answer: "3.5+1.2=4.7(千克)，4.7-0.8=3.9(千克)", difficulty: "medium" },
            { q: "小华买一支铅笔用了0.5元，买一块橡皮用了0.8元，买一个笔记本用了3.2元。他一共花了多少元？付了10元，应找回多少元？", answer: "0.5+0.8+3.2=4.5(元)，10-4.5=5.5(元)", difficulty: "hard" },
            { q: "一个长方形的长是4.5分米，宽是2.8分米。这个长方形的周长是多少分米？", answer: "(4.5+2.8)×2=14.6(分米)", difficulty: "medium" },
            { q: "水果店上午卖出水果12.5千克，下午比上午多卖3.8千克。这一天一共卖出水果多少千克？", answer: "12.5+3.8=16.3(千克)，12.5+16.3=28.8(千克)", difficulty: "medium" }
        ]
    },
    '2-2': {
        title: "认识三角形和四边形",
        multipleChoice: [
            { q: "三角形具有（  ）", options: ["不稳定性", "稳定性", "对称性", "平行性"], answer: "B", difficulty: "easy" },
            { q: "三角形的内角和是（  ）度", options: ["90", "180", "270", "360"], answer: "B", difficulty: "easy" },
            { q: "等腰三角形的两个底角（  ）", options: ["相等", "不相等", "互补", "互余"], answer: "A", difficulty: "easy" },
            { q: "平行四边形的对边（  ）", options: ["平行且相等", "只平行", "只相等", "垂直"], answer: "A", difficulty: "medium" },
            { q: "下列图形中，对角线相等的是（  ）", options: ["平行四边形", "梯形", "长方形", "任意四边形"], answer: "C", difficulty: "medium" },
            { q: "一个三角形有一个角是60度，另一个角是80度，第三个角是（  ）度", options: ["40", "50", "60", "100"], answer: "A", difficulty: "medium" },
            { q: "等边三角形的每个内角是（  ）度", options: ["45", "60", "90", "120"], answer: "B", difficulty: "easy" },
            { q: "梯形有（  ）组对边平行", options: ["0", "1", "2", "3"], answer: "B", difficulty: "easy" }
        ],
        fillBlank: [
            { q: "三角形按角分可以分为（  ）三角形、（  ）三角形和（  ）三角形", answer: "锐角, 直角, 钝角", difficulty: "medium" },
            { q: "一个三角形有两个角分别是50度和60度，第三个角是（  ）度，这是一个（  ）三角形", answer: "70, 锐角", difficulty: "medium" },
            { q: "平行四边形的对角（  ），对边（  ）", answer: "相等, 平行且相等", difficulty: "easy" },
            { q: "等腰三角形有（  ）条对称轴，等边三角形有（  ）条对称轴", answer: "1, 3", difficulty: "medium" },
            { q: "梯形有（  ）条边，其中（  ）组对边平行", answer: "4, 1", difficulty: "easy" },
            { q: "一个等腰三角形，顶角是40度，它的底角是（  ）度", answer: "70", difficulty: "hard" },
            { q: "四边形的内角和是（  ）度", answer: "360", difficulty: "medium" },
            { q: "在平行四边形中，相邻的两个角的和是（  ）度", answer: "180", difficulty: "hard" }
        ],
        calculation: [
            { q: "一个三角形，三个角分别是45度、55度和x度，求x", answer: "80度", difficulty: "easy" },
            { q: "等腰三角形的顶角是50度，求底角", answer: "65度", difficulty: "medium" },
            { q: "等边三角形的一个角是多少度", answer: "60度", difficulty: "easy" },
            { q: "平行四边形一个角是70度，求相邻角的度数", answer: "110度", difficulty: "medium" },
            { q: "三角形两个角分别是30度和90度，第三个角是多少度", answer: "60度", difficulty: "easy" },
            { q: "梯形中，上底8厘米，下底12厘米，高5厘米，求面积", answer: "50平方厘米", difficulty: "hard" }
        ],
        wordProblems: [
            { q: "用三根长度分别为3厘米、4厘米、5厘米的小棒能围成三角形吗？为什么？", answer: "能，因为任意两边之和大于第三边", difficulty: "medium" },
            { q: "一个等腰三角形的周长是18厘米，其中一条边长6厘米。这个三角形的三条边可能是多少厘米？", answer: "6厘米、6厘米、6厘米 或 6厘米、6厘米、6厘米（等边）或 4厘米、7厘米、7厘米", difficulty: "hard" },
            { q: "一个直角三角形，其中一个锐角是35度，另一个锐角是多少度？", answer: "180-90-35=55(度)", difficulty: "medium" },
            { q: "用4根长度都是5厘米的小棒，可以摆成什么图形？", answer: "正方形或菱形", difficulty: "easy" }
        ]
    },
    '2-3': {
        title: "小数乘法",
        multipleChoice: [
            { q: "0.6 × 3 = （  ）", options: ["1.8", "18", "0.18", "180"], answer: "A", difficulty: "easy" },
            { q: "3.5 × 2的结果是（  ）", options: ["6", "7", "6.5", "7.0"], answer: "D", difficulty: "easy" },
            { q: "一个数扩大10倍后是4.5，这个数是（  ）", options: ["0.45", "45", "0.045", "450"], answer: "A", difficulty: "medium" },
            { q: "2.4 × 5的积是（  ）", options: ["10", "12", "1.2", "120"], answer: "B", difficulty: "easy" },
            { q: "0.25 × 4 = （  ）", options: ["0.1", "1", "10", "100"], answer: "B", difficulty: "easy" },
            { q: "下列算式中，积最大的是（  ）", options: ["1.2×3", "0.8×5", "2.5×2", "1.5×3"], answer: "D", difficulty: "medium" },
            { q: "5.6 × 0.1 = （  ）", options: ["0.56", "5.6", "56", "560"], answer: "A", difficulty: "medium" },
            { q: "一个因数扩大10倍，另一个因数不变，积（  ）", options: ["扩大10倍", "缩小10倍", "不变", "扩大100倍"], answer: "A", difficulty: "hard" }
        ],
        fillBlank: [
            { q: "1.5 × 6 = （  ），0.8 × 5 = （  ）", answer: "9, 4", difficulty: "easy" },
            { q: "一个因数是2.5，另一个因数是4，积是（  ）", answer: "10", difficulty: "easy" },
            { q: "3.6 × 10 = （  ），3.6 × 100 = （  ）", answer: "36, 360", difficulty: "medium" },
            { q: "0.4 × 8 = 4 × （  ）= （  ）", answer: "0.8, 3.2", difficulty: "hard" },
            { q: "6.5扩大（  ）倍是65", answer: "10", difficulty: "medium" },
            { q: "0.9 × 7 = （  ）", answer: "6.3", difficulty: "medium" },
            { q: "2.8 × 3 + 2.8 = 2.8 × （  ）", answer: "4", difficulty: "hard" },
            { q: "12.5 × 8 = （  ）", answer: "100", difficulty: "medium" }
        ],
        calculation: [
            { q: "3.2 × 5", answer: "16", difficulty: "easy" },
            { q: "0.7 × 9", answer: "6.3", difficulty: "easy" },
            { q: "4.5 × 6", answer: "27", difficulty: "medium" },
            { q: "1.25 × 8", answer: "10", difficulty: "medium" },
            { q: "0.36 × 10", answer: "3.6", difficulty: "easy" },
            { q: "5.4 × 7", answer: "37.8", difficulty: "medium" },
            { q: "2.5 × 4 × 3", answer: "30", difficulty: "hard" },
            { q: "0.125 × 8 × 5", answer: "5", difficulty: "hard" }
        ],
        wordProblems: [
            { q: "一支铅笔0.8元，买6支要多少元？", answer: "0.8×6=4.8(元)", difficulty: "easy" },
            { q: "小明每天跑步1.5千米，一个星期（7天）跑多少千米？", answer: "1.5×7=10.5(千米)", difficulty: "easy" },
            { q: "一块长方形玻璃，长2.4米，宽1.5米。它的面积是多少平方米？", answer: "2.4×1.5=3.6(平方米)", difficulty: "medium" },
            { q: "水果店有苹果12.5千克，梨的重量是苹果的4倍。梨有多少千克？苹果和梨一共有多少千克？", answer: "12.5×4=50(千克)，12.5+50=62.5(千克)", difficulty: "medium" },
            { q: "一辆汽车每小时行驶65.5千米，3小时行驶多少千米？", answer: "65.5×3=196.5(千米)", difficulty: "medium" },
            { q: "一个正方形的边长是3.5分米，它的周长是多少分米？", answer: "3.5×4=14(分米)", difficulty: "easy" }
        ]
    },
    '2-4': {
        title: "观察物体",
        multipleChoice: [
            { q: "从正面看到的形状叫做（  ）", options: ["主视图", "俯视图", "侧视图", "平面图"], answer: "A", difficulty: "easy" },
            { q: "从上面看到的形状叫做（  ）", options: ["主视图", "俯视图", "侧视图", "立体图"], answer: "B", difficulty: "easy" },
            { q: "观察一个物体，最多可以看到（  ）个面", options: ["1", "2", "3", "4"], answer: "C", difficulty: "medium" },
            { q: "一个正方体，从不同方向观察，看到的形状（  ）", options: ["都一样", "都不一样", "有的一样", "无法确定"], answer: "A", difficulty: "easy" },
            { q: "从侧面看到的形状叫做（  ）", options: ["主视图", "俯视图", "侧视图", "背视图"], answer: "C", difficulty: "easy" }
        ],
        fillBlank: [
            { q: "观察物体时，我们通常从（  ）、（  ）、（  ）三个方向观察", answer: "正面, 上面, 侧面", difficulty: "easy" },
            { q: "从正面看是长方形，从上面看是圆形的物体可能是（  ）", answer: "圆柱", difficulty: "medium" },
            { q: "站在不同位置观察同一物体，看到的形状（  ）", answer: "可能不同", difficulty: "easy" },
            { q: "一个长方体，从上面看是一个长方形，这个长方形的长和宽分别是长方体的（  ）和（  ）", answer: "长, 宽", difficulty: "medium" }
        ],
        calculation: [],
        wordProblems: [
            { q: "用4个同样的小正方体搭成一个立体图形，从正面看是2层，从侧面看也是2层。请画出从上面看到的图形。", answer: "作图题（略）", difficulty: "hard" },
            { q: "一个圆柱，从正面看是什么形状？从上面看是什么形状？", answer: "从正面看是长方形，从上面看是圆形", difficulty: "medium" },
            { q: "一个长方体盒子，长10厘米，宽6厘米，高4厘米。从正面看到的面积是多少？", answer: "10×4=40(平方厘米)", difficulty: "medium" }
        ]
    },
    '2-5': {
        title: "认识方程",
        multipleChoice: [
            { q: "下列式子中，是方程的是（  ）", options: ["3+5=8", "x+5", "x+5=12", "5>3"], answer: "C", difficulty: "easy" },
            { q: "x = 8是方程x + 3 = 11的（  ）", options: ["解", "未知数", "等式", "算式"], answer: "A", difficulty: "medium" },
            { q: "方程5x = 20的解是（  ）", options: ["x=3", "x=4", "x=5", "x=15"], answer: "B", difficulty: "easy" },
            { q: "下列说法正确的是（  ）", options: ["方程一定是等式", "等式一定是方程", "方程不是等式", "等式都含有未知数"], answer: "A", difficulty: "medium" },
            { q: "x - 15 = 35，x等于（  ）", options: ["20", "50", "15", "35"], answer: "B", difficulty: "easy" },
            { q: "3x = 48的解是（  ）", options: ["x=12", "x=14", "x=16", "x=18"], answer: "C", difficulty: "medium" },
            { q: "方程x ÷ 4 = 12的解是（  ）", options: ["x=3", "x=8", "x=16", "x=48"], answer: "D", difficulty: "medium" },
            { q: "2x + 3 = 15的解是（  ）", options: ["x=6", "x=9", "x=12", "x=7.5"], answer: "A", difficulty: "hard" }
        ],
        fillBlank: [
            { q: "含有（  ）的（  ）叫做方程", answer: "未知数, 等式", difficulty: "easy" },
            { q: "使方程左右两边相等的（  ）的值，叫做方程的解", answer: "未知数", difficulty: "easy" },
            { q: "x + 12 = 30，x = （  ）", answer: "18", difficulty: "easy" },
            { q: "5x = 45，x = （  ）", answer: "9", difficulty: "easy" },
            { q: "x - 8 = 20，x = （  ）", answer: "28", difficulty: "easy" },
            { q: "x ÷ 6 = 7，x = （  ）", answer: "42", difficulty: "medium" },
            { q: "3x + 5 = 20，x = （  ）", answer: "5", difficulty: "hard" },
            { q: "如果a + b = 10，当a = 6时，b = （  ）", answer: "4", difficulty: "medium" }
        ],
        calculation: [
            { q: "解方程：x + 15 = 40", answer: "x = 25", difficulty: "easy" },
            { q: "解方程：x - 18 = 22", answer: "x = 40", difficulty: "easy" },
            { q: "解方程：4x = 32", answer: "x = 8", difficulty: "easy" },
            { q: "解方程：x ÷ 5 = 9", answer: "x = 45", difficulty: "easy" },
            { q: "解方程：3x + 6 = 24", answer: "x = 6", difficulty: "medium" },
            { q: "解方程：2x - 5 = 15", answer: "x = 10", difficulty: "medium" },
            { q: "解方程：5x + 8 = 48", answer: "x = 8", difficulty: "hard" },
            { q: "解方程：6x - 12 = 30", answer: "x = 7", difficulty: "hard" }
        ],
        wordProblems: [
            { q: "小明有x本书，小红有25本书，他们一共有60本书。求小明有多少本书？（列方程解答）", answer: "x+25=60，x=35", difficulty: "medium" },
            { q: "一个数的3倍是45，求这个数。（用方程解）", answer: "3x=45，x=15", difficulty: "easy" },
            { q: "果园里有苹果树x棵，梨树比苹果树多15棵，梨树有80棵。苹果树有多少棵？", answer: "x+15=80，x=65(棵)", difficulty: "medium" },
            { q: "小华买了5支铅笔，每支x元，一共花了10元。每支铅笔多少元？", answer: "5x=10，x=2(元)", difficulty: "easy" },
            { q: "学校买来一批图书，分给4个班，每班分到35本后，还剩20本。一共买来多少本图书？（用方程解）", answer: "x-4×35=20，x=160(本)", difficulty: "hard" }
        ]
    },
    '2-6': {
        title: "数据的表示和分析",
        multipleChoice: [
            { q: "条形统计图的特点是（  ）", options: ["能清楚地看出数量的多少", "能看出数量的变化趋势", "能看出部分与整体的关系", "以上都对"], answer: "A", difficulty: "easy" },
            { q: "折线统计图的特点是（  ）", options: ["能清楚地看出数量的多少", "能看出数量的变化趋势", "能看出部分与整体的关系", "以上都对"], answer: "B", difficulty: "easy" },
            { q: "要表示气温的变化情况，应选用（  ）", options: ["条形统计图", "折线统计图", "扇形统计图", "表格"], answer: "B", difficulty: "medium" },
            { q: "要比较各班人数的多少，应选用（  ）", options: ["条形统计图", "折线统计图", "扇形统计图", "表格"], answer: "A", difficulty: "medium" },
            { q: "平均数能够代表一组数据的（  ）", options: ["最大值", "最小值", "一般水平", "总和"], answer: "C", difficulty: "easy" }
        ],
        fillBlank: [
            { q: "（  ）统计图能清楚地看出数量的多少，（  ）统计图能看出数量的变化趋势", answer: "条形, 折线", difficulty: "easy" },
            { q: "一组数据的总和除以这组数据的个数，得到的结果叫做这组数据的（  ）", answer: "平均数", difficulty: "easy" },
            { q: "小明5次数学测验成绩分别是85分、90分、88分、92分、95分，他的平均成绩是（  ）分", answer: "90", difficulty: "medium" },
            { q: "在绘制统计图时，要有（  ）、（  ）和（  ）", answer: "标题, 数据, 图例", difficulty: "medium" }
        ],
        calculation: [
            { q: "求平均数：78、82、85、79、86", answer: "82", difficulty: "easy" },
            { q: "求平均数：90、85、88、92、95", answer: "90", difficulty: "easy" },
            { q: "求平均数：120、130、125、135、140", answer: "130", difficulty: "medium" },
            { q: "5个数的平均数是80，其中4个数分别是75、80、85、90，第5个数是多少", answer: "70", difficulty: "hard" }
        ],
        wordProblems: [
            { q: "小明、小红、小华三人的身高分别是135厘米、140厘米、145厘米。他们的平均身高是多少厘米？", answer: "(135+140+145)÷3=140(厘米)", difficulty: "easy" },
            { q: "四年级一班有学生40人，二班有学生45人，三班有学生43人。平均每班有多少人？", answer: "(40+45+43)÷3=42.67≈43(人)", difficulty: "medium" },
            { q: "某商店一周卖出图书情况如下：周一35本，周二40本，周三38本，周四42本，周五45本，周六50本，周日48本。平均每天卖出多少本？", answer: "(35+40+38+42+45+50+48)÷7=42.57≈43(本)", difficulty: "medium" },
            { q: "看图回答：根据条形统计图，哪个班人数最多？哪个班人数最少？相差多少人？（假设数据）", answer: "根据统计图回答（略）", difficulty: "medium" }
        ]
    },
    '2-7': {
        title: "认识负数",
        multipleChoice: [
            { q: "如果+10表示收入10元，那么-8表示（  ）", options: ["收入8元", "支出8元", "收入2元", "支出2元"], answer: "B", difficulty: "easy" },
            { q: "零下12℃记作（  ）", options: ["-12℃", "+12℃", "12℃", "0℃"], answer: "A", difficulty: "easy" },
            { q: "在-5、0、+3、-2这几个数中，最小的数是（  ）", options: ["-5", "0", "+3", "-2"], answer: "A", difficulty: "medium" },
            { q: "比0小的数是（  ）", options: ["正数", "负数", "整数", "小数"], answer: "B", difficulty: "easy" },
            { q: "-8和+8相比（  ）", options: ["-8>+8", "-8<+8", "-8=+8", "无法比较"], answer: "B", difficulty: "easy" },
            { q: "如果海平面的高度记作0米，高于海平面50米记作+50米，那么低于海平面30米应记作（  ）", options: ["+30米", "-30米", "30米", "0米"], answer: "B", difficulty: "medium" },
            { q: "在0、-1、+1、-10这几个数中，最大的数是（  ）", options: ["0", "-1", "+1", "-10"], answer: "C", difficulty: "medium" },
            { q: "下列说法正确的是（  ）", options: ["负数都比0小", "负数都比正数大", "0是负数", "0既是正数也是负数"], answer: "A", difficulty: "easy" }
        ],
        fillBlank: [
            { q: "比0大的数是（  ），比0小的数是（  ）", answer: "正数, 负数", difficulty: "easy" },
            { q: "如果+5表示向东走5米，那么-3表示向（  ）走（  ）米", answer: "西, 3", difficulty: "easy" },
            { q: "水位上升2米记作+2米，那么水位下降4米记作（  ）米", answer: "-4", difficulty: "easy" },
            { q: "零上6℃记作（  ），零下9℃记作（  ）", answer: "+6℃, -9℃", difficulty: "easy" },
            { q: "在-8、-3、0、+5、+2这几个数中，最大的是（  ），最小的是（  ）", answer: "+5, -8", difficulty: "medium" },
            { q: "在数轴上，（  ）边的数总比（  ）边的数大", answer: "右, 左", difficulty: "medium" },
            { q: "0既不是（  ），也不是（  ）", answer: "正数, 负数", difficulty: "easy" },
            { q: "所有的负数都在0的（  ）边，所有的正数都在0的（  ）边", answer: "左, 右", difficulty: "medium" }
        ],
        calculation: [],
        wordProblems: [
            { q: "某地早晨的气温是零下5℃，中午上升了8℃。中午的气温是多少？", answer: "零上3℃（+3℃）", difficulty: "medium" },
            { q: "小明在做游戏，规定向前走为正，向后走为负。小明按以下路线行走：+6米、-4米、+5米、-3米。最后小明在起点的前面还是后面？距离起点多远？", answer: "6-4+5-3=4(米)，前面4米", difficulty: "hard" },
            { q: "某市某天的最高气温是零上10℃，最低气温是零下2℃。这一天的温差是多少度？", answer: "10-(-2)=12(度)", difficulty: "medium" },
            { q: "银行存折上，存入500元记作+500元，那么取出300元应记作多少？", answer: "-300元", difficulty: "easy" },
            { q: "海平面的高度记作0米，珠穆朗玛峰高出海平面8844米应记作多少米？", answer: "+8844米", difficulty: "easy" }
        ]
    },
    '2-8': {
        title: "总复习",
        multipleChoice: [
            { q: "3.45中，4在（  ）位", options: ["个位", "十分位", "百分位", "千分位"], answer: "B", difficulty: "easy" },
            { q: "三角形的内角和是（  ）度", options: ["90", "180", "270", "360"], answer: "B", difficulty: "easy" },
            { q: "0.8 × 5 = （  ）", options: ["0.4", "4", "40", "0.04"], answer: "B", difficulty: "easy" },
            { q: "下列式子中，是方程的是（  ）", options: ["5+3", "x-2=8", "6>4", "3×2=6"], answer: "B", difficulty: "easy" },
            { q: "平均数能代表一组数据的（  ）", options: ["最大值", "一般水平", "最小值", "总和"], answer: "B", difficulty: "easy" },
            { q: "零下8℃记作（  ）", options: ["+8℃", "-8℃", "8℃", "0℃"], answer: "B", difficulty: "easy" },
            { q: "2.5 + 3.8 = （  ）", options: ["5.3", "6.3", "5.13", "6.13"], answer: "B", difficulty: "easy" },
            { q: "等边三角形的每个角是（  ）度", options: ["45", "60", "90", "120"], answer: "B", difficulty: "easy" }
        ],
        fillBlank: [
            { q: "0.45里面有（  ）个0.01", answer: "45", difficulty: "easy" },
            { q: "三角形按角分可分为（  ）三角形、（  ）三角形和（  ）三角形", answer: "锐角, 直角, 钝角", difficulty: "medium" },
            { q: "1.2 × 5 = （  ）", answer: "6", difficulty: "easy" },
            { q: "含有（  ）的（  ）叫做方程", answer: "未知数, 等式", difficulty: "easy" },
            { q: "（  ）统计图能看出数量的变化趋势", answer: "折线", difficulty: "easy" },
            { q: "比0小的数叫做（  ）", answer: "负数", difficulty: "easy" },
            { q: "平行四边形的对边（  ）且（  ）", answer: "平行, 相等", difficulty: "medium" },
            { q: "6.8 - 2.5 = （  ）", answer: "4.3", difficulty: "easy" }
        ],
        calculation: [
            { q: "4.5 + 2.8", answer: "7.3", difficulty: "easy" },
            { q: "8.6 - 3.9", answer: "4.7", difficulty: "easy" },
            { q: "1.5 × 6", answer: "9", difficulty: "easy" },
            { q: "解方程：x + 12 = 35", answer: "x = 23", difficulty: "easy" },
            { q: "求平均数：75、80、85、90、95", answer: "85", difficulty: "medium" },
            { q: "一个三角形两个角分别是45度和65度，第三个角是多少度", answer: "70度", difficulty: "medium" }
        ],
        wordProblems: [
            { q: "小明身高1.42米，小红比小明高0.06米。小红身高多少米？", answer: "1.42+0.06=1.48(米)", difficulty: "easy" },
            { q: "一支铅笔1.5元，买4支要多少元？", answer: "1.5×4=6(元)", difficulty: "easy" },
            { q: "果园里有苹果树x棵，梨树比苹果树多20棵，梨树有85棵。苹果树有多少棵？", answer: "x+20=85，x=65(棵)", difficulty: "medium" },
            { q: "某地上午的气温是零下3℃，下午上升了7℃。下午的气温是多少？", answer: "零上4℃（+4℃）", difficulty: "medium" },
            { q: "四（1）班5次卫生检查得分分别是92分、95分、88分、90分、95分。平均得分是多少？", answer: "(92+95+88+90+95)÷5=92(分)", difficulty: "medium" }
        ]
    }
};
