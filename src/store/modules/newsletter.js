import * as types from './mutation-types'

const state = {
  name: null,
  email: null
}

const getters = {
  getNewsletter: (state) => {
    return {
      name: state.name,
      email: state.email
    }
  }
}

const actions = {
  sendNewsletter: ({ commit }, { name, email }) => {
    commit(types.SEND_NEWSLETTER, { name, email })
  }
}

const mutations = {
  [types.SEND_NEWSLETTER] (state, { name, email }) {
    state.name = name
    state.email = email
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
