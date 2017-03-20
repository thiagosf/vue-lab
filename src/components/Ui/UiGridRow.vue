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
  props: {
    selectable: false
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
      if (this.selectable) {
        this.selected = !this.selected
        this.$emit('selectRow')
      }
    },
    isSelected () {
      return this.selected
    }
  }
}
</script>
