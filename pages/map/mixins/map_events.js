export default {
  data() {
    return {

    }
  },
  methods: {
    /**
     * 开启拖拽
     */
    handleOpenDrag() {
      this.map.on('dragstart', () => { console.log('开始拖拽') })
      this.map.on('dragging', () => { console.log('拖拽ing') })
      this.map.on('dragend', () => { console.log('结束拖拽') })
    },
    handleOffDrag() {
      console.log('结束')
      this.map.off('dragstart', () => { console.log('结束') })
      this.map.off('dragging')
      this.map.off('dragend')
    }
  }
}