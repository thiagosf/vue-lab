<template>
  <header class="mdl-layout__header mdl-layout__header--transparent">
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">
        <router-link  to="/">Vue</router-link>
      </span>
      <span v-if="$root.store.name" class="welcome-user">
        Bem-vindo {{ $root.store.name }}
      </span>
      <div class="mdl-layout-spacer"></div>
      <nav class="mdl-navigation mdl-cell--hide-phone">
        <router-link class="mdl-navigation__link" v-for="item in nav" :to="item.link">{{ item.label }}</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
import nav from '../../helpers/nav'
export default {
  name: 'main-header',
  data () {
    return {
      nav: nav
    }
  }
}
</script>
