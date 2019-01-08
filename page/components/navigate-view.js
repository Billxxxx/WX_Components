// components/component-tag-name.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    path: String
  },
  methods: {
    onTap: function () {
      var that = this
      console.log(that.properties)
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('myevent', myEventDetail, myEventOption)

      wx.navigateTo({
        url: that.properties.path,
      })
    }
  }
})