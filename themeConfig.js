const baseConfig = {
  logo: "https://test-1253763202.cos.ap-shanghai.myqcloud.com/docs/js/probability.png",
  projectName: "概率论与数理统计",
  homeUrl: "/getting-started-cn.html",
  library: "https://github.com/ZhangWei-KUMO/js-advanced"
};

const themeConfig = {
  categoryOrder: {
    简介: 0,
    基础算法: 1,
    异步调用: 2,
    链表: 3,
    二叉树: 4,
    回溯算法: 5,
    数学公式: 10,
  },
  typeOrder: {
    "必考点": 1
  }
};

module.exports = { themeConfig, baseConfig };
