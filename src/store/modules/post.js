import Vue from 'vue'
import * as types from './mutation-types'

const state = {
  ready: false,
  posts: [],
  paging: {},
  post: {},
  fields: [{
    label: 'ID',
    field: 'id'
  }, {
    label: 'Título',
    field: 'title'
  }, {
    label: 'Data de publicação',
    field: 'created_at'
  }]
}

const getters = {
  getPosts: (state) => {
    return state.posts
  },
  getPost: (state) => {
    return state.post
  },
  getPostReady: (state) => {
    return state.ready
  },
  getPostFields: (state) => {
    return state.fields
  }
}

const actions = {
  getPosts: ({ commit }) => {
    commit(types.SET_POST_READY, false)
    return Vue.http.get('posts')
      .then((response) => {
        if (response.body.success) {
          commit(types.SET_POSTS, response.body)
        } else {
          throw new Error(response.body.message)
        }
      })
  },
  getPost: ({ commit }, id) => {
    commit(types.SET_POST_READY, false)
    return Vue.http.get(`posts/${id}`)
      .then((response) => {
        if (response.body.success) {
          commit(types.SET_POST, response.body.data)
        } else {
          throw new Error(response.body.message)
        }
      })
  },
  createPost: ({ commit }, post) => {
    commit(types.SET_POST_READY, false)
    return Vue.http.post(`posts`, post)
      .then((response) => {
        if (response.body.success) {
          commit(types.CREATED_POST, response.body.data)
        } else {
          throw new Error(response.body.message)
        }
      })
  },
  updatePost: ({ commit }, id, post) => {
    commit(types.SET_POST_READY, false)
    return Vue.http.post(`posts/${id}`, post)
      .then((response) => {
        if (response.body.success) {
          commit(types.UPDATED_POST, response.body.data)
        } else {
          throw new Error(response.body.message)
        }
      })
  },
  deletePost: ({ commit }, id) => {
    commit(types.SET_POST_READY, false)
    return Vue.http.delete(`posts/${id}`)
      .then((response) => {
        if (response.body.success) {
          commit(types.DELETED_POST)
        } else {
          throw new Error(response.body.message)
        }
      })
  }
}

const mutations = {
  [types.SET_POST_READY] (state, ready) {
    state.ready = ready
  },
  [types.SET_POSTS] (state, response) {
    state.posts = response.data
    state.paging = response.paging
    state.ready = true
  },
  [types.SET_POST] (state, post) {
    state.post = post
    state.ready = true
  },
  [types.CREATED_POST] (state, post) {
    state.post = post
    state.ready = true
  },
  [types.UPDATED_POST] (state, post) {
    state.post = post
    state.ready = true
  },
  [types.DELETED_POST] (state) {
    state.ready = true
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
