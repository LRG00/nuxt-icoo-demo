import * as types from '../mutation-types'

const state = {
  list: ['a', 'b', 'k']
}

// const getters = {
//   count: state => state.count
// }

const mutations = {
  [types.ADD] (state, text) {
    state.list.push(text)
  }
}

const actions = {
  add ({ commit }, text) {
    commit(types.ADD, text)
  }
}

export default {
  // namespaced: true,
  state,
  mutations,
  actions
  // getters
}
