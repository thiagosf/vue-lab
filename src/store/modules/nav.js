const state = {
  nav: [{
    label: 'Register',
    name: 'register'
  }, {
    label: 'About',
    name: 'about'
  }, {
    label: 'Table',
    name: 'table'
  }, {
    label: 'Posts',
    name: 'posts'
  }]
}

const getters = {
  getNav: (state) => {
    return state.nav
  }
}

export default {
  state,
  getters
}
