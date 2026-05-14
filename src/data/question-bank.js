// 四年级数学题库（完整版）- 已标注知识点
// 北师大版 · 海淀区标准

const questionBank = {
            s1u1: {
                title: "认识更大的数",
                multipleChoice: [
                    { q: "下面各数中，最大的数是（  ）", options: ["9999", "10000", "9998", "10001"], answer: "D", difficulty: "easy", knowledgePoints: ["kp_s1u1_02"] },
                    { q: "由8个千、6个百和5个一组成的数是（  ）", options: ["865", "8065", "8605", "8650"], answer: "C", difficulty: "medium", knowledgePoints: ["kp_s1u1_02"] },
                    { q: "与九千零七相等的数是（  ）", options: ["9700", "9007", "9070", "907"], answer: "B", difficulty: "easy", knowledgePoints: ["kp_s1u1_01"] },
                    { q: "下面各数中，一个零也不读的是（  ）", options: ["5008", "5080", "5800", "5088"], answer: "D", difficulty: "medium", knowledgePoints: ["kp_s1u1_01"] },
                    { q: "最小的四位数比最大的三位数多（  ）", options: ["1", "10", "100", "1000"], answer: "A", difficulty: "easy", knowledgePoints: ["kp_s1u1_02"] },
                    { q: "6000里面有（  ）个百", options: ["6", "60", "600", "6000"], answer: "B", difficulty: "medium", knowledgePoints: ["kp_s1u1_02"] },
                    { q: "下面各数中，读两个零的是（  ）", options: ["5008", "5080", "5005", "5808"], answer: "C", difficulty: "hard", knowledgePoints: ["kp_s1u1_01"] },
                    { q: "最接近9000的数是（  ）", options: ["8997", "9005", "8989", "9012"], answer: "A", difficulty: "hard", knowledgePoints: ["kp_s1u1_02"] },
                ],
                fillBlank: [
                    { q: "一万里面有（  ）个千，（  ）个百。", answer: "10, 100", difficulty: "easy", knowledgePoints: ["kp_s1u1_02"] },
                    { q: "6725是由（  ）个千、（  ）个百、（  ）个十和（  ）个一组成的。", answer: "6, 7, 2, 5", difficulty: "medium", knowledgePoints: ["kp_s1u1_02"] },
                    { q: "用3、0、8、5组成的最大四位数是（  ），最小四位数是（  ）。", answer: "8530, 3058", difficulty: "medium", knowledgePoints: ["kp_s1u1_02"] },
                    { q: "一个数由5个千和9个一组成，这个数是（  ），读作（  ）。", answer: "5009, 五千零九", difficulty: "easy", knowledgePoints: ["kp_s1u1_01"] },
                    { q: "按规律填数：2000、3000、4000、（  ）、（  ）。", answer: "5000, 6000", difficulty: "easy", knowledgePoints: ["kp_s1u1_02"] },
                    { q: "9□58≈9000，□里最大填（  ）", answer: "4", difficulty: "hard", knowledgePoints: ["kp_s1u1_03"] },
                    { q: "与9999相邻的两个数是（  ）和（  ）", answer: "9998, 10000", difficulty: "medium", knowledgePoints: ["kp_s1u1_02"] },
                    { q: "一个四位数，千位是5，个位是3，其余各位都是0，这个数是（  ）", answer: "5003", difficulty: "medium", knowledgePoints: ["kp_s1u1_02"] },
                ],
                calculation: [
                    { q: "3000 + 2000", answer: "5000", difficulty: "easy", knowledgePoints: ["kp_s1u1_05"] },
                    { q: "7000 - 4000", answer: "3000", difficulty: "easy", knowledgePoints: ["kp_s1u1_05"] },
                    { q: "500 + 800", answer: "1300", difficulty: "easy", knowledgePoints: ["kp_s1u1_05"] },
                    { q: "3425 + 2367", answer: "5792", difficulty: "medium", knowledgePoints: ["kp_s1u1_05"] },
                    { q: "6843 - 2759", answer: "4084", difficulty: "medium", knowledgePoints: ["kp_s1u1_05"] },
                    { q: "5006 + 3994", answer: "9000", difficulty: "medium", knowledgePoints: ["kp_s1u1_05"] },
                    { q: "4500 - 1200 + 800", answer: "4100", difficulty: "hard", knowledgePoints: ["kp_s1u1_05"] },
                    { q: "3600 + 2400 - 1500", answer: "4500", difficulty: "hard", knowledgePoints: ["kp_s1u1_05"] },
                ],
                wordProblems: [
                    { q: "学校图书馆有故事书3500本，科技书比故事书少800本。图书馆一共有故事书和科技书多少本？", answer: "3500-800=2700(本)，3500+2700=6200(本)", difficulty: "medium", knowledgePoints: ["kp_s1u1_06"] },
                    { q: "水果店上午卖出苹果2450千克，下午卖出苹果1780千克。这一天一共卖出苹果多少千克？", answer: "2450+1780=4230(千克)", difficulty: "easy", knowledgePoints: ["kp_s1u1_06"] },
                    { q: "一个工厂原计划生产8000个零件，已经生产了5600个，还要生产多少个？", answer: "8000-5600=2400(个)", difficulty: "easy", knowledgePoints: ["kp_s1u1_06"] },
                    { q: "小明家到学校有1200米，他已经走了450米，还要走多少米才能到学校？", answer: "1200-450=750(米)", difficulty: "easy", knowledgePoints: ["kp_s1u1_06"] },
                    { q: "商店里有电视机3800台，冰箱比电视机多1200台。商店里电视机和冰箱一共有多少台？", answer: "3800+1200=5000(台)，3800+5000=8800(台)", difficulty: "medium", knowledgePoints: ["kp_s1u1_06"] },
                    { q: "体育馆有6500个座位，上午来了2350人，下午又来了1870人。还有多少个空座位？", answer: "2350+1870=4220(人)，6500-4220=2280(个)", difficulty: "hard", knowledgePoints: ["kp_s1u1_02"] },
                ]
            },
            s1u2: {
                title: "线与角",
                multipleChoice: [
                    { q: "一个平角等于（  ）个直角", options: ["1", "2", "3", "4"], answer: "B", difficulty: "easy", knowledgePoints: ["kp_s1u2_02"] },
                    { q: "钟表上3点整，时针和分针成（  ）角", options: ["锐角", "直角", "钝角", "平角"], answer: "B", difficulty: "medium", knowledgePoints: ["kp_s1u2_03"] },
                    { q: "下面的角中，最大的是（  ）", options: ["45°", "90°", "120°", "180°"], answer: "D", difficulty: "easy", knowledgePoints: ["kp_s1u2_02"] },
                    { q: "1个周角=（  ）个平角", options: ["2", "3", "4", "6"], answer: "A", difficulty: "medium", knowledgePoints: ["kp_s1u2_02"] },
                    { q: "下列图形中，有4个直角的是（  ）", options: ["三角形", "正方形", "梯形", "平行四边形"], answer: "B", difficulty: "easy", knowledgePoints: ["kp_s1u2_02"] },
                ],
                fillBlank: [
                    { q: "1个平角=（  ）个直角=（  ）度", answer: "2, 180", difficulty: "easy", knowledgePoints: ["kp_s1u2_02"] },
                    { q: "小于90度的角叫（  ）角，大于90度小于180度的角叫（  ）角", answer: "锐, 钝", difficulty: "easy", knowledgePoints: ["kp_s1u2_03"] },
                    { q: "1个周角=（  ）度，1个平角=（  ）度，1个直角=（  ）度", answer: "360, 180, 90", difficulty: "medium", knowledgePoints: ["kp_s1u2_02"] },
                    { q: "钟表上，时针从3走到6，顺时针旋转了（  ）度", answer: "90", difficulty: "medium", knowledgePoints: ["kp_s1u2_03"] },
                    { q: "一个角是35度，它是（  ）角", answer: "锐", difficulty: "easy", knowledgePoints: ["kp_s1u2_03"] },
                ],
                calculation: [
                    { q: "180° - 90°", answer: "90°", difficulty: "easy", knowledgePoints: ["kp_s1u2_03"] },
                    { q: "360° ÷ 4", answer: "90°", difficulty: "easy", knowledgePoints: ["kp_s1u2_03"] },
                    { q: "一个平角减去一个直角", answer: "90°", difficulty: "medium", knowledgePoints: ["kp_s1u2_02"] },
                ],
                wordProblems: [
                    { q: "画一个60度的角，并标出角的各部分名称", answer: "作图题（略）", difficulty: "medium", knowledgePoints: ["kp_s1u2_03"] },
                    { q: "一个角是直角的2倍，这个角是多少度？是什么角？", answer: "90×2=180(度)，平角", difficulty: "medium", knowledgePoints: ["kp_s1u2_02"] },
                    { q: "把一张圆形纸片对折3次，每一份是多少度的角？", answer: "360÷8=45(度)", difficulty: "hard", knowledgePoints: ["kp_s1u2_03"] },
                ]
            },
            s1u3: {
                title: "乘法",
                multipleChoice: [
                    { q: "25 × 4 = （  ）", options: ["80", "90", "100", "110"], answer: "C", difficulty: "easy", knowledgePoints: ["kp_s1u3_01"] },
                    { q: "下列算式中，积最大的是（  ）", options: ["23 × 4", "12 × 8", "15 × 6", "18 × 5"], answer: "B", difficulty: "medium", knowledgePoints: ["kp_s1u3_01"] },
                    { q: "125 × 8 = （  ）", options: ["100", "1000", "10000", "800"], answer: "B", difficulty: "easy", knowledgePoints: ["kp_s1u3_01"] },
                    { q: "一个乘数扩大10倍，另一个乘数不变，积（  ）", options: ["扩大10倍", "缩小10倍", "不变", "扩大100倍"], answer: "A", difficulty: "medium", knowledgePoints: ["kp_s1u3_03"] },
                    { q: "36 × 12 的结果是（  ）", options: ["432", "342", "423", "324"], answer: "A", difficulty: "medium", knowledgePoints: ["kp_s1u3_01"] },
                    { q: "与25×40结果相同的算式是（  ）", options: ["25×4×10", "25×20×2", "50×20", "100×10"], answer: "C", difficulty: "hard", knowledgePoints: ["kp_s1u3_01"] },
                ],
                fillBlank: [
                    { q: "25 × 4 = （  ），125 × 8 = （  ）", answer: "100, 1000", difficulty: "easy", knowledgePoints: ["kp_s1u3_01"] },
                    { q: "48个25相加的和是（  ），算式是（  ）", answer: "1200, 25×48", difficulty: "medium", knowledgePoints: ["kp_s1u3_01"] },
                    { q: "一个因数是23，另一个因数是40，积是（  ）", answer: "920", difficulty: "easy", knowledgePoints: ["kp_s1u3_03"] },
                    { q: "45 × 20 = 45 × 2 × （  ）= （  ）", answer: "10, 900", difficulty: "medium", knowledgePoints: ["kp_s1u3_01"] },
                    { q: "估算：38 × 22 ≈ （  ）× （  ）= （  ）", answer: "40, 20, 800", difficulty: "medium", knowledgePoints: ["kp_s1u3_01"] },
                    { q: "15 × 6 ○ 12 × 8，在○里填上大于号、小于号或等号", answer: "<", difficulty: "hard", knowledgePoints: ["kp_s1u3_01"] },
                ],
                calculation: [
                    { q: "25 × 4", answer: "100", difficulty: "easy", knowledgePoints: ["kp_s1u3_01"] },
                    { q: "125 × 8", answer: "1000", difficulty: "easy", knowledgePoints: ["kp_s1u3_01"] },
                    { q: "36 × 23", answer: "828", difficulty: "medium", knowledgePoints: ["kp_s1u3_01"] },
                    { q: "48 × 35", answer: "1680", difficulty: "medium", knowledgePoints: ["kp_s1u3_01"] },
                    { q: "125 × 24", answer: "3000", difficulty: "hard", knowledgePoints: ["kp_s1u3_01"] },
                    { q: "25 × 4 × 8", answer: "800", difficulty: "medium", knowledgePoints: ["kp_s1u3_01"] },
                    { q: "32 × 15", answer: "480", difficulty: "medium", knowledgePoints: ["kp_s1u3_01"] },
                ],
                wordProblems: [
                    { q: "学校图书馆每天借出图书45本，一个月（按30天计算）借出多少本？", answer: "45×30=1350(本)", difficulty: "easy", knowledgePoints: ["kp_s1u3_04"] },
                    { q: "一辆汽车每小时行驶65千米，从上午8时到下午2时，这辆汽车行驶了多少千米？", answer: "65×6=390(千米)", difficulty: "medium", knowledgePoints: ["kp_s1u3_04"] },
                    { q: "水果店运来苹果25箱，每箱12千克。运来的梨是苹果的2倍，运来梨多少千克？", answer: "25×12=300(千克)，300×2=600(千克)", difficulty: "hard", knowledgePoints: ["kp_s1u3_04"] },
                    { q: "一个长方形操场长85米，宽48米，这个操场的周长是多少米？", answer: "(85+48)×2=266(米)", difficulty: "medium", knowledgePoints: ["kp_s1u3_04"] },
                ]
            },
            s1u5: {
                title: "除法",
                multipleChoice: [
                    { q: "840 ÷ 70 = （  ）", options: ["11", "12", "13", "14"], answer: "B", difficulty: "easy", knowledgePoints: ["kp_s1u5_01"] },
                    { q: "下列算式中，商最大的是（  ）", options: ["720 ÷ 80", "630 ÷ 70", "540 ÷ 60", "450 ÷ 50"], answer: "B", difficulty: "medium", knowledgePoints: ["kp_s1u5_01"] },
                    { q: "被除数扩大10倍，除数不变，商（  ）", options: ["扩大10倍", "缩小10倍", "不变", "扩大100倍"], answer: "A", difficulty: "medium", knowledgePoints: ["kp_s1u5_03"] },
                    { q: "768 ÷ 32 的商是（  ）位数", options: ["一", "二", "三", "四"], answer: "B", difficulty: "medium", knowledgePoints: ["kp_s1u5_01"] },
                    { q: "在除法算式中，余数一定要比除数（  ）", options: ["大", "小", "相等", "无法确定"], answer: "B", difficulty: "easy", knowledgePoints: ["kp_s1u5_03"] },
                    { q: "480 ÷ 60的结果与下面哪个算式相等（  ）", options: ["48 ÷ 6", "4800 ÷ 600", "240 ÷ 30", "以上都对"], answer: "D", difficulty: "hard", knowledgePoints: ["kp_s1u5_01"] },
                ],
                fillBlank: [
                    { q: "720 ÷ 80 = （  ），320 ÷ 40 = （  ）", answer: "9, 8", difficulty: "easy", knowledgePoints: ["kp_s1u5_01"] },
                    { q: "被除数是540，除数是60，商是（  ）", answer: "9", difficulty: "easy", knowledgePoints: ["kp_s1u5_03"] },
                    { q: "（  ）÷ 25 = 32，（  ）÷ 48 = 16", answer: "800, 768", difficulty: "medium", knowledgePoints: ["kp_s1u5_01"] },
                    { q: "在有余数的除法中，余数要比除数（  ）", answer: "小", difficulty: "easy", knowledgePoints: ["kp_s1u5_03"] },
                    { q: "一个数除以24，商是15，余数是18，这个数是（  ）", answer: "378", difficulty: "hard", knowledgePoints: ["kp_s1u5_03"] },
                    { q: "560 ÷ 70 = 56 ÷ （  ）", answer: "7", difficulty: "medium", knowledgePoints: ["kp_s1u5_01"] },
                ],
                calculation: [
                    { q: "240 ÷ 60", answer: "4", difficulty: "easy", knowledgePoints: ["kp_s1u5_01"] },
                    { q: "360 ÷ 40", answer: "9", difficulty: "easy", knowledgePoints: ["kp_s1u5_01"] },
                    { q: "768 ÷ 32", answer: "24", difficulty: "medium", knowledgePoints: ["kp_s1u5_01"] },
                    { q: "936 ÷ 24", answer: "39", difficulty: "medium", knowledgePoints: ["kp_s1u5_01"] },
                    { q: "875 ÷ 35", answer: "25", difficulty: "medium", knowledgePoints: ["kp_s1u5_01"] },
                    { q: "480 ÷ 80", answer: "6", difficulty: "easy", knowledgePoints: ["kp_s1u5_01"] },
                    { q: "630 ÷ 70", answer: "9", difficulty: "easy", knowledgePoints: ["kp_s1u5_01"] },
                ],
                wordProblems: [
                    { q: "学校买来480本图书，平均分给6个年级，每个年级分到多少本？", answer: "480÷6=80(本)", difficulty: "easy", knowledgePoints: ["kp_s1u5_04"] },
                    { q: "一辆汽车3小时行驶了285千米，照这样计算，这辆汽车每小时行驶多少千米？", answer: "285÷3=95(千米)", difficulty: "medium", knowledgePoints: ["kp_s1u5_04"] },
                    { q: "果园里有苹果树240棵，是梨树的3倍。梨树有多少棵？", answer: "240÷3=80(棵)", difficulty: "easy", knowledgePoints: ["kp_s1u5_01"] },
                    { q: "商店运来850千克水果，卖出25箱后还剩350千克。平均每箱水果重多少千克？", answer: "(850-350)÷25=20(千克)", difficulty: "hard", knowledgePoints: ["kp_s1u5_04"] },
                ]
            },
            s1u4: {
                title: "图形的变换",
                multipleChoice: [
                    { q: "下面图形中，是轴对称图形的是（  ）", options: ["平行四边形", "长方形", "梯形", "任意三角形"], answer: "B", difficulty: "easy", knowledgePoints: ["kp_s1u4_01"] },
                    { q: "正方形有（  ）条对称轴", options: ["1", "2", "4", "无数条"], answer: "C", difficulty: "easy", knowledgePoints: ["kp_s1u4_01"] },
                    { q: "圆有（  ）条对称轴", options: ["1", "2", "4", "无数条"], answer: "D", difficulty: "medium", knowledgePoints: ["kp_s1u4_01"] },
                    { q: "下列现象中，属于平移的是（  ）", options: ["风车转动", "电梯上下", "螺旋桨转动", "钟摆摆动"], answer: "B", difficulty: "medium", knowledgePoints: ["kp_s1u4_02"] },
                    { q: "把一个图形绕某一点旋转90度后，这个图形（  ）", options: ["变大了", "变小了", "形状改变了", "位置改变了"], answer: "D", difficulty: "easy", knowledgePoints: ["kp_s1u4_02"] },
                ],
                fillBlank: [
                    { q: "如果一个图形沿着一条直线对折，两侧能够完全重合，这个图形就是（  ）图形", answer: "轴对称", difficulty: "easy", knowledgePoints: ["kp_s1u4_01"] },
                    { q: "长方形有（  ）条对称轴，等腰三角形有（  ）条对称轴", answer: "2, 1", difficulty: "medium", knowledgePoints: ["kp_s1u4_01"] },
                    { q: "平移和旋转都只改变图形的（  ），不改变图形的大小和形状", answer: "位置", difficulty: "medium", knowledgePoints: ["kp_s1u4_02"] },
                    { q: "钟面上，时针从12走到3，顺时针旋转了（  ）度", answer: "90", difficulty: "easy", knowledgePoints: ["kp_s1u4_02"] },
                ],
                calculation: [],
                wordProblems: [
                    { q: "判断：电梯的上下运动是平移还是旋转？", answer: "平移", difficulty: "easy", knowledgePoints: ["kp_s1u4_02"] },
                    { q: "判断：方向盘的转动是平移还是旋转？", answer: "旋转", difficulty: "easy", knowledgePoints: ["kp_s1u4_02"] },
                    { q: "画出正方形的所有对称轴", answer: "作图题（略）", difficulty: "medium", knowledgePoints: ["kp_s1u4_01"] },
                ]
            },
            s1u6: {
                title: "方向与位置",
                multipleChoice: [
                    { q: "面向北方，你的右面是（  ）", options: ["东", "南", "西", "北"], answer: "A", difficulty: "easy", knowledgePoints: ["kp_s1u6_01"] },
                    { q: "小明家在学校的南面，那么学校在小明家的（  ）", options: ["东面", "南面", "西面", "北面"], answer: "D", difficulty: "easy", knowledgePoints: ["kp_s1u6_01"] },
                    { q: "地图通常是按照（  ）的方向绘制的", options: ["上北下南，左西右东", "上南下北，左东右西", "上东下西，左北右南", "上西下东，左南右北"], answer: "A", difficulty: "medium", knowledgePoints: ["kp_s1u6_01"] },
                    { q: "太阳从（  ）方升起", options: ["东", "南", "西", "北"], answer: "A", difficulty: "easy", knowledgePoints: ["kp_s1u6_01"] },
                ],
                fillBlank: [
                    { q: "早晨，面对太阳，前面是（  ），后面是（  ）", answer: "东, 西", difficulty: "easy", knowledgePoints: ["kp_s1u6_01"] },
                    { q: "地图上的方向：上面是（  ），下面是（  ），左面是（  ），右面是（  ）", answer: "北, 南, 西, 东", difficulty: "medium", knowledgePoints: ["kp_s1u6_01"] },
                    { q: "指南针的红色指针指向（  ）方", answer: "北", difficulty: "medium", knowledgePoints: ["kp_s1u6_01"] },
                    { q: "东与（  ）相对，南与（  ）相对", answer: "西, 北", difficulty: "easy", knowledgePoints: ["kp_s1u6_01"] },
                ],
                calculation: [],
                wordProblems: [
                    { q: "小明从家出发，先向东走200米到书店，再向北走150米到学校。放学后，他应该怎样走回家？", answer: "先向南走150米，再向西走200米", difficulty: "medium", knowledgePoints: ["kp_s1u6_01"] },
                    { q: "从学校向东走500米到邮局，从邮局向哪个方向走多少米回到学校？", answer: "向西走500米", difficulty: "easy", knowledgePoints: ["kp_s1u6_01"] },
                ]
            },
            s1u7: {
                title: "生活中的负数",
                multipleChoice: [
                    { q: "如果+5表示收入5元，那么-8表示（  ）", options: ["收入8元", "支出8元", "收入3元", "支出3元"], answer: "B", difficulty: "easy", knowledgePoints: ["kp_s1u7_01"] },
                    { q: "零下15℃记作（  ）", options: ["-15℃", "+15℃", "15℃", "0℃"], answer: "A", difficulty: "easy", knowledgePoints: ["kp_s1u7_01"] },
                    { q: "在-3、0、+2、-5这几个数中，最小的数是（  ）", options: ["-3", "0", "+2", "-5"], answer: "D", difficulty: "medium", knowledgePoints: ["kp_s1u7_02"] },
                    { q: "下列说法正确的是（  ）", options: ["负数都比0小", "负数都比正数大", "0是负数", "-1比-2大"], answer: "A", difficulty: "medium", knowledgePoints: ["kp_s1u7_01"] },
                ],
                fillBlank: [
                    { q: "如果+20米表示向东走20米，那么-15米表示向（  ）走（  ）米", answer: "西, 15", difficulty: "easy", knowledgePoints: ["kp_s1u7_01"] },
                    { q: "水位上升3米记作+3米，那么水位下降5米记作（  ）米", answer: "-5", difficulty: "easy", knowledgePoints: ["kp_s1u7_01"] },
                    { q: "零上8℃记作（  ），零下12℃记作（  ）", answer: "+8℃, -12℃", difficulty: "easy", knowledgePoints: ["kp_s1u7_01"] },
                    { q: "在-6、-1、0、+4、-3这几个数中，最大的是（  ），最小的是（  ）", answer: "+4, -6", difficulty: "medium", knowledgePoints: ["kp_s1u7_02"] },
                ],
                calculation: [],
                wordProblems: [
                    { q: "某市某天的最高气温是零上8℃，最低气温是零下3℃。这一天的最高气温比最低气温高多少度？", answer: "8-(-3)=11(度)", difficulty: "medium", knowledgePoints: ["kp_s1u7_01"] },
                    { q: "小明在做游戏，规定向前走为正，向后走为负。小明按以下路线行走：+5米、-3米、+8米、-6米、-2米。最后小明在起点的前面还是后面？距离起点多远？", answer: "5-3+8-6-2=2(米)，前面2米", difficulty: "hard", knowledgePoints: ["kp_s1u7_01"] },
                ]
            },
            s1u8: {
                title: "可能性",
                multipleChoice: [
                    { q: "下列事件中，（  ）是不可能发生的", options: ["明天会下雨", "太阳从西边升起", "抛硬币正面朝上", "抽奖中奖"], answer: "B", difficulty: "easy", knowledgePoints: ["kp_s1u8_01"] },
                    { q: "一个袋子里有5个红球和3个白球，任意摸出1个球，（  ）的可能性大", options: ["摸到红球", "摸到白球", "一样大", "无法确定"], answer: "A", difficulty: "easy", knowledgePoints: ["kp_s1u8_02"] },
                    { q: "下列事件中，（  ）是必然发生的", options: ["明天会下雨", "太阳从东边升起", "抛硬币正面朝上", "买彩票中奖"], answer: "B", difficulty: "medium", knowledgePoints: ["kp_s1u8_01"] },
                    { q: "转盘被平均分成4份，其中2份是红色，1份是黄色，1份是蓝色。转动转盘，指针停在（  ）的可能性最大", options: ["红色", "黄色", "蓝色", "一样大"], answer: "A", difficulty: "medium", knowledgePoints: ["kp_s1u8_02"] },
                ],
                fillBlank: [
                    { q: "从1-10这10个数中任意抽取一个，抽到（  ）数的可能性大", answer: "偶", difficulty: "easy", knowledgePoints: ["kp_s1u8_02"] },
                    { q: "一个盒子里有6个红球和4个白球，任意摸出1个球，摸到（  ）球的可能性大", answer: "红", difficulty: "easy", knowledgePoints: ["kp_s1u8_02"] },
                    { q: "袋子里有5个红球和若干个白球，任意摸出1个球，摸到红球和白球的可能性相等。袋子里有（  ）个白球", answer: "5", difficulty: "medium", knowledgePoints: ["kp_s1u8_02"] },
                ],
                calculation: [],
                wordProblems: [
                    { q: "抛一枚硬币，正面朝上和反面朝上的可能性是否相等？", answer: "相等", difficulty: "easy", knowledgePoints: ["kp_s1u8_02"] },
                    { q: "袋子里有红、黄、蓝三种颜色的球共20个，其中红球8个，黄球7个。任意摸出1个球，摸到哪种颜色球的可能性最小？", answer: "蓝球，因为蓝球只有5个", difficulty: "medium", knowledgePoints: ["kp_s1u8_02"] },
                ]
            },
            s2u1: {
                    title: "小数的意义和加减法",
                    multipleChoice: [
                        { q: "0.8里面有（  ）个0.1", options: ["8", "0.8", "80", "0.08"], answer: "A", difficulty: "easy", knowledgePoints: ["kp_s2u1_01"] },
                        { q: "3.45中的4在（  ）位上", options: ["个位", "十分位", "百分位", "十位"], answer: "B", difficulty: "easy", knowledgePoints: ["kp_s2u1_01"] },
                        { q: "下面各数中，最大的是（  ）", options: ["0.9", "0.99", "0.999", "1.0"], answer: "D", difficulty: "medium", knowledgePoints: ["kp_s2u1_02"] },
                        { q: "把5.6扩大10倍是（  ）", options: ["0.56", "56", "560", "5.60"], answer: "B", difficulty: "medium", knowledgePoints: ["kp_s2u1_01"] },
                        { q: "0.7和0.70比较（  ）", options: ["0.7>0.70", "0.7<0.70", "0.7=0.70", "无法比较"], answer: "C", difficulty: "easy", knowledgePoints: ["kp_s2u1_01"] },
                        { q: "3.6-1.8的结果是（  ）", options: ["1.8", "2.2", "1.2", "2.8"], answer: "A", difficulty: "medium", knowledgePoints: ["kp_s2u1_03"] },
                        { q: "下面哪个小数不能改写成三位小数（  ）", options: ["0.5", "1.23", "2.100", "都可以"], answer: "D", difficulty: "hard", knowledgePoints: ["kp_s2u1_01"] },
                        { q: "4.05读作（  ）", options: ["四点零五", "四点五", "四十点五", "四点五十"], answer: "A", difficulty: "easy", knowledgePoints: ["kp_s2u1_01"] }
                    ],
                    fillBlank: [
                        { q: "0.6是（  ）个0.1，也是（  ）个0.01", answer: "6, 60", difficulty: "easy", knowledgePoints: ["kp_s2u1_01"] },
                        { q: "5.43是由（  ）个1、（  ）个0.1和（  ）个0.01组成的", answer: "5, 4, 3", difficulty: "medium", knowledgePoints: ["kp_s2u1_01"] },
                        { q: "把3改写成一位小数是（  ），改写成两位小数是（  ）", answer: "3.0, 3.00", difficulty: "easy", knowledgePoints: ["kp_s2u1_01"] },
                        { q: "0.58里面有（  ）个0.01，2.3里面有（  ）个0.1", answer: "58, 23", difficulty: "medium", knowledgePoints: ["kp_s2u1_01"] },
                        { q: "在2.4和2.5之间有（  ）个一位小数", answer: "0", difficulty: "hard", knowledgePoints: ["kp_s2u1_01"] },
                        { q: "6.8缩小100倍是（  ）", answer: "0.068", difficulty: "medium", knowledgePoints: ["kp_s2u1_01"] },
                        { q: "比0.9大比1.1小的一位小数有（  ）个", answer: "1", difficulty: "medium", knowledgePoints: ["kp_s2u1_01"] },
                        { q: "3.60的计数单位是（  ），它有（  ）个这样的计数单位", answer: "0.01, 360", difficulty: "hard", knowledgePoints: ["kp_s2u1_01"] }
                    ],
                    calculation: [
                        { q: "2.5 + 3.8", answer: "6.3", difficulty: "easy", knowledgePoints: ["kp_s2u1_03"] },
                        { q: "7.2 - 4.5", answer: "2.7", difficulty: "easy", knowledgePoints: ["kp_s2u1_03"] },
                        { q: "5.6 + 2.8 - 3.4", answer: "5.0", difficulty: "medium", knowledgePoints: ["kp_s2u1_03"] },
                        { q: "10 - 3.7", answer: "6.3", difficulty: "medium", knowledgePoints: ["kp_s2u1_03"] },
                        { q: "4.25 + 5.75", answer: "10", difficulty: "medium", knowledgePoints: ["kp_s2u1_03"] },
                        { q: "8.4 - 2.6 + 1.2", answer: "7.0", difficulty: "medium", knowledgePoints: ["kp_s2u1_03"] },
                        { q: "6.35 + 3.65 - 5", answer: "5.0", difficulty: "hard", knowledgePoints: ["kp_s2u1_03"] },
                        { q: "12.8 - 7.9 + 3.1", answer: "8.0", difficulty: "hard", knowledgePoints: ["kp_s2u1_03"] }
                    ],
                    wordProblems: [
                        { q: "小明身高1.35米，小红比小明高0.08米。小红身高多少米？", answer: "1.35+0.08=1.43(米)", difficulty: "easy", knowledgePoints: ["kp_s2u1_01"] },
                        { q: "一根绳子长5.6米，用去2.8米后，还剩多少米？", answer: "5.6-2.8=2.8(米)", difficulty: "easy", knowledgePoints: ["kp_s2u1_04"] },
                        { q: "水果店运来苹果3.5千克，梨比苹果多1.2千克，橙子比梨少0.8千克。橙子有多少千克？", answer: "3.5+1.2=4.7(千克)，4.7-0.8=3.9(千克)", difficulty: "medium", knowledgePoints: ["kp_s2u1_01"] },
                        { q: "小华买一支铅笔用了0.5元，买一块橡皮用了0.8元，买一个笔记本用了3.2元。他一共花了多少元？付了10元，应找回多少元？", answer: "0.5+0.8+3.2=4.5(元)，10-4.5=5.5(元)", difficulty: "hard", knowledgePoints: ["kp_s2u1_01"] },
                        { q: "一个长方形的长是4.5分米，宽是2.8分米。这个长方形的周长是多少分米？", answer: "(4.5+2.8)×2=14.6(分米)", difficulty: "medium", knowledgePoints: ["kp_s2u1_04"] },
                        { q: "水果店上午卖出水果12.5千克，下午比上午多卖3.8千克。这一天一共卖出水果多少千克？", answer: "12.5+3.8=16.3(千克)，12.5+16.3=28.8(千克)", difficulty: "medium", knowledgePoints: ["kp_s2u1_04"] }
                    ]
                },
                s2u2: {
                    title: "认识三角形和四边形",
                    multipleChoice: [
                        { q: "三角形具有（  ）", options: ["不稳定性", "稳定性", "对称性", "平行性"], answer: "B", difficulty: "easy", knowledgePoints: ["kp_s2u2_01"] },
                        { q: "三角形的内角和是（  ）度", options: ["90", "180", "270", "360"], answer: "B", difficulty: "easy", knowledgePoints: ["kp_s2u2_02"] },
                        { q: "等腰三角形的两个底角（  ）", options: ["相等", "不相等", "互补", "互余"], answer: "A", difficulty: "easy", knowledgePoints: ["kp_s2u2_01"] },
                        { q: "平行四边形的对边（  ）", options: ["平行且相等", "只平行", "只相等", "垂直"], answer: "A", difficulty: "medium", knowledgePoints: ["kp_s2u2_03"] },
                        { q: "下列图形中，对角线相等的是（  ）", options: ["平行四边形", "梯形", "长方形", "任意四边形"], answer: "C", difficulty: "medium", knowledgePoints: ["kp_s2u2_04"] },
                        { q: "一个三角形有一个角是60度，另一个角是80度，第三个角是（  ）度", options: ["40", "50", "60", "100"], answer: "A", difficulty: "medium", knowledgePoints: ["kp_s2u2_02"] },
                        { q: "等边三角形的每个内角是（  ）度", options: ["45", "60", "90", "120"], answer: "B", difficulty: "easy", knowledgePoints: ["kp_s2u2_01"] },
                        { q: "梯形有（  ）组对边平行", options: ["0", "1", "2", "3"], answer: "B", difficulty: "easy", knowledgePoints: ["kp_s2u2_03"] }
                    ],
                    fillBlank: [
                        { q: "三角形按角分可以分为（  ）三角形、（  ）三角形和（  ）三角形", answer: "锐角, 直角, 钝角", difficulty: "medium", knowledgePoints: ["kp_s2u2_01"] },
                        { q: "一个三角形有两个角分别是50度和60度，第三个角是（  ）度，这是一个（  ）三角形", answer: "70, 锐角", difficulty: "medium", knowledgePoints: ["kp_s2u2_02"] },
                        { q: "平行四边形的对角（  ），对边（  ）", answer: "相等, 平行且相等", difficulty: "easy", knowledgePoints: ["kp_s2u2_03"] },
                        { q: "等腰三角形有（  ）条对称轴，等边三角形有（  ）条对称轴", answer: "1, 3", difficulty: "medium", knowledgePoints: ["kp_s2u2_01"] },
                        { q: "梯形有（  ）条边，其中（  ）组对边平行", answer: "4, 1", difficulty: "easy", knowledgePoints: ["kp_s2u2_03"] },
                        { q: "一个等腰三角形，顶角是40度，它的底角是（  ）度", answer: "70", difficulty: "hard", knowledgePoints: ["kp_s2u2_01"] },
                        { q: "四边形的内角和是（  ）度", answer: "360", difficulty: "medium", knowledgePoints: ["kp_s2u2_02"] },
                        { q: "在平行四边形中，相邻的两个角的和是（  ）度", answer: "180", difficulty: "hard", knowledgePoints: ["kp_s2u2_02"] }
                    ],
                    calculation: [
                        { q: "一个三角形，三个角分别是45度、55度和x度，求x", answer: "80度", difficulty: "easy", knowledgePoints: ["kp_s2u2_02"] },
                        { q: "等腰三角形的顶角是50度，求底角", answer: "65度", difficulty: "medium", knowledgePoints: ["kp_s2u2_01"] },
                        { q: "等边三角形的一个角是多少度", answer: "60度", difficulty: "easy", knowledgePoints: ["kp_s2u2_01"] },
                        { q: "平行四边形一个角是70度，求相邻角的度数", answer: "110度", difficulty: "medium", knowledgePoints: ["kp_s2u2_02"] },
                        { q: "三角形两个角分别是30度和90度，第三个角是多少度", answer: "60度", difficulty: "easy", knowledgePoints: ["kp_s2u2_02"] },
                        { q: "梯形中，上底8厘米，下底12厘米，高5厘米，求面积", answer: "50平方厘米", difficulty: "hard", knowledgePoints: ["kp_s2u2_03"] }
                    ],
                    wordProblems: [
                        { q: "用三根长度分别为3厘米、4厘米、5厘米的小棒能围成三角形吗？为什么？", answer: "能，因为任意两边之和大于第三边", difficulty: "medium", knowledgePoints: ["kp_s2u2_01"] },
                        { q: "一个等腰三角形的周长是18厘米，其中一条边长6厘米。这个三角形的三条边可能是多少厘米？", answer: "6厘米、6厘米、6厘米 或 6厘米、6厘米、6厘米（等边）或 4厘米、7厘米、7厘米", difficulty: "hard", knowledgePoints: ["kp_s2u2_01"] },
                        { q: "一个直角三角形，其中一个锐角是35度，另一个锐角是多少度？", answer: "180-90-35=55(度)", difficulty: "medium", knowledgePoints: ["kp_s2u2_02"] },
                        { q: "用4根长度都是5厘米的小棒，可以摆成什么图形？", answer: "正方形或菱形", difficulty: "easy", knowledgePoints: ["kp_s2u2_01"] }
                    ]
                },
                s2u3: {
                    title: "小数乘法",
                    multipleChoice: [
                        { q: "0.6 × 3 = （  ）", options: ["1.8", "18", "0.18", "180"], answer: "A", difficulty: "easy", knowledgePoints: ["kp_s2u3_01"] },
                        { q: "3.5 × 2的结果是（  ）", options: ["6", "7", "6.5", "7.0"], answer: "D", difficulty: "easy", knowledgePoints: ["kp_s2u3_01"] },
                        { q: "一个数扩大10倍后是4.5，这个数是（  ）", options: ["0.45", "45", "0.045", "450"], answer: "A", difficulty: "medium", knowledgePoints: ["kp_s2u3_03"] },
                        { q: "2.4 × 5的积是（  ）", options: ["10", "12", "1.2", "120"], answer: "B", difficulty: "easy", knowledgePoints: ["kp_s2u3_02"] },
                        { q: "0.25 × 4 = （  ）", options: ["0.1", "1", "10", "100"], answer: "B", difficulty: "easy", knowledgePoints: ["kp_s2u3_01"] },
                        { q: "下列算式中，积最大的是（  ）", options: ["1.2×3", "0.8×5", "2.5×2", "1.5×3"], answer: "D", difficulty: "medium", knowledgePoints: ["kp_s2u3_02"] },
                        { q: "5.6 × 0.1 = （  ）", options: ["0.56", "5.6", "56", "560"], answer: "A", difficulty: "medium", knowledgePoints: ["kp_s2u3_01"] },
                        { q: "一个因数扩大10倍，另一个因数不变，积（  ）", options: ["扩大10倍", "缩小10倍", "不变", "扩大100倍"], answer: "A", difficulty: "hard", knowledgePoints: ["kp_s2u3_03"] }
                    ],
                    fillBlank: [
                        { q: "1.5 × 6 = （  ），0.8 × 5 = （  ）", answer: "9, 4", difficulty: "easy", knowledgePoints: ["kp_s2u3_01"] },
                        { q: "一个因数是2.5，另一个因数是4，积是（  ）", answer: "10", difficulty: "easy", knowledgePoints: ["kp_s2u3_02"] },
                        { q: "3.6 × 10 = （  ），3.6 × 100 = （  ）", answer: "36, 360", difficulty: "medium", knowledgePoints: ["kp_s2u3_01"] },
                        { q: "0.4 × 8 = 4 × （  ）= （  ）", answer: "0.8, 3.2", difficulty: "hard", knowledgePoints: ["kp_s2u3_01"] },
                        { q: "6.5扩大（  ）倍是65", answer: "10", difficulty: "medium", knowledgePoints: ["kp_s2u3_03"] },
                        { q: "0.9 × 7 = （  ）", answer: "6.3", difficulty: "medium", knowledgePoints: ["kp_s2u3_01"] },
                        { q: "2.8 × 3 + 2.8 = 2.8 × （  ）", answer: "4", difficulty: "hard", knowledgePoints: ["kp_s2u3_01"] },
                        { q: "12.5 × 8 = （  ）", answer: "100", difficulty: "medium", knowledgePoints: ["kp_s2u3_01"] }
                    ],
                    calculation: [
                        { q: "3.2 × 5", answer: "16", difficulty: "easy", knowledgePoints: ["kp_s2u3_01"] },
                        { q: "0.7 × 9", answer: "6.3", difficulty: "easy", knowledgePoints: ["kp_s2u3_01"] },
                        { q: "4.5 × 6", answer: "27", difficulty: "medium", knowledgePoints: ["kp_s2u3_01"] },
                        { q: "1.25 × 8", answer: "10", difficulty: "medium", knowledgePoints: ["kp_s2u3_01"] },
                        { q: "0.36 × 10", answer: "3.6", difficulty: "easy", knowledgePoints: ["kp_s2u3_01"] },
                        { q: "5.4 × 7", answer: "37.8", difficulty: "medium", knowledgePoints: ["kp_s2u3_01"] },
                        { q: "2.5 × 4 × 3", answer: "30", difficulty: "hard", knowledgePoints: ["kp_s2u3_01"] },
                        { q: "0.125 × 8 × 5", answer: "5", difficulty: "hard", knowledgePoints: ["kp_s2u3_01"] }
                    ],
                    wordProblems: [
                        { q: "一支铅笔0.8元，买6支要多少元？", answer: "0.8×6=4.8(元)", difficulty: "easy", knowledgePoints: ["kp_s2u3_04"] },
                        { q: "小明每天跑步1.5千米，一个星期（7天）跑多少千米？", answer: "1.5×7=10.5(千米)", difficulty: "easy", knowledgePoints: ["kp_s2u3_04"] },
                        { q: "一块长方形玻璃，长2.4米，宽1.5米。它的面积是多少平方米？", answer: "2.4×1.5=3.6(平方米)", difficulty: "medium", knowledgePoints: ["kp_s2u3_04"] },
                        { q: "水果店有苹果12.5千克，梨的重量是苹果的4倍。梨有多少千克？苹果和梨一共有多少千克？", answer: "12.5×4=50(千克)，12.5+50=62.5(千克)", difficulty: "medium", knowledgePoints: ["kp_s2u3_01"] },
                        { q: "一辆汽车每小时行驶65.5千米，3小时行驶多少千米？", answer: "65.5×3=196.5(千米)", difficulty: "medium", knowledgePoints: ["kp_s2u3_04"] },
                        { q: "一个正方形的边长是3.5分米，它的周长是多少分米？", answer: "3.5×4=14(分米)", difficulty: "easy", knowledgePoints: ["kp_s2u3_04"] }
                    ]
                },
                s2u4: {
                    title: "观察物体",
                    multipleChoice: [
                        { q: "从正面看到的形状叫做（  ）", options: ["主视图", "俯视图", "侧视图", "平面图"], answer: "A", difficulty: "easy", knowledgePoints: ["kp_s2u4_01"] },
                        { q: "从上面看到的形状叫做（  ）", options: ["主视图", "俯视图", "侧视图", "立体图"], answer: "B", difficulty: "easy", knowledgePoints: ["kp_s2u4_01"] },
                        { q: "观察一个物体，最多可以看到（  ）个面", options: ["1", "2", "3", "4"], answer: "C", difficulty: "medium", knowledgePoints: ["kp_s2u4_01"] },
                        { q: "一个正方体，从不同方向观察，看到的形状（  ）", options: ["都一样", "都不一样", "有的一样", "无法确定"], answer: "A", difficulty: "easy", knowledgePoints: ["kp_s2u4_02"] },
                        { q: "从侧面看到的形状叫做（  ）", options: ["主视图", "俯视图", "侧视图", "背视图"], answer: "C", difficulty: "easy", knowledgePoints: ["kp_s2u4_01"] }
                    ],
                    fillBlank: [
                        { q: "观察物体时，我们通常从（  ）、（  ）、（  ）三个方向观察", answer: "正面, 上面, 侧面", difficulty: "easy", knowledgePoints: ["kp_s2u4_01"] },
                        { q: "从正面看是长方形，从上面看是圆形的物体可能是（  ）", answer: "圆柱", difficulty: "medium", knowledgePoints: ["kp_s2u4_01"] },
                        { q: "站在不同位置观察同一物体，看到的形状（  ）", answer: "可能不同", difficulty: "easy", knowledgePoints: ["kp_s2u4_01"] },
                        { q: "一个长方体，从上面看是一个长方形，这个长方形的长和宽分别是长方体的（  ）和（  ）", answer: "长, 宽", difficulty: "medium", knowledgePoints: ["kp_s2u4_01"] }
                    ],
                    calculation: [],
                    wordProblems: [
                        { q: "用4个同样的小正方体搭成一个立体图形，从正面看是2层，从侧面看也是2层。请画出从上面看到的图形。", answer: "作图题（略）", difficulty: "hard", knowledgePoints: ["kp_s2u4_01"] },
                        { q: "一个圆柱，从正面看是什么形状？从上面看是什么形状？", answer: "从正面看是长方形，从上面看是圆形", difficulty: "medium", knowledgePoints: ["kp_s2u4_01"] },
                        { q: "一个长方体盒子，长10厘米，宽6厘米，高4厘米。从正面看到的面积是多少？", answer: "10×4=40(平方厘米)", difficulty: "medium", knowledgePoints: ["kp_s2u4_01"] }
                    ]
                },
                s2u5: {
                    title: "认识方程",
                    multipleChoice: [
                        { q: "下列式子中，是方程的是（  ）", options: ["3+5=8", "x+5", "x+5=12", "5>3"], answer: "C", difficulty: "easy", knowledgePoints: ["kp_s2u5_01"] },
                        { q: "x = 8是方程x + 3 = 11的（  ）", options: ["解", "未知数", "等式", "算式"], answer: "A", difficulty: "medium", knowledgePoints: ["kp_s2u5_01"] },
                        { q: "方程5x = 20的解是（  ）", options: ["x=3", "x=4", "x=5", "x=15"], answer: "B", difficulty: "easy", knowledgePoints: ["kp_s2u5_01"] },
                        { q: "下列说法正确的是（  ）", options: ["方程一定是等式", "等式一定是方程", "方程不是等式", "等式都含有未知数"], answer: "A", difficulty: "medium", knowledgePoints: ["kp_s2u5_01"] },
                        { q: "x - 15 = 35，x等于（  ）", options: ["20", "50", "15", "35"], answer: "B", difficulty: "easy", knowledgePoints: ["kp_s2u5_01"] },
                        { q: "3x = 48的解是（  ）", options: ["x=12", "x=14", "x=16", "x=18"], answer: "C", difficulty: "medium", knowledgePoints: ["kp_s2u5_01"] },
                        { q: "方程x ÷ 4 = 12的解是（  ）", options: ["x=3", "x=8", "x=16", "x=48"], answer: "D", difficulty: "medium", knowledgePoints: ["kp_s2u5_01"] },
                        { q: "2x + 3 = 15的解是（  ）", options: ["x=6", "x=9", "x=12", "x=7.5"], answer: "A", difficulty: "hard", knowledgePoints: ["kp_s2u5_01"] }
                    ],
                    fillBlank: [
                        { q: "含有（  ）的（  ）叫做方程", answer: "未知数, 等式", difficulty: "easy", knowledgePoints: ["kp_s2u5_01"] },
                        { q: "使方程左右两边相等的（  ）的值，叫做方程的解", answer: "未知数", difficulty: "easy", knowledgePoints: ["kp_s2u5_01"] },
                        { q: "x + 12 = 30，x = （  ）", answer: "18", difficulty: "easy", knowledgePoints: ["kp_s2u5_01"] },
                        { q: "5x = 45，x = （  ）", answer: "9", difficulty: "easy", knowledgePoints: ["kp_s2u5_01"] },
                        { q: "x - 8 = 20，x = （  ）", answer: "28", difficulty: "easy", knowledgePoints: ["kp_s2u5_01"] },
                        { q: "x ÷ 6 = 7，x = （  ）", answer: "42", difficulty: "medium", knowledgePoints: ["kp_s2u5_01"] },
                        { q: "3x + 5 = 20，x = （  ）", answer: "5", difficulty: "hard", knowledgePoints: ["kp_s2u5_01"] },
                        { q: "如果a + b = 10，当a = 6时，b = （  ）", answer: "4", difficulty: "medium", knowledgePoints: ["kp_s2u5_01"] }
                    ],
                    calculation: [
                        { q: "解方程：x + 15 = 40", answer: "x = 25", difficulty: "easy", knowledgePoints: ["kp_s2u5_02"] },
                        { q: "解方程：x - 18 = 22", answer: "x = 40", difficulty: "easy", knowledgePoints: ["kp_s2u5_02"] },
                        { q: "解方程：4x = 32", answer: "x = 8", difficulty: "easy", knowledgePoints: ["kp_s2u5_02"] },
                        { q: "解方程：x ÷ 5 = 9", answer: "x = 45", difficulty: "easy", knowledgePoints: ["kp_s2u5_02"] },
                        { q: "解方程：3x + 6 = 24", answer: "x = 6", difficulty: "medium", knowledgePoints: ["kp_s2u5_02"] },
                        { q: "解方程：2x - 5 = 15", answer: "x = 10", difficulty: "medium", knowledgePoints: ["kp_s2u5_02"] },
                        { q: "解方程：5x + 8 = 48", answer: "x = 8", difficulty: "hard", knowledgePoints: ["kp_s2u5_02"] },
                        { q: "解方程：6x - 12 = 30", answer: "x = 7", difficulty: "hard", knowledgePoints: ["kp_s2u5_02"] }
                    ],
                    wordProblems: [
                        { q: "小明有x本书，小红有25本书，他们一共有60本书。求小明有多少本书？（列方程解答）", answer: "x+25=60，x=35", difficulty: "medium", knowledgePoints: ["kp_s2u5_02"] },
                        { q: "一个数的3倍是45，求这个数。（用方程解）", answer: "3x=45，x=15", difficulty: "easy", knowledgePoints: ["kp_s2u5_02"] },
                        { q: "果园里有苹果树x棵，梨树比苹果树多15棵，梨树有80棵。苹果树有多少棵？", answer: "x+15=80，x=65(棵)", difficulty: "medium", knowledgePoints: ["kp_s2u5_03"] },
                        { q: "小华买了5支铅笔，每支x元，一共花了10元。每支铅笔多少元？", answer: "5x=10，x=2(元)", difficulty: "easy", knowledgePoints: ["kp_s2u5_03"] },
                        { q: "学校买来一批图书，分给4个班，每班分到35本后，还剩20本。一共买来多少本图书？（用方程解）", answer: "x-4×35=20，x=160(本)", difficulty: "hard", knowledgePoints: ["kp_s2u5_03"] }
                    ]
                },
                s2u6: {
                    title: "数据的表示和分析",
                    multipleChoice: [
                        { q: "条形统计图的特点是（  ）", options: ["能清楚地看出数量的多少", "能看出数量的变化趋势", "能看出部分与整体的关系", "以上都对"], answer: "A", difficulty: "easy", knowledgePoints: ["kp_s2u6_01"] },
                        { q: "折线统计图的特点是（  ）", options: ["能清楚地看出数量的多少", "能看出数量的变化趋势", "能看出部分与整体的关系", "以上都对"], answer: "B", difficulty: "easy", knowledgePoints: ["kp_s2u6_01"] },
                        { q: "要表示气温的变化情况，应选用（  ）", options: ["条形统计图", "折线统计图", "扇形统计图", "表格"], answer: "B", difficulty: "medium", knowledgePoints: ["kp_s2u6_01"] },
                        { q: "要比较各班人数的多少，应选用（  ）", options: ["条形统计图", "折线统计图", "扇形统计图", "表格"], answer: "A", difficulty: "medium", knowledgePoints: ["kp_s2u6_01"] },
                        { q: "平均数能够代表一组数据的（  ）", options: ["最大值", "最小值", "一般水平", "总和"], answer: "C", difficulty: "easy", knowledgePoints: ["kp_s2u6_02"] }
                    ],
                    fillBlank: [
                        { q: "（  ）统计图能清楚地看出数量的多少，（  ）统计图能看出数量的变化趋势", answer: "条形, 折线", difficulty: "easy", knowledgePoints: ["kp_s2u6_01"] },
                        { q: "一组数据的总和除以这组数据的个数，得到的结果叫做这组数据的（  ）", answer: "平均数", difficulty: "easy", knowledgePoints: ["kp_s2u6_01"] },
                        { q: "小明5次数学测验成绩分别是85分、90分、88分、92分、95分，他的平均成绩是（  ）分", answer: "90", difficulty: "medium", knowledgePoints: ["kp_s2u6_03"] },
                        { q: "在绘制统计图时，要有（  ）、（  ）和（  ）", answer: "标题, 数据, 图例", difficulty: "medium", knowledgePoints: ["kp_s2u6_01"] }
                    ],
                    calculation: [
                        { q: "求平均数：78、82、85、79、86", answer: "82", difficulty: "easy", knowledgePoints: ["kp_s2u6_02"] },
                        { q: "求平均数：90、85、88、92、95", answer: "90", difficulty: "easy", knowledgePoints: ["kp_s2u6_02"] },
                        { q: "求平均数：120、130、125、135、140", answer: "130", difficulty: "medium", knowledgePoints: ["kp_s2u6_02"] },
                        { q: "5个数的平均数是80，其中4个数分别是75、80、85、90，第5个数是多少", answer: "70", difficulty: "hard", knowledgePoints: ["kp_s2u6_02"] }
                    ],
                    wordProblems: [
                        { q: "小明、小红、小华三人的身高分别是135厘米、140厘米、145厘米。他们的平均身高是多少厘米？", answer: "(135+140+145)÷3=140(厘米)", difficulty: "easy", knowledgePoints: ["kp_s2u6_03"] },
                        { q: "四年级一班有学生40人，二班有学生45人，三班有学生43人。平均每班有多少人？", answer: "(40+45+43)÷3=42.67≈43(人)", difficulty: "medium", knowledgePoints: ["kp_s2u6_01"] },
                        { q: "某商店一周卖出图书情况如下：周一35本，周二40本，周三38本，周四42本，周五45本，周六50本，周日48本。平均每天卖出多少本？", answer: "(35+40+38+42+45+50+48)÷7=42.57≈43(本)", difficulty: "medium", knowledgePoints: ["kp_s2u6_01"] },
                        { q: "看图回答：根据条形统计图，哪个班人数最多？哪个班人数最少？相差多少人？（假设数据）", answer: "根据统计图回答（略）", difficulty: "medium", knowledgePoints: ["kp_s2u6_01"] }
                    ]
                },
                s2u7: {
                    title: "认识负数",
                    multipleChoice: [
                        { q: "如果+10表示收入10元，那么-8表示（  ）", options: ["收入8元", "支出8元", "收入2元", "支出2元"], answer: "B", difficulty: "easy", knowledgePoints: ["kp_s2u7_01"] },
                        { q: "零下12℃记作（  ）", options: ["-12℃", "+12℃", "12℃", "0℃"], answer: "A", difficulty: "easy", knowledgePoints: ["kp_s2u7_01"] },
                        { q: "在-5、0、+3、-2这几个数中，最小的数是（  ）", options: ["-5", "0", "+3", "-2"], answer: "A", difficulty: "medium", knowledgePoints: ["kp_s2u7_01"] },
                        { q: "比0小的数是（  ）", options: ["正数", "负数", "整数", "小数"], answer: "B", difficulty: "easy", knowledgePoints: ["kp_s2u7_02"] },
                        { q: "-8和+8相比（  ）", options: ["-8>+8", "-8<+8", "-8=+8", "无法比较"], answer: "B", difficulty: "easy", knowledgePoints: ["kp_s2u7_01"] },
                        { q: "如果海平面的高度记作0米，高于海平面50米记作+50米，那么低于海平面30米应记作（  ）", options: ["+30米", "-30米", "30米", "0米"], answer: "B", difficulty: "medium", knowledgePoints: ["kp_s2u7_01"] },
                        { q: "在0、-1、+1、-10这几个数中，最大的数是（  ）", options: ["0", "-1", "+1", "-10"], answer: "C", difficulty: "medium", knowledgePoints: ["kp_s2u7_01"] },
                        { q: "下列说法正确的是（  ）", options: ["负数都比0小", "负数都比正数大", "0是负数", "0既是正数也是负数"], answer: "A", difficulty: "easy", knowledgePoints: ["kp_s2u7_01"] }
                    ],
                    fillBlank: [
                        { q: "比0大的数是（  ），比0小的数是（  ）", answer: "正数, 负数", difficulty: "easy", knowledgePoints: ["kp_s2u7_02"] },
                        { q: "如果+5表示向东走5米，那么-3表示向（  ）走（  ）米", answer: "西, 3", difficulty: "easy", knowledgePoints: ["kp_s2u7_01"] },
                        { q: "水位上升2米记作+2米，那么水位下降4米记作（  ）米", answer: "-4", difficulty: "easy", knowledgePoints: ["kp_s2u7_01"] },
                        { q: "零上6℃记作（  ），零下9℃记作（  ）", answer: "+6℃, -9℃", difficulty: "easy", knowledgePoints: ["kp_s2u7_01"] },
                        { q: "在-8、-3、0、+5、+2这几个数中，最大的是（  ），最小的是（  ）", answer: "+5, -8", difficulty: "medium", knowledgePoints: ["kp_s2u7_01"] },
                        { q: "在数轴上，（  ）边的数总比（  ）边的数大", answer: "右, 左", difficulty: "medium", knowledgePoints: ["kp_s2u7_01"] },
                        { q: "0既不是（  ），也不是（  ）", answer: "正数, 负数", difficulty: "easy", knowledgePoints: ["kp_s2u7_01"] },
                        { q: "所有的负数都在0的（  ）边，所有的正数都在0的（  ）边", answer: "左, 右", difficulty: "medium", knowledgePoints: ["kp_s2u7_01"] }
                    ],
                    calculation: [],
                    wordProblems: [
                        { q: "某地早晨的气温是零下5℃，中午上升了8℃。中午的气温是多少？", answer: "零上3℃（+3℃）", difficulty: "medium", knowledgePoints: ["kp_s2u7_01"] },
                        { q: "小明在做游戏，规定向前走为正，向后走为负。小明按以下路线行走：+6米、-4米、+5米、-3米。最后小明在起点的前面还是后面？距离起点多远？", answer: "6-4+5-3=4(米)，前面4米", difficulty: "hard", knowledgePoints: ["kp_s2u7_01"] },
                        { q: "某市某天的最高气温是零上10℃，最低气温是零下2℃。这一天的温差是多少度？", answer: "10-(-2)=12(度)", difficulty: "medium", knowledgePoints: ["kp_s2u7_01"] },
                        { q: "银行存折上，存入500元记作+500元，那么取出300元应记作多少？", answer: "-300元", difficulty: "easy", knowledgePoints: ["kp_s2u7_01"] },
                        { q: "海平面的高度记作0米，珠穆朗玛峰高出海平面8844米应记作多少米？", answer: "+8844米", difficulty: "easy", knowledgePoints: ["kp_s2u7_01"] }
                    ]
                },
                s2u8: {
                    title: "总复习",
                    multipleChoice: [
                        { q: "3.45中，4在（  ）位", options: ["个位", "十分位", "百分位", "千分位"], answer: "B", difficulty: "easy", knowledgePoints: ["kp_s2u8_01"] },
                        { q: "三角形的内角和是（  ）度", options: ["90", "180", "270", "360"], answer: "B", difficulty: "easy", knowledgePoints: ["kp_s2u8_02"] },
                        { q: "0.8 × 5 = （  ）", options: ["0.4", "4", "40", "0.04"], answer: "B", difficulty: "easy", knowledgePoints: ["kp_s2u8_01"] },
                        { q: "下列式子中，是方程的是（  ）", options: ["5+3", "x-2=8", "6>4", "3×2=6"], answer: "B", difficulty: "easy", knowledgePoints: ["kp_s2u8_03"] },
                        { q: "平均数能代表一组数据的（  ）", options: ["最大值", "一般水平", "最小值", "总和"], answer: "B", difficulty: "easy", knowledgePoints: ["kp_s2u8_01"] },
                        { q: "零下8℃记作（  ）", options: ["+8℃", "-8℃", "8℃", "0℃"], answer: "B", difficulty: "easy", knowledgePoints: ["kp_s2u8_01"] },
                        { q: "2.5 + 3.8 = （  ）", options: ["5.3", "6.3", "5.13", "6.13"], answer: "B", difficulty: "easy", knowledgePoints: ["kp_s2u8_01"] },
                        { q: "等边三角形的每个角是（  ）度", options: ["45", "60", "90", "120"], answer: "B", difficulty: "easy", knowledgePoints: ["kp_s2u8_02"] }
                    ],
                    fillBlank: [
                        { q: "0.45里面有（  ）个0.01", answer: "45", difficulty: "easy", knowledgePoints: ["kp_s2u8_01"] },
                        { q: "三角形按角分可分为（  ）三角形、（  ）三角形和（  ）三角形", answer: "锐角, 直角, 钝角", difficulty: "medium", knowledgePoints: ["kp_s2u8_02"] },
                        { q: "1.2 × 5 = （  ）", answer: "6", difficulty: "easy", knowledgePoints: ["kp_s2u8_01"] },
                        { q: "含有（  ）的（  ）叫做方程", answer: "未知数, 等式", difficulty: "easy", knowledgePoints: ["kp_s2u8_03"] },
                        { q: "（  ）统计图能看出数量的变化趋势", answer: "折线", difficulty: "easy", knowledgePoints: ["kp_s2u8_04"] },
                        { q: "比0小的数叫做（  ）", answer: "负数", difficulty: "easy", knowledgePoints: ["kp_s2u8_01"] },
                        { q: "平行四边形的对边（  ）且（  ）", answer: "平行, 相等", difficulty: "medium", knowledgePoints: ["kp_s2u8_02"] },
                        { q: "6.8 - 2.5 = （  ）", answer: "4.3", difficulty: "easy", knowledgePoints: ["kp_s2u8_01"] }
                    ],
                    calculation: [
                        { q: "4.5 + 2.8", answer: "7.3", difficulty: "easy", knowledgePoints: ["kp_s2u8_01"] },
                        { q: "8.6 - 3.9", answer: "4.7", difficulty: "easy", knowledgePoints: ["kp_s2u8_01"] },
                        { q: "1.5 × 6", answer: "9", difficulty: "easy", knowledgePoints: ["kp_s2u8_01"] },
                        { q: "解方程：x + 12 = 35", answer: "x = 23", difficulty: "easy", knowledgePoints: ["kp_s2u8_03"] },
                        { q: "求平均数：75、80、85、90、95", answer: "85", difficulty: "medium", knowledgePoints: ["kp_s2u8_01"] },
                        { q: "一个三角形两个角分别是45度和65度，第三个角是多少度", answer: "70度", difficulty: "medium", knowledgePoints: ["kp_s2u8_02"] }
                    ],
                    wordProblems: [
                        { q: "小明身高1.42米，小红比小明高0.06米。小红身高多少米？", answer: "1.42+0.06=1.48(米)", difficulty: "easy", knowledgePoints: ["kp_s2u8_01"] },
                        { q: "一支铅笔1.5元，买4支要多少元？", answer: "1.5×4=6(元)", difficulty: "easy", knowledgePoints: ["kp_s2u8_01"] },
                        { q: "果园里有苹果树x棵，梨树比苹果树多20棵，梨树有85棵。苹果树有多少棵？", answer: "x+20=85，x=65(棵)", difficulty: "medium", knowledgePoints: ["kp_s2u8_01"] },
                        { q: "某地上午的气温是零下3℃，下午上升了7℃。下午的气温是多少？", answer: "零上4℃（+4℃）", difficulty: "medium", knowledgePoints: ["kp_s2u8_01"] },
                        { q: "四（1）班5次卫生检查得分分别是92分、95分、88分、90分、95分。平均得分是多少？", answer: "(92+95+88+90+95)÷5=92(分)", difficulty: "medium", knowledgePoints: ["kp_s2u8_01"] }
                    ]
                }
        };
