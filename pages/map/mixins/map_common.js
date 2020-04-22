export default {
  data() {
    return {
      map: null
    }
  },
  mounted() {
    this.asyncLoadScript()
  },
  methods: {
    //加载高德地图资源
    asyncLoadScript() {
      let map = new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.type = "text/javascript";
        script.src = "https://webapi.amap.com/maps?v=1.4.15&key=31b63a747017bc1389496f3de493f833&callback=init";
        window.init = function () {
          resolve('加载')
        }
        document.head.appendChild(script);
      });
      let mapUI = new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.type = "text/javascript";
        script.src = "//webapi.amap.com/ui/1.0/main-async.js";
        document.head.appendChild(script);
        script.onload = function () {
          resolve('地图加载UI完成')
        };
      });
      return Promise.all([map, mapUI]).then((result) => {
        this.initMap()
        return result;
      });
    },
    initMap() {
      let map = new AMap.Map("container", {
        zoom: 15,
        center: [104.068275,30.606013],
        resizeEnable: true,
      })
      this.map = map
      AMap.plugin(['AMap.ToolBar'], function() {
        map.addControl(new AMap.ToolBar({
          liteStyle: true
        }))
      })
    }
  }
}