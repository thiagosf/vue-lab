import 'material-design-lite/material.js'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueCookie from 'vue-cookie'

import i18n from './helpers/i18n'
import App from './App'
import * as AllPages from './components/Pages'
import * as Post from './components/Modules/Post'
import store from './store'
import SimpleUi from './plugins/SimpleUi'
import Breadcrumbs from './plugins/Breadcrumbs'
import DocumentTitle from './plugins/DocumentTitle'

Vue.use(VueRouter)
Vue.use(SimpleUi)
Vue.use(VueResource)
Vue.use(VueCookie)
Vue.use(Breadcrumbs)
Vue.use(DocumentTitle, {
  mainTitle: 'vue-lab',
  separator: ` ${String.fromCharCode('9749')} `
})

i18n.install()

let apiRoot = 'https://api.vue.thiagosf.net'
if (process.env.NODE_ENV === 'development') {
  apiRoot = 'http://api.dev.azk.io'
}
Vue.http.options.root = apiRoot

const router = new VueRouter({
  hashbang: false,
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'home',
      component: AllPages.Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: AllPages.Login
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
      component: AllPages.Register,
      meta: { requiresAuth: true }
    },
    {
      path: '/about',
      name: 'about',
      component: AllPages.About,
      meta: { requiresAuth: true }
    },
    {
      path: '/table',
      name: 'table',
      component: AllPages.Table,
      meta: { requiresAuth: true }
    },
    {
      path: '/posts',
      component: Post.Post,
      meta: { requiresAuth: true, alias: 'posts' },
      children: [{
        path: '',
        name: 'posts',
        component: Post.PostList
      }, {
        path: 'new',
        name: 'new-post',
        component: Post.NewPost
      }, {
        path: ':id/edit',
        name: 'edit-post',
        component: Post.EditPost
      }]
    },
    {
      path: '*',
      component: AllPages.PageNotFound,
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
