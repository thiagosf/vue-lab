<template>
  <div class="not-found">
    <ui-title icon="account_circle">Not found</ui-title>
    <p>Ops, parece que essa página não existe!</p>
    <router-link :to="{ name: 'home' }">Ir para página inicial</router-link>
  </div>
</template>

<script>
export default {
  name: 'not-found',
  title: 'Not-found'
}
</script>
