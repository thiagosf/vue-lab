<template>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Vue</span>
    <nav class="mdl-navigation">
      <router-link @click.native="hideNav" class="mdl-navigation__link" v-for="item in nav" :to="item.link">{{ item.label }}</router-link>
      <hr>
      <a href="#" :class="{ 'mdl-navigation__link': true, 'language-item-mobile': true, 'active': item.active }" v-if="locales" v-for="item in locales" @click.prevent="setLocale(item.locale)">
        {{ item.name }}
      </a>
    </nav>
    <div aria-expanded="false" role="button" tabindex="0" class="mdl-layout__drawer-button">
      <i class="material-icons">more_horiz</i>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import nav from '../../helpers/nav'

export default {
  name: 'main-nav',
  data () {
    return {
      nav: nav
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser',
      currentLocale: 'getCurrentLocale',
      locales: 'getLocales'
    })
  },
  methods: {
    hideNav (e) {
      const event = new window.Event('click')
      document.querySelector('.mdl-layout__drawer-button').dispatchEvent(event)
    },
    setLocale (locale) {
      this.$store.dispatch('setLocale', locale)
      this.hideNav()
    }
  }
}
</script>
