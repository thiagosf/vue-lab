<template>
  <div class="posts">
    <ui-module-header title="Posts" icon="inbox"></ui-module-header>
    <transition
      :name="transitionName"
      :mode="transitionMode"
      v-on:enter="enter"
      >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { UiModuleHeader } from '../../Ui'
export default {
  title: 'Posts',
  name: 'post',
  components: { UiModuleHeader },
  computed: {
    ...mapGetters({
      transitionName: 'getTransitionName',
      transitionMode: 'getTransitionMode'
    })
  },
  methods: {
    enter (el) {
      this.upgradeDom()
    },
    upgradeDom () {
      window.componentHandler.upgradeDom()
    }
  }
}
</script>
