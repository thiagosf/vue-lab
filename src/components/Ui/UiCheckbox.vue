<template>
  <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
    <input type="checkbox" :name="name" :id="id" class="mdl-checkbox__input" :checked="checked" :value="value">
    <span class="mdl-checkbox__label" v-if="label">{{label}}</span>
  </label>
</template>

<script>
import { uiComponent } from '../Mixins'
export default {
  name: 'ui-checkbox',
  mixins: [uiComponent],
  computed: {
    cssClasses () {
      return {
        'mdl-checkbox__input': true
      }
    }
  },
  props: {
    id: String,
    name: String,
    value: String,
    checked: { type: Boolean, default: false },
    label: String
  },
  created () {
    this.updateValue(this.value)
  },
  methods: {
    updateValue (value) {
      this.$emit('input', value)
    },
    check () {
      this.$el.MaterialCheckbox.check()
    },
    uncheck () {
      this.$el.MaterialCheckbox.uncheck()
    },
    isChecked () {
      return this.$el.querySelector('input[type=checkbox]').checked
    }
  }
}
</script>
