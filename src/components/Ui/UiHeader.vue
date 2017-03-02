<template>
  <header class="mdl-layout__header mdl-layout__header--transparent">
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">
        <router-link  to="/">Vue</router-link>
      </span>
      <span v-if="loggedIn" class="welcome-user">
        <span v-html="$t('welcome', { name: user.username })"></span> (<router-link :to="{ name: 'logout' }">sair</router-link>)
      </span>
      <div class="mdl-layout-spacer"></div>
      <nav class="mdl-navigation mdl-cell--hide-phone">
        <router-link class="mdl-navigation__link" v-for="item in nav" :to="item.link">{{ item.label }}</router-link>
      </nav>
      <a id="languages-menu" class="mdl-navigation__link mdl-cell--hide-phone" href="#" v-on:click.prevent>
        <ui-icon name="language"></ui-icon>
        {{currentLocale.name}}
      </a>
      <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect mdl-cell--hide-phone" for="languages-menu">
        <li :class="{ 'mdl-menu__item': true, 'active': item.active }" v-if="locales" v-for="item in locales">
          <span v-on:click.prevent="setLocale(item.locale)"> {{ item.name }}</span>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import nav from '../../helpers/nav'
import UiIcon from '../../components/Ui/UiIcon'

export default {
  name: 'main-header',
  data () {
    return {
      nav: nav
    }
  },
  components: {
    UiIcon
  },
  computed: {
    ...mapGetters({
      loggedIn: 'loggedIn',
      user: 'getUser',
      currentLocale: 'getCurrentLocale',
      locales: 'getLocales'
    })
  },
  methods: {
    setLocale (locale) {
      this.$store.dispatch('setLocale', locale)
    }
  }
}
</script>
