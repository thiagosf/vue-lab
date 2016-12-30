<template>
  <div class="register">
    <h1 class="title-with-icon">
      <i class="material-icons rounded-icon icon-48">assignment_ind</i>
      Register
    </h1>
    <form action="#" @submit.prevent="sendForm">
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-textfield-full" v-bind:class="{ 'is-invalid': name_error, 'is-dirty': !name_error && name !== null }">
        <input class="mdl-textfield__input" type="text" id="name" name="name" v-model="name">
        <label class="mdl-textfield__label" for="name">Nome</label>
      </div>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-textfield-full" v-bind:class="{ 'is-invalid': email_error, 'is-dirty': !email_error && email !== null }">
        <input class="mdl-textfield__input" type="email" id="email" name="email" v-model="email">
        <label class="mdl-textfield__label" for="email">Email</label>
      </div>
      <div class="submit-box">
        <button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
          <i class="material-icons">send</i>
          Enviar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import toast from '../helpers/toast'
import store from '../helpers/store'
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
        let random = Math.floor(Math.random() * messages.length)
        toast.show(messages[random], 'success')
        this.name_error = false
        store.add('name', this.name)
      } else {
        toast.show('Por favor, digite os dados completos', 'error')
        this.name_error = true
      }
    }
  },
  data () {
    return {
      name: null,
      email: null,
      name_error: false,
      email_error: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.ajax-result
  display: none
  margin-top: 20px
.ajax-result.active
  display: block
.ajax-result.success
  color: green
.ajax-result.error
  color: red
.register
  form
    background: linear-gradient(20deg, #ddd, #f7f7f7)
    padding: 30px
    border-radius: 2px
    @media (min-width: 480px)
      margin: 0 auto
      width: 400px
    .submit-box
      text-align: center
</style>
