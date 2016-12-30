<template>
  <div id="app" class="app">
    <main-layout>
      <main-header></main-header>
      <main-nav></main-nav>
      <main-content>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
        <hr>
        <h3>Store</h3>
        <pre v-for="item in $root.store">{{ item }}</pre>
        <div id="snackbar-message" class="mdl-js-snackbar mdl-snackbar mdl-snackbar-large">
          <div class="mdl-snackbar__text"></div>
          <button class="mdl-snackbar__action" type="button"></button>
        </div>
      </main-content>
    </main-layout>
  </div>
</template>

<style lang="sass"> @import 'styles'; </style>

<script>
import MainLayout from './components/MDL/MainLayout'
import MainHeader from './components/MDL/MainHeader'
import MainNav from './components/MDL/MainNav'
import MainContent from './components/MDL/MainContent'

export default {
  name: 'app',
  components: {
    MainLayout,
    MainHeader,
    MainNav,
    MainContent
  }
}
</script>
