<template>
  <div :class="cssBoxClasses">
    <div :class="cssClasses"></div>
  </div>
</template>

<script>
import { uiComponent } from '../Mixins'
export default {
  name: 'ui-spinner',
  mixins: [uiComponent],
  computed: {
    cssClasses () {
      return {
        'mdl-spinner ': true,
        'mdl-js-spinner': true,
        'is-active': true,
        'mdl-spinner--single-color': this.singleColor
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
    center: { type: Boolean, default: false },
    singleColor: { type: Boolean, default: false }
  }
}
</script>
