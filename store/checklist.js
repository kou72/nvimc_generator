export const state = () => ({
  counter: 0,
  list: 'test'
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}

export const getters = {
  list(state) {
    return state.list
  }
}
