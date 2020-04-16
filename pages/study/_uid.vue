<template>
  <div>
    uid{{uid}}
  </div>
</template>

<script>
import axios from 'axios'

export default {
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
    // const ip = await this.$axios.$get('http://xxx.com')
  },
  methods: {
    async fetchSomething() {
      const ip = await this.$axios.$get('http://xxx.com')
    }
  }
}
</script>

<style>

</style>