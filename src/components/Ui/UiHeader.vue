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
        <router-link class="mdl-navigation__link" v-for="item in nav" :to="{ name: item.name }">{{ item.label }}</router-link>
      </nav>
      <a id="languages-menu" class="mdl-navigation__link mdl-cell--hide-phone" href="#" @click.prevent>
        <ui-icon name="language"></ui-icon>
        {{currentLocale.name}}
      </a>
      <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect mdl-cell--hide-phone" for="languages-menu">
        <li :class="{ 'mdl-menu__item': true, 'active': item.active }" v-if="locales" v-for="item in locales">
          <span @click.prevent="setLocale(item.locale)"> {{ item.name }}</span>
        </li>
      </ul>
      <a id="transition-names" class="mdl-navigation__link mdl-cell--hide-phone" href="#" @click.prevent>
        <ui-icon name="build"></ui-icon>
        {{transitionName}}
      </a>
      <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect mdl-cell--hide-phone" for="transition-names">
        <li :class="{ 'mdl-menu__item': true, 'active': item.active }" v-if="transitionNames" v-for="item in transitionNames" @click.prevent="setTransitionName(item)">
          {{ item }}
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import UiIcon from '../../components/Ui/UiIcon'

export default {
  name: 'main-header',
  components: {
    UiIcon
  },
  computed: {
    ...mapGetters({
      loggedIn: 'loggedIn',
      user: 'getUser',
      currentLocale: 'getCurrentLocale',
      locales: 'getLocales',
      transitionName: 'getTransitionName',
      transitionNames: 'getTransitionNames',
      nav: 'getNav'
    })
  },
  methods: {
    setLocale (locale) {
      this.$store.dispatch('setLocale', locale)
    },
    setTransitionName (name) {
      this.$store.dispatch('setTransitionName', name)
    }
  }
}
</script>
