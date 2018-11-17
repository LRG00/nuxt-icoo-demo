import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules,
  actions: {
    // nuxtServerInit({ commit }, { req }) {
    //   if (req.session.user) {
    //     commit('city', req.session.user)
    //   }
    // } // 应用：不用二次登陆
  }
  // strict: process.env.NODE_ENV !== 'production'
})

export default store
