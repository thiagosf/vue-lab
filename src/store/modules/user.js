import * as types from './mutation-types'

const state = {
  ready: false,
  user: {
    id: null,
    username: null,
    password: null
  }
}

const getters = {
  getUser: (state) => {
    return state.user
  },
  getUserReady: (state) => {
    return state.ready
  }
}

const actions = {
  auth: ({ commit }, user) => {
    commit(types.LOGIN, user)
  },
  checkLogin: ({ commit }) => {
    setTimeout(() => {
      commit(types.CHECK_LOGIN)
    }, 1000)
  }
}

const mutations = {
  [types.LOGIN] (state, user) {
    Object.assign(state.user, user)
  },
  [types.CHECK_LOGIN] (state) {
    state.ready = true
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
