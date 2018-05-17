Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value'
    }
  },
  data: {
    // 这里是一些组件内部数据
    count: 0
  },
  methods: {
    changeText() {
      this.setData({
        count: this.data.count + 1
      });
      this.triggerEvent('chaaaange', this.generateUniqueID());
    },
    generateUniqueID() {
      const STRING_SET = 'a0bc1de2fgh3ijk4lm5nop6qr7stu8vwx9yz';
      let uniqueId = '';
      for (let i = 0; i < 7; i += 1) {
        uniqueId += STRING_SET[Math.floor(Math.random() * 36)];
      }
      return uniqueId;
    }
  }
});
