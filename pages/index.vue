<template>
  <div>
    111
  </div>
</template>

<script>

export default {
  components: {
    // [Button.name]: Button
  },
  data() {
    return {
      
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
    this.asyncLoadScript()
  },
  methods: {
    //加载高德地图资源
    asyncLoadScript() {
      // let map = new Promise((resolve, reject) => {
      //   let script = document.createElement('script');
      //   script.type = "text/javascript";
      //   script.src = "https://webapi.amap.com/maps?v=1.4.15&key=31b63a747017bc1389496f3de493f833&callback=init";
      //   window.init = function () {
      //     resolve('加载')
      //   }
      //   document.head.appendChild(script);
      // });
      // let mapUI = new Promise((resolve, reject) => {
      //   let script = document.createElement('script');
      //   script.type = "text/javascript";
      //   script.src = "//webapi.amap.com/ui/1.0/main-async.js";
      //   document.head.appendChild(script);
      //   script.onload = function () {
      //     resolve('地图加载UI完成')
      //   };
      // });
      // return Promise.all([map, mapUI]).then((result) => {
      //   this.initMap()
      //   return result;
      // });
    },
  }
}
</script>

<style scoped>
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
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 5px 10px;
}
</style>
