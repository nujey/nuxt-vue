export const state = () => ({
  categories: [{ id: 1, name: '4444' }, { id: 2, name: '5555' }]
})

export const test = {
  actions: {
    async getIP({ commit }) {
      const ip = await this.$axios.$get('http://xxx.com')
      commit('SET_IP', ip)
    }
  }
}
