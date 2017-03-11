import Vue from 'vue'
import * as types from './mutation-types'

const state = {
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
  getPosts (state) {
    return state.posts
  },
  getPost (state) {
    return state.post
  },
  getPostFields (state) {
    return state.fields
  }
}

const actions = {
  getPosts ({ commit }) {
    return Vue.http.get('posts')
      .then((response) => {
        if (response.body.success) {
          commit(types.SET_POSTS, response.body)
          return response.body
        } else {
          throw new Error(response.body.message)
        }
      })
  },
  getPost ({ commit }, id) {
    commit(types.CLEAN_POST)
    return Vue.http.get(`posts/${id}`)
      .then((response) => {
        if (response.body.success) {
          commit(types.SET_POST, response.body.data)
          return response.body
        } else {
          throw new Error(response.body.message)
        }
      })
  },
  createPost ({ commit }, post) {
    return Vue.http.post(`posts`, post)
      .then((response) => {
        if (response.body.success) {
          commit(types.CREATED_POST, response.body.data)
          return response.body
        } else {
          throw new Error(response.body.message)
        }
      })
  },
  updatePost ({ commit }, id, post) {
    return Vue.http.post(`posts/${id}/update`, post)
      .then((response) => {
        if (response.body.success) {
          commit(types.UPDATED_POST, response.body.data)
          return response.body
        } else {
          throw new Error(response.body.message)
        }
      })
  },
  deletePost ({ commit }, id) {
    return Vue.http.delete(`posts/${id}`)
      .then((response) => {
        if (response.body.success) {
          return response.body
        } else {
          throw new Error(response.body.message)
        }
      })
  }
}

const mutations = {
  [types.SET_POSTS] (state, response) {
    state.posts = response.data
    state.paging = response.paging
  },
  [types.SET_POST] (state, post) {
    state.post = post
  },
  [types.CREATED_POST] (state, post) {
    state.post = post
  },
  [types.UPDATED_POST] (state, post) {
    state.post = post
  },
  [types.CLEAN_POST] (state) {
    state.post = {}
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
