const baseConfig = {
  logo: "https://self-1253763202.cos.ap-chengdu.myqcloud.com/applications/shangcai/logo.jpg",
  projectName: "经计栈",
  projectNameLogo: "https://self-1253763202.cos.ap-chengdu.myqcloud.com/applications/shangcai/logo_text.jpg",
  homeUrl: "/getting-started-cn.html",
  library: "https://github.com/ZhangWei-KUMO/js-advanced"
};

const themeConfig = {
  categoryOrder: {
    前言: 0,
    社会主义经济理论: 1,
    概率论与数理统计: 2,
    微观经济学: 3,
    宏观经济学: 4,
    西方经济学: 5,
    货币银行学: 6,
    微积分: 7,
    数据应用: 8,
  },
  typeOrder: {
    "必考点": 1
  }
};

module.exports = { themeConfig, baseConfig };
