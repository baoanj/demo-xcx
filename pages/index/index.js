//获取应用实例
const app = getApp();

Page({
  data: {
    motto: 'Hello World',
    projectName: '',
    innerInnerText: 'InnerInnerText',
  },
  navigateToTest() {
    wx.navigateTo({
      url: '../test/test?name=hello',
    });
  },
  onLoad() {
    if (app.globalData.projectName) {
      this.setData({
        projectName: app.globalData.projectName,
      });
    } else {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          projectName: res.projectName,
        });
      }
    }
  },
  changeMotto() {
    this.setData({
      motto: this.data.motto + '!'
    });
  },
  ckickMe(event) {
    console.log(event);
  },
  innerChange(event) {
    this.setData({
      innerInnerText: event.detail,
    });
  },
});
