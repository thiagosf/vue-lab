<template>
  <div id="app" class="app">
    <div v-if="ready">
      <ui-layout :class="{ 'login-page': isLoginRoute() }">
        <ui-header></ui-header>
        <ui-nav></ui-nav>
        <ui-content>
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
          <div id="snackbar-message" class="mdl-js-snackbar mdl-snackbar mdl-snackbar-large">
            <div class="mdl-snackbar__text"></div>
            <button class="mdl-snackbar__action" type="button"></button>
          </div>
        </ui-content>
      </ui-layout>
    </div>
    <div class="spinner-center" v-if="!ready">
      <div class="mdl-spinner mdl-js-spinner is-active"></div>
    </div>
  </div>
</template>

<style lang="sass">
@import '~material-design-lite/src/color-definitions'
@import './sass/variables'
@import '~material-design-lite/src/material-design-lite-grid.scss'
@import '~material-design-lite/src/material-design-lite.scss'
@import 'styles'
.spinner-center
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
</style>

<script>
import { mapGetters } from 'vuex'
import UiLayout from './components/Ui/UiLayout'
import UiHeader from './components/Ui/UiHeader'
import UiNav from './components/Ui/UiNav'
import UiContent from './components/Ui/UiContent'

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
      ready: 'getUserReady'
    })
  },
  created () {
    this.$on('login', (user) => {
      this.$router.push({
        name: this.$route.query.redirect || 'home'
      })
    })
  },
  methods: {
    isLoginRoute () {
      return this.$route.name === 'login'
    },
    checkLogin () {
      this.$store.dispatch('checkLogin')
    }
  },
  mounted () {
    if (!this.loggedIn) {
      this.checkLogin()
    }
  },
  updated () {
    setTimeout(() => {
      window.componentHandler.upgradeDom()
    }, 500)
  }
}
</script>
