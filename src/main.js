import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home'
import Register from './components/Register'
import About from './components/About'
import Table from './components/Table'
import store from './helpers/store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/register', component: Register },
    { path: '/about', component: About },
    { path: '/table', component: Table }
  ]
})

// Recarrega componentes MDL cada rota carregada
router.afterEach((to, from) => {
  setTimeout(() => {
    window.componentHandler.upgradeDom()
  }, 600)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  data () {
    return {
      store: store.connect({
        name: null
      })
    }
  },
  router
})
