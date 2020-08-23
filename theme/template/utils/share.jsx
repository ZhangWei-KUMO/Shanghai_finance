// 分享给微信和QQ好友或群
export function updateAppMessageShareData(link, title, imgUrl, desc = "") {
  wx.ready(() => {
    wx.updateAppMessageShareData({
      title: `${title}- 概率论与数理统计`,
      desc,
      link,
      imgUrl,
      success() {
        console.log("分享成功");
      }
    });
  });
}

// 分享朋友圈
export function updateTimelineShareData(link, title, imgUrl) {
  wx.ready(() => {
    wx.updateTimelineShareData({
      title: `${title} - 概率论与数理统计`,
      link,
      imgUrl,
      success() {
        console.log("分享成功");
      }
    });
  });
}
