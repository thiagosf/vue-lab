<template>
  <input
    :class="cssClasses"
    :id="id"
    :name="name"
    :value="value"
    v-bind:value="value"
    v-on:input="updateValue($event.target.value)"
    />
</template>

<script>
import uiComponent from '../Mixins/uiComponent'
export default {
  name: 'ui-text',
  mixins: [uiComponent],
  computed: {
    cssClasses () {
      return {
        'mdl-textfield__input': this.simple
      }
    }
  },
  props: {
    id: String,
    name: String,
    value: String,
    simple: { type: Boolean, default: true }
  },
  created () {
    this.updateValue(this.value)
  },
  methods: {
    updateValue (value) {
      this.$emit('input', value)
    }
  }
}
</script>
