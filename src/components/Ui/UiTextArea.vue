<template>
  <textarea
    :class="cssClasses"
    :id="id"
    :name="name"
    :rows="rows"
    v-bind:value="value"
    v-on:input="updateValue($event.target.value)"
    v-bind:style="styles"
    >
    {{value}}
  </textarea>
</template>

<script>
import { uiComponent } from '../Mixins'
export default {
  name: 'ui-text-area',
  mixins: [uiComponent],
  computed: {
    cssClasses () {
      return {
        'mdl-textfield__input': this.simple
      }
    },
    styles () {
      return {
        resize: this.resize ? 'both' : 'none'
      }
    }
  },
  props: {
    id: String,
    name: String,
    value: String,
    simple: { type: Boolean, default: true },
    rows: { type: Number, default: 5 },
    resize: { type: Boolean, default: false }
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
