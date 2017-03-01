import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import newsletter from './modules/newsletter'
import notification from './modules/notification'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: [
    user,
    newsletter,
    notification
  ]
})
