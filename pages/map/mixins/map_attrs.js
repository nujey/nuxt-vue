export default {
  methods: {
    /**
     * 地图创建
     */
    handleCreate() {
      this.initMap()
    },
    /**
     * 切换语言
     */
    handleTransform() {
      let lang = this.map.getLang() === 'zh_cn' ? 'en' : 'zh_cn'
      this.map.setLang(lang)
    },
    /**
     * 地图修改
     */
    handleDestroy() {
      this.map.destroy()
    },
    /**
     * 设置当前行政区
     */
    handleSetCity() {
      this.map.setCity('重庆')
    },
    /**
     * 设置/获取地图显示范围
     */
    handleSetBounds() {
      let newBounds = new AMap.Bounds([a, b], [c, d])
      this.map.setBounds(newBounds)
    },
    /**
     * 限制地图显示范围
     */
    handleSetLimitBounds() {
      let bounds = map.getBounds()
      map.setLimitBounds(bounds)
      // 取消限制
      // map.clearLimitBounds()
    }
  }
}