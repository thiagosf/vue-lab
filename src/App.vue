<template>
  <div id="app" class="app">
    <div v-if="ready">
      <ui-layout :class="{ 'login-page': isLoginRoute() }">
        <ui-header></ui-header>
        <ui-nav></ui-nav>
        <ui-content>
          <breadcrumbs></breadcrumbs>
          <transition
            :name="transitionName"
            :mode="transitionMode"
            v-on:enter="$defaultEnterTransition"
            >
            <router-view></router-view>
          </transition>
          <div id="snackbar-message" class="mdl-js-snackbar mdl-snackbar mdl-snackbar-large">
            <div class="mdl-snackbar__text"></div>
            <button class="mdl-snackbar__action" type="button"></button>
          </div>
        </ui-content>
      </ui-layout>
    </div>
  </div>
</template>

<style lang="sass">
@import 'sass/styles'
</style>

<script>
import { mapGetters } from 'vuex'
import { UiLayout, UiHeader, UiNav, UiContent } from './components/Ui'

export default {
  name: 'app',
  components: {
    UiLayout,
    UiHeader,
    UiNav,
    UiContent
  },
  computed: {
    ...mapGetters({
      loggedIn: 'loggedIn',
      ready: 'getUserReady',
      transitionName: 'getTransitionName',
      transitionMode: 'getTransitionMode'
    })
  },
  mounted () {
    if (!this.loggedIn) {
      this.checkLogin()
    }
  },
  updated () {
    this.$refreshDocumentTitle()
    this.$upgradeDom()
  },
  methods: {
    isLoginRoute () {
      return this.$route.name === 'login'
    },
    checkLogin () {
      this.$store.dispatch('checkLogin')
    }
  }
}
</script>
