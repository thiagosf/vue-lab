<template>
  <i :class="cssClasses">
    {{ name }}
  </i>
</template>

<script>
export default {
  name: 'ui-icon',
  computed: {
    cssClasses () {
      let options = {
        'material-icons': true,
        'rounded-icon': this.rounded
      }
      if (this.size) options[`icon-${this.size}`] = true
      return options
    }
  },
  props: {
    rounded: Boolean,
    size: String,
    name: { type: String, required: true }
  }
}
</script>
