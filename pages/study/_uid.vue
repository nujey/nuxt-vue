<template>
  <div>
    uid{{uid}}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  asyncData({ params }, cb) {
    console.log(params)
    // axios.get(`https://my-api/posts/${params.id}`)
    //   .then(res => {
    //     cb(null, { title: res.data.title})
    //   })
  },
  validate({ params, store }) {
    // return /^\d+$/.test(params.uid)
    // return new Promise((resolve) => setTimeout(() => resolve()))
    console.log(store.state, 'hhhhhhhh')
    return store.state.categories.some(category => category.id == params.uid)
  },
  // middleware: {'stats'},
  data() {
    return {
      uid: 0
    }
  },
  created() {
    this.uid = this.$route.params.uid
  }
}
</script>

<style>

</style>