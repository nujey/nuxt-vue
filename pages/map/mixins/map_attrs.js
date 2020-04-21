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
    },
    /**
     * 地图的平移
     */
    handlePanMove() {
      this.map.panBy(50, -100)
      // 平移到固定的坐标
      this.map.panTo([116.405467, 39.907761]);
    },
    /**
     * 点击地图获取经纬度
     */
    handleClickGetPosition() {
      this.map.on('click', function(e) {
        console.log(e)
        e.lnglat.getLng()
        e.lnglat.getLat()
      })
    }
  }
}