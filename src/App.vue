<template>
  <div id="app" class="app">
    <ui-layout>
      <ui-header></ui-header>
      <ui-nav></ui-nav>
      <ui-content>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
        <hr>
        <h3>Store</h3>
        <ul class="demo-list-icon mdl-list">
          <li class="mdl-list__item"  v-for="item in newsletter" v-if="item">
            <span class="mdl-list__item-primary-content">
              <i class="material-icons mdl-list__item-icon">check</i>
              {{ item }}
            </span>
          </li>
        </ul>
        <div id="snackbar-message" class="mdl-js-snackbar mdl-snackbar mdl-snackbar-large">
          <div class="mdl-snackbar__text"></div>
          <button class="mdl-snackbar__action" type="button"></button>
        </div>
      </ui-content>
    </ui-layout>
  </div>
</template>

<style lang="sass">
@import '~material-design-lite/src/color-definitions'
@import './sass/variables'
@import '~material-design-lite/src/material-design-lite-grid.scss'
@import '~material-design-lite/src/material-design-lite.scss'
@import 'styles'
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
      newsletter: 'getNewsletter'
    })
  }
}
</script>
