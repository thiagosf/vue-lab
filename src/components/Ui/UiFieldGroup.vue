<template>
  <div :class="cssClasses">
    <slot></slot>
  </div>
</template>

<script>
import uiComponent from '../Mixins/uiComponent'
export default {
  name: 'ui-field-group',
  mixins: [uiComponent],
  computed: {
    cssClasses () {
      return {
        'mdl-textfield': this.simple,
        'mdl-js-textfield': this.js,
        'mdl-textfield--floating-label': this.floating,
        'mdl-textfield-full': this.full,
        'is-invalid': this.invalid,
        'is-dirty': !this.invalid && this.value !== null
      }
    }
  },
  props: {
    simple: { type: Boolean, default: true },
    js: { type: Boolean, default: true },
    floating: { type: Boolean, default: true },
    full: { type: Boolean, default: true },
    invalid: Boolean,
    value: String
  }
}
</script>
