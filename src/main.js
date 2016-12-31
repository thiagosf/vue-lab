import 'material-design-lite/material.js'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Pages/Home'
import Register from './components/Pages/Register'
import About from './components/Pages/About'
import Table from './components/Pages/Table'
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

// Dados iniciais
const initialData = {
  name: null,
  email: null
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  data () {
    return {
      store: store.connect(initialData)
    }
  },
  router
})
