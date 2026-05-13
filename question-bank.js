// 题库系统 - 每个单元包含大量题目供随机抽取

const questionBank = {
    1: { // 第一单元 - 认识更大的数
        title: "认识更大的数",
        multipleChoice: [
            { q: "下面各数中，最大的数是（  ）", options: ["9999", "10000", "9998", "10001"], answer: "D", difficulty: "easy" },
            { q: "由8个千、6个百和5个一组成的数是（  ）", options: ["865", "8065", "8605", "8650"], answer: "C", difficulty: "medium" },
            { q: "与"九千零七"相等的数是（  ）", options: ["9700", "9007", "9070", "907"], answer: "B", difficulty: "easy" },
            { q: "下面各数中，一个零也不读的是（  ）", options: ["5008", "5080", "5800", "5088"], answer: "D", difficulty: "medium" },
            { q: "最小的四位数比最大的三位数多（  ）", options: ["1", "10", "100", "1000"], answer: "A", difficulty: "easy" },
            { q: "6000里面有（  ）个百", options: ["6", "60", "600", "6000"], answer: "B", difficulty: "medium" },
            { q: "下面各数中，读两个零的是（  ）", options: ["5008", "5080", "5005", "5808"], answer: "C", difficulty: "hard" },
            { q: "最接近9000的数是（  ）", options: ["8997", "9005", "8989", "9012"], answer: "A", difficulty: "hard" },
        ],
        fillBlank: [
            { q: "一万里面有（  ）个千，（  ）个百。", answer: "10, 100", difficulty: "easy" },
            { q: "6725是由（  ）个千、（  ）个百、（  ）个十和（  ）个一组成的。", answer: "6, 7, 2, 5", difficulty: "medium" },
            { q: "用3、0、8、5组成的最大四位数是（  ），最小四位数是（  ）。", answer: "8530, 3058", difficulty: "medium" },
            { q: "一个数由5个千和9个一组成，这个数是（  ），读作（  ）。", answer: "5009, 五千零九", difficulty: "easy" },
            { q: "按规律填数：2000、3000、4000、（  ）、（  ）。", answer: "5000, 6000", difficulty: "easy" },
            { q: "9□58≈9000，□里最大填（  ）", answer: "4", difficulty: "hard" },
            { q: "与9999相邻的两个数是（  ）和（  ）", answer: "9998, 10000", difficulty: "medium" },
            { q: "一个四位数，千位是5，个位是3，其余各位都是0，这个数是（  ）", answer: "5003", difficulty: "medium" },
        ],
        calculation: [
            { q: "3000 + 2000", answer: "5000", difficulty: "easy" },
            { q: "7000 - 4000", answer: "3000", difficulty: "easy" },
            { q: "500 + 800", answer: "1300", difficulty: "easy" },
            { q: "3425 + 2367", answer: "5792", difficulty: "medium" },
            { q: "6843 - 2759", answer: "4084", difficulty: "medium" },
            { q: "5006 + 3994", answer: "9000", difficulty: "medium" },
            { q: "4500 - 1200 + 800", answer: "4100", difficulty: "hard" },
            { q: "3600 + 2400 - 1500", answer: "4500", difficulty: "hard" },
        ],
        wordProblems: [
            {
                q: "学校图书馆有故事书3500本，科技书比故事书少800本。图书馆一共有故事书和科技书多少本？",
                answer: "3500-800=2700(本)，3500+2700=6200(本)",
                difficulty: "medium"
            },
            {
                q: "水果店上午卖出苹果2450千克，下午卖出苹果1780千克。这一天一共卖出苹果多少千克？",
                answer: "2450+1780=4230(千克)",
                difficulty: "easy"
            },
            {
                q: "一个工厂原计划生产8000个零件，已经生产了5600个，还要生产多少个？",
                answer: "8000-5600=2400(个)",
                difficulty: "easy"
            },
            {
                q: "小明家到学校有1200米，他已经走了450米，还要走多少米才能到学校？",
                answer: "1200-450=750(米)",
                difficulty: "easy"
            },
            {
                q: "商店里有电视机3800台，冰箱比电视机多1200台。商店里电视机和冰箱一共有多少台？",
                answer: "3800+1200=5000(台)，3800+5000=8800(台)",
                difficulty: "medium"
            },
            {
                q: "体育馆有6500个座位，上午来了2350人，下午又来了1870人。还有多少个空座位？",
                answer: "2350+1870=4220(人)，6500-4220=2280(个)",
                difficulty: "hard"
            },
        ]
    },
    3: { // 第三单元 - 乘法
        title: "乘法",
        multipleChoice: [
            { q: "25 × 4 = （  ）", options: ["80", "90", "100", "110"], answer: "C", difficulty: "easy" },
            { q: "下列算式中，积最大的是（  ）", options: ["23 × 4", "12 × 8", "15 × 6", "18 × 5"], answer: "B", difficulty: "medium" },
            { q: "125 × 8 = （  ）", options: ["100", "1000", "10000", "800"], answer: "B", difficulty: "easy" },
            { q: "一个乘数扩大10倍，另一个乘数不变，积（  ）", options: ["扩大10倍", "缩小10倍", "不变", "扩大100倍"], answer: "A", difficulty: "medium" },
            { q: "36 × 12 的结果是（  ）", options: ["432", "342", "423", "324"], answer: "A", difficulty: "medium" },
            { q: "与25×40结果相同的算式是（  ）", options: ["25×4×10", "25×20×2", "50×20", "100×10"], answer: "C", difficulty: "hard" },
        ],
        fillBlank: [
            { q: "25 × 4 = （  ），125 × 8 = （  ）", answer: "100, 1000", difficulty: "easy" },
            { q: "48个25相加的和是（  ），算式是（  ）", answer: "1200, 25×48", difficulty: "medium" },
            { q: "一个因数是23，另一个因数是40，积是（  ）", answer: "920", difficulty: "easy" },
            { q: "45 × 20 = 45 × 2 × （  ）= （  ）", answer: "10, 900", difficulty: "medium" },
            { q: "估算：38 × 22 ≈ （  ）× （  ）= （  ）", answer: "40, 20, 800", difficulty: "medium" },
        ],
        calculation: [
            { q: "25 × 4", answer: "100", difficulty: "easy" },
            { q: "125 × 8", answer: "1000", difficulty: "easy" },
            { q: "36 × 23", answer: "828", difficulty: "medium" },
            { q: "48 × 35", answer: "1680", difficulty: "medium" },
            { q: "125 × 24", answer: "3000", difficulty: "hard" },
            { q: "25 × 4 × 8", answer: "800", difficulty: "medium" },
        ],
        wordProblems: [
            { q: "学校图书馆每天借出图书45本，一个月（按30天计算）借出多少本？", answer: "45×30=1350(本)", difficulty: "easy" },
            { q: "一辆汽车每小时行驶65千米，从上午8时到下午2时，这辆汽车行驶了多少千米？", answer: "65×6=390(千米)", difficulty: "medium" },
            { q: "水果店运来苹果25箱，每箱12千克。运来的梨是苹果的2倍，运来梨多少千克？", answer: "25×12=300(千克)，300×2=600(千克)", difficulty: "hard" },
        ]
    },
    5: { // 第五单元 - 除法
        title: "除法",
        multipleChoice: [
            { q: "840 ÷ 70 = （  ）", options: ["11", "12", "13", "14"], answer: "B", difficulty: "easy" },
            { q: "下列算式中，商最大的是（  ）", options: ["720 ÷ 80", "630 ÷ 70", "540 ÷ 60", "450 ÷ 50"], answer: "B", difficulty: "medium" },
            { q: "被除数扩大10倍，除数不变，商（  ）", options: ["扩大10倍", "缩小10倍", "不变", "扩大100倍"], answer: "A", difficulty: "medium" },
            { q: "768 ÷ 32 的商是（  ）位数", options: ["一", "二", "三", "四"], answer: "B", difficulty: "medium" },
            { q: "在除法算式中，余数一定要比除数（  ）", options: ["大", "小", "相等", "无法确定"], answer: "B", difficulty: "easy" },
        ],
        fillBlank: [
            { q: "720 ÷ 80 = （  ），320 ÷ 40 = （  ）", answer: "9, 8", difficulty: "easy" },
            { q: "被除数是540，除数是60，商是（  ）", answer: "9", difficulty: "easy" },
            { q: "（  ）÷ 25 = 32，（  ）÷ 48 = 16", answer: "800, 768", difficulty: "medium" },
            { q: "在有余数的除法中，余数要比除数（  ）", answer: "小", difficulty: "easy" },
            { q: "一个数除以24，商是15，余数是18，这个数是（  ）", answer: "378", difficulty: "hard" },
        ],
        calculation: [
            { q: "240 ÷ 60", answer: "4", difficulty: "easy" },
            { q: "360 ÷ 40", answer: "9", difficulty: "easy" },
            { q: "768 ÷ 32", answer: "24", difficulty: "medium" },
            { q: "936 ÷ 24", answer: "39", difficulty: "medium" },
            { q: "875 ÷ 35", answer: "25", difficulty: "medium" },
        ],
        wordProblems: [
            { q: "学校买来480本图书，平均分给6个年级，每个年级分到多少本？", answer: "480÷6=80(本)", difficulty: "easy" },
            { q: "一辆汽车3小时行驶了285千米，照这样计算，这辆汽车每小时行驶多少千米？", answer: "285÷3=95(千米)", difficulty: "medium" },
            { q: "果园里有苹果树240棵，是梨树的3倍。梨树有多少棵？", answer: "240÷3=80(棵)", difficulty: "easy" },
        ]
    }
};
