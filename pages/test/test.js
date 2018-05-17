//获取应用实例
const app = getApp();

Page({
  data: {
    pageName: '',
  },
  onLoad(options) {
    this.setData({
      pageName: options.name,
    });
  },
});
