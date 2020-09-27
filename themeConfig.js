const baseConfig = {
  logo: "https://test-1253763202.cos.ap-shanghai.myqcloud.com/docs/js/probability.png",
  projectName: "上财同等学力2020级经济统计学",
  homeUrl: "/getting-started-cn.html",
  library: "https://github.com/ZhangWei-KUMO/js-advanced"
};

const themeConfig = {
  categoryOrder: {
    课程表: 0,
    社会主义经济理论: 1,
    概率论与数理统计: 2,
    微观经济学: 3,
    宏观经济学: 4,
    西方经济学: 5,
    货币银行学: 6
  },
  typeOrder: {
    "必考点": 1
  }
};

module.exports = { themeConfig, baseConfig };
