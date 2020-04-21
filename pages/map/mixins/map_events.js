export default {
  data() {
    return {

    }
  },
  methods: {
    /**
     * 完成加载
     */
    handleComplete() {
      this.map.on('complete', () => {
        console.log('加载完成啦')
      })
    },
    /**
     * 点击事件
     */
    handleOpenCLick() {
      this.map.on('click', (e) => { console.log(e, '点击地图') });
      this.map.on('dblclick', (e) => { console.log(e, '双击地图') });
      this.map.on('mousemove', (e) => { console.log(e, '滑动鼠标') });
    },
    /**
     * 开启拖拽
     */
    handleOpenDrag() {
      this.map.on('dragstart', () => { console.log('开始拖拽') })
      this.map.on('dragging', () => { console.log('拖拽ing') })
      this.map.on('dragend', () => { console.log('结束拖拽') })
    },
    handleOffDrag() {
      this.map.off('dragstart', () => { console.log('结束') })
      this.map.off('dragging')
      this.map.off('dragend')
    },
    /**
     * 移动相关事件
     */
    handleMove() {
      this.map.on('movestart', () => { console.log('开始移动') });
      this.map.on('mapmove', () => { console.log('正在移动') });
      this.map.on('moveend', () => { console.log('移动结束') });
    },
    handleMoveEnd() {
      this.map.off('movestart', () => { console.log('开始移动') });
      this.map.off('mapmove', () => { console.log('正在移动') });
      this.map.off('moveend', () => { console.log('移动结束') });
    },
    /**
     * 缩放相关
     */
    handleZoom() {
      this.map.on('zoomstart', () => { });
      this.map.on('zoomchange', () => { });
      this.map.on('zoomend', () => { });
    },
    handleZoomClose() {
      this.map.off('zoomstart', () => { });
      this.map.off('zoomchange', () => { });
      this.map.off('zoomend', () => { });
    },
    /**
     * 覆盖物点击和鼠标事件
     */
    handleCoverEvent() {
      let marker = new AMap.Marker({
        map: this.map,
        icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
        position: [104.068275, 30.606013]
      });
      let circle = new AMap.Circle({
        map: this.map,
        center: [104.068275, 30.606013],          //设置线覆盖物路径
        radius: 500,
        strokeColor: "#3366FF", //边框线颜色
        strokeOpacity: 0.3,       //边框线透明度
        strokeWeight: 3,        //边框线宽
        fillColor: "#FFA500", //填充色
        fillOpacity: 0.35//填充透明度
      });
      let polygonArr = [[104.068275, 30.606013],
        [104.410703, 30.897555],
        [104.402292, 30.892353],
        [104.389846, 30.891365]];
      let polygon = new AMap.Polygon({
          map: this.map,
          path: polygonArr,//设置多边形边界路径
          strokeColor: "#FF33FF", //线颜色
          strokeOpacity: 0.2, //线透明度
          strokeWeight: 3,    //线宽
          fillColor: "#1791fc", //填充色
          fillOpacity: 0.35//填充透明度
      });
      marker.on('click', (e) => {})
      circle.on('click', (e) => {})
      polygon.on('click', (e) => {})
      this.map.setFitView()
      marker.on('mouseover', (e) => {});
      circle.on('mouseover', (e) => {});
      polygon.on('mouseover', (e) => {});

      marker.on('mouseout', (e) => {});
      circle.on('mouseout', (e) => {});
      polygon.on('mouseout', (e) => {});
    }
  }
}