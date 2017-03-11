<template>
  <div :class="cssClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ui-floating-box',
  computed: {
    cssClasses () {
      return {
        'floating-button': true,
        'hidden-on-transition': this.hiddenOnTransition,
        'right': this.right,
        'left': this.left
      }
    }
  },
  props: {
    hiddenOnTransition: { type: Boolean, default: true },
    right: { type: Boolean, default: true },
    left: { type: Boolean, default: false }
  }
}
</script>
