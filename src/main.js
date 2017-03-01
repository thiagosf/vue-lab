import 'material-design-lite/material.js'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueCookie from 'vue-cookie'

import App from './App'
import Home from './components/Pages/Home'
import Register from './components/Pages/Register'
import About from './components/Pages/About'
import Table from './components/Pages/Table'
import Login from './components/Pages/Login'
import PageNotFound from './components/Pages/PageNotFound'
import store from './store'
import SimpleUi from './plugins/SimpleUi'

Vue.use(VueRouter)
Vue.use(SimpleUi)
Vue.use(VueResource)
Vue.use(VueCookie)

Vue.http.options.root = 'http://api.dev.azk.io'

const router = new VueRouter({
  hashbang: false,
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true }
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
        store.dispatch('logout')
        next({ name: 'login' })
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: { requiresAuth: true }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { requiresAuth: true }
    },
    {
      path: '/table',
      name: 'table',
      component: Table,
      meta: { requiresAuth: true }
    },
    {
      path: '*',
      component: PageNotFound,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name: 'login',
        query: { redirect: to.name }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

Vue.router = router
App.store = store
App.router = Vue.router
new Vue(App).$mount('#app')
