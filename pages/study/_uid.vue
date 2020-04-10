<template>
  <div>
    uid{{uid}}
  </div>
</template>

<script>
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
  }
}
</script>

<style>

</style>