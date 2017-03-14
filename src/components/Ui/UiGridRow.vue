<template>
  <tr :class="selectedRowClass" @click="selectRow">
    <slot></slot>
  </tr>
</template>

<script>
export default {
  name: 'ui-grid-row',
  data () {
    return {
      selected: false
    }
  },
  computed: {
    selectedRowClass () {
      return {
        'is-selected': this.selected
      }
    }
  },
  methods: {
    selectRow () {
      this.selected = !this.selected
      this.$emit('selectRow')
    },
    isSelected () {
      return this.selected
    }
  }
}
</script>
