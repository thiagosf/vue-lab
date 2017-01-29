import Vue from 'vue'
import Vuex from 'vuex'
import newsletter from './modules/newsletter'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: [
    newsletter
  ]
})
