export default {
  data() {
    return {
      markers: []
    }
  },
  methods: {
    handleAddCover() {
      let marker1 = new AMap.Marker({
        position: [104.068275, 30.606013]
      })
      let marker2 = new AMap.Marker({
        position: [104.070276, 30.606013]
      })
      let marker3 = new AMap.Marker({
        position: [104.065277, 30.606013]
      })
      this.markers = [marker1, marker2, marker3]
      this.map.add(this.markers)
    }
  }
}