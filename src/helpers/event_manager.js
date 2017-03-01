import Vue from 'vue'

export default {
  emit (name, params) {
    Vue.router.app.$emit(name, params)
  }
}
