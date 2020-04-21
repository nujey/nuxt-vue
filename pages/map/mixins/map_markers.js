export default {
  data() {
    return {
      marker: null, // 标记点
      circle: null, // 圆圈范围,
      satelliteLayer: null, // 卫星图层
      scale: null, // 比例尺
      toolBar: null, // 工具条
    }
  },
  methods: {
    /**
     * 添加点标记
     */
    handleAddMarker() {
      this.marker = new AMap.Marker({
        icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
        position: [104.068275,30.606013]
      })
      this.map.add(this.marker)
      this.map.setFitView()
    },
    /**
     * 删除点标记
     */
    handleRemoveMarker() {
      this.map.remove(this.marker)
    },
    /**
     * 添加原型覆盖
     */
    handleAddCircle() {
      this.circle = new AMap.Circle({
        center: [104.068275,30.606013],
        radius: 500,
        strokeColor: '#f33', // 线颜色
        strokeWidth: 3, // 线粗细
        strokeOpacity: 1, // 线透明度
        fillColor: '#ee2200', // 填充颜色
        fillOpacity: .35 // 填充透明度
      })
      this.map.add(this.circle)
    },
    /**
     * 删除覆盖
     */
    handleRemoveCircle() {
      this.map.remove(this.circle)
    },
    /**
     * 添加图层
     */
    handleAddLayer() {
      this.satelliteLayer = new AMap.TileLayer.Satellite()
      let roadLayer = new AMap.TileLayer.RoadNet(); // 路网图层
      this.map.add(this.satelliteLayer)
    },
    /**
     * 删除图层
     */
    handleRemoveLayer() {
      this.map.remove(this.satelliteLayer)
    },
    /**
     * 
     */
    handleScale() {
      // this.toolBar = new AMap.ToolBar({
      //   visible: false
      // })
      // this.map.addControl(this.toolBar)
      // this.toolBar.show()
      // AMap.plugin(['AMap.ToolBar'], function() {
      //   this.map.addControl(new AMap.ToolBar({
      //     liteStyle: true
      //   }))
      // })
    }
  }
}