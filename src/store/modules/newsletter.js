import * as types from './mutation-types'

const state = {
  newsletter: {
    name: null,
    email: null
  }
}

const getters = {
  getNewsletter: (state) => {
    return {
      name: state.newsletter.name,
      email: state.newsletter.email
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
    state.newsletter.name = name
    state.newsletter.email = email
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
