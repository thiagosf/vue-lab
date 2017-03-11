<template>
  <textarea
    :class="cssClasses"
    :id="id"
    :name="name"
    :rows="rows"
    v-bind:value="value"
    v-on:input="updateValue($event.target.value)"
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
    }
  },
  props: {
    id: String,
    name: String,
    value: String,
    simple: { type: Boolean, default: true },
    rows: { type: Number, default: 5 }
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
