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
          <van-button plain type="info" size="mini" @click="handleAddCover">添加覆盖</van-button>
          <van-button plain type="info" size="mini" @click="handleRemoveCover">删除覆盖</van-button>
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
import mapCommon from './mixins/map_common'
import mapCover from './mixins/map_cover'
import { Button } from 'vant'
let map = null
export default {
  mixins: [mapCommon, mapCover],
  components: {
    [Button.name]: Button
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
