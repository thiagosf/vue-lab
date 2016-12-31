<template>
  <label
    :class="cssClasses"
    >
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'ui-label',
  computed: {
    cssClasses () {
      return {
        'mdl-textfield__label': this.simple
      }
    }
  },
  props: {
    id: String,
    name: String,
    value: String,
    simple: { type: Boolean, default: true }
  }
}
</script>
