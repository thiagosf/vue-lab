import Vue from 'vue'
import eventManager from '../../helpers/event_manager'
import * as types from './mutation-types'

const state = {
  ready: false,
  user: {
    id: null,
    username: null,
    password: null,
    token: null
  }
}

const getters = {
  getUser: (state) => {
    return state.user
  },
  getUserReady: (state) => {
    return state.ready
  },
  loggedIn: (state) => {
    return !!state.user.id
  }
}

const actions = {
  auth: ({ commit }, data) => {
    return Vue.http.post('auth/login', data)
      .then((response) => {
        if (response.body.success) {
          let user = response.body.data
          commit(types.LOGIN, user)
          eventManager.emit('login', user)
          return user
        } else {
          throw new Error(response.body.message)
        }
      })
  },
  checkLogin: ({ commit }, callback) => {
    let token = Vue.cookie.get('token')
    if (token) {
      let body = { token: token }
      Vue.http.post('auth/token', body)
        .then((response) => {
          if (response.body.success) {
            let user = response.body.data
            commit(types.SUCCESS_TOKEN, user)
            eventManager.emit('login', user)
          } else {
            commit(types.INVALID_TOKEN)
          }
          callback()
        })
        .catch((error) => {
          commit(types.INVALID_TOKEN)
          callback(error)
        })
    } else {
      commit(types.INVALID_TOKEN)
    }
  },
  logout: ({ commit }) => {
    Vue.cookie.delete('token')
    commit(types.LOGOUT)
  }
}

const mutations = {
  [types.LOGIN] (state, user) {
    Object.assign(state.user, user)
  },
  [types.SUCCESS_TOKEN] (state, user) {
    Object.assign(state.user, user)
    state.ready = true
  },
  [types.INVALID_TOKEN] (state, user) {
    state.ready = true
  },
  [types.LOGOUT] (state) {
    state.user = {
      id: null,
      username: null,
      password: null,
      token: null
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
