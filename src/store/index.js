import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import newsletter from './modules/newsletter'
import notification from './modules/notification'
import i18n from './modules/i18n'
import transition from './modules/transition'
import nav from './modules/nav'
import post from './modules/post'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: [
    user,
    newsletter,
    notification,
    i18n,
    transition,
    nav,
    post
  ]
})
