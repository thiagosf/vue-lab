<template>
  <div :class="cssClasses">
    <slot></slot>
    <span v-if="help" class="mdl-textfield__error">{{ help }}</span>
  </div>
</template>

<script>
import { uiComponent } from '../Mixins'
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
    value: String,
    help: String
  }
}
</script>
