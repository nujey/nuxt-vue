<template>
  <div>
    <h4>事件系统</h4>
    <div class="container" id="container">
    </div>
    <div class="footer">
      <br style="margin-bottom: 5px;"/>
      <div class="footer-item">
        <h5>地图事件：</h5>
        <div class="flex-btns">
          <van-button plain type="info" size="mini" @click="handleOpenDrag">拖拽事件</van-button>
          <van-button plain type="info" size="mini" @click="handleOpenCLick">点击事件</van-button>
          <van-button plain type="info" size="mini" @click="handleMove">移动事件</van-button>
          <van-button plain type="info" size="mini" @click="handleZoom">缩放事件</van-button>
        </div>
      </div>
      <div class="footer-item">
        <h5>覆盖事件：</h5>
        <div class="flex-btns">
          <van-button plain type="info" size="mini" @click="handleCoverEvent">点击覆盖</van-button>
          <van-button plain type="info" size="mini" @click="handleOpenCLick">拖拽覆盖</van-button>
          <van-button plain type="info" size="mini" @click="handleMove">信息窗体</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mapEvents from './mixins/map_events'
import { Button } from 'vant'
let map = null
export default {
  mixins: [mapEvents],
  components: {
    [Button.name]: Button
  },
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
      map = new AMap.Map("container", {
        zoom: 15,
        center: [104.068275,30.606013],
        resizeEnable: true,
        // mapStyle: 'amap://styles/macaron',
        // pitch: 80,
        // rotation: -15,
        // viewMode:'3D',//开启3D视图,默认为关闭
        // buildingAnimation:true,//楼块出现是否带动画
        // expandZoomRange:true,
        // zooms:[3,20],
      })
      this.map = map
      // map.on('complete', function() {
      //   console.log('加载完成啦')
      // })
      this.handleComplete()
      AMap.plugin(['AMap.ToolBar'], function() {
        map.addControl(new AMap.ToolBar({
          liteStyle: true
        }))
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#container {
  margin: 0 auto;
  width: 100%; height: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
.footer {
  width: 100%; height: 20vh;
  position: fixed;
  bottom: 0; left: 0;
  background: #fff;
  z-index: 100;
  padding: 5px 10px;
  overflow-y: scroll;
  .footer-item {
    display: flex;
    justify-content: left;
    align-items: top;
    flex-wrap: wrap;
    .flex-btns {
      flex: 1;
      & > .van-button {
        margin: 3px 0px;
      }
    }
  }
}
</style>
