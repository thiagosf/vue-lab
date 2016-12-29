<template>
  <div class="register">
    <h1>
      <i class="material-icons rounded-icon icon-48">account_balance</i>
      Register
    </h1>
    <form action="#" id="register" @submit.prevent="sendForm">
      <div :class="name_box">
        <input class="mdl-textfield__input" type="text" id="name" name="name" v-model="name">
        <label class="mdl-textfield__label" for="name">Nome</label>
      </div>
      <div :class="email_box">
        <input class="mdl-textfield__input" type="email" id="email" name="email" v-model="email">
        <label class="mdl-textfield__label" for="email">Email</label>
      </div>
      <div class="submit-box">
        <button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
          <i class="material-icons">send</i>
          Enviar
        </button>
      </div>
      <div :class="ajax_class" v-html="result"></div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'register',
  methods: {
    sendForm (e) {
      if (this.name) {
        let messages = [
          `Obrigado! <strong>${this.name}</strong>`,
          `Você é demais <strong>${this.name}</strong>!`,
          `<strong>${this.name}</strong>, agrademos muito`,
          `<strong>${this.name}</strong> até breve!`
        ]
        let random = Math.floor(Math.random() * (messages.length - 1))
        this.ajax_class = 'ajax-result active success'
        this.result = messages[random]
      } else {
        this.ajax_class = 'ajax-result active error'
        this.result = `Por favor, digite os dados completos`
        this.name_box = 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-invalid'
      }
    }
  },
  data () {
    return {
      name: null,
      email: null,
      ajax_class: 'ajax-result',
      result: null,
      name_box: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label',
      email_box: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ajax-result { display: none; margin-top: 20px; }
.ajax-result.active { display: block; }
.ajax-result.success { color: green; }
.ajax-result.error { color: red; }
</style>
