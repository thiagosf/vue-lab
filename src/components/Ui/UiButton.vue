<template>
  <button :type="type" :class="cssClasses" :disabled="disabled">
    <i class="material-icons" v-if="isWithIconSpecified" >{{ withIcon }}</i>
    <slot>
      <i class="material-icons" v-if="isIconSpecified" >{{ icon }}</i>
    </slot>
    <ui-spinner singleColor v-if="spinner"></ui-spinner>
  </button>
</template>

<script>
import { uiComponent } from '../Mixins'
import UiSpinner from './UiSpinner'
export default {
  name: 'ui-button',
  mixins: [uiComponent],
  components: { UiSpinner },
  computed: {
    cssClasses () {
      return {
        'mdl-button': true,
        'mdl-button--icon': this.icon && !this.bigIcon,
        'mdl-button--accent': this.accent,
        'mdl-button--primary': this.primary,
        'mdl-button--mini-fab': this.miniFab,
        'mdl-button--fab': this.fab || this.miniFab,
        'mdl-button--raised': this.raised,
        'mdl-button--colored': this.colored,
        'mdl-js-button': this.js,
        'mdl-js-ripple-effect': this.ripple,
        'button-with-spinner': this.spinner
      }
    },
    isIconSpecified () {
      return this.icon && typeof this.icon === 'string'
    },
    isWithIconSpecified () {
      return this.withIcon
    }
  },
  props: {
    type: { type: String, default: 'submit' },
    disabled: Boolean,
    icon: [String, Boolean],
    bigIcon: Boolean,
    withIcon: String,
    accent: Boolean,
    primary: Boolean,
    miniFab: Boolean,
    fab: Boolean,
    raised: Boolean,
    colored: Boolean,
    js: { type: Boolean, default: true },
    ripple: { type: Boolean, default: true },
    spinner: { type: Boolean, default: false }
  }
}
</script>
