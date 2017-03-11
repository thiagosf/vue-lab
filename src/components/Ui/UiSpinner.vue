<template>
  <div :class="cssBoxClasses">
    <div :class="cssClasses"></div>
  </div>
</template>

<script>
import uiComponent from '../Mixins/uiComponent'
export default {
  name: 'ui-spinner',
  mixins: [uiComponent],
  computed: {
    cssClasses () {
      return {
        'mdl-spinner ': true,
        'mdl-js-spinner': true,
        'is-active': true
      }
    },
    cssBoxClasses () {
      return {
        'spinner-box ': true,
        'center ': this.center
      }
    }
  },
  props: {
    center: { type: Boolean, default: false }
  }
}
</script>
