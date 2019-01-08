// components/component-tag-name.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    path: String
  },
  methods: {
    onTap: function() {
      wx.navigateTo({
        url: this.properties.path,
      })
    }
  }
})