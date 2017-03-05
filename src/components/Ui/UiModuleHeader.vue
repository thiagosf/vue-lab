<template>
  <div class="module-header">
    <ui-title :icon="icon">{{ title }}</ui-title>
  </div>
</template>

<script>
export default {
  name: 'ui-module-header',
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true }
  }
}
</script>
