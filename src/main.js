import 'material-design-lite/material.js'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Home from './components/Pages/Home'
import Register from './components/Pages/Register'
import About from './components/Pages/About'
import Table from './components/Pages/Table'
import Login from './components/Pages/Login'
import store from './store'
import SimpleUi from './plugins/SimpleUi'
import auth from './helpers/auth'

Vue.use(VueRouter)
Vue.use(SimpleUi)
Vue.use(VueResource)

Vue.http.options.root = 'http://api.dev.azk.io'

const requireAuth = (to, from, next) => {
  if (!auth.loggedIn()) {
    next({
      name: 'login',
      query: { redirect: to.name }
    })
  } else {
    next()
  }
}

const router = new VueRouter({
  hashbang: false,
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      beforeEnter (to, from, next) {
        auth.logout()
        next('/')
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      beforeEnter: requireAuth
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      beforeEnter: requireAuth
    },
    {
      path: '/table',
      name: 'table',
      component: Table,
      beforeEnter: requireAuth
    }
  ]
})

router.afterEach((to, from) => {
  setTimeout(() => {
    window.componentHandler.upgradeDom()
  }, 600)
})

App.store = store
App.router = router
new Vue(App).$mount('#app')
