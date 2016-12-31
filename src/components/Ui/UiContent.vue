<template>
  <main class="mdl-layout__content">
    <section class="mdl-layout__tab-panel is-active" id="scroll-tab-1">
      <div class="page-content">
        <slot></slot>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'main-content'
}
</script>
