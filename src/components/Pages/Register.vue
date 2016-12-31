<template>
  <div class="register">
    <h1 class="title-with-icon">
      <ui-icon rounded size="48" name="assignment_ind" />
      Register
    </h1>
    <form action="#" @submit.prevent="sendForm">
      <ui-field-group :invalid="name_error" :value="name">
        <ui-text name="name" v-model="name" :value="$root.store.name"></ui-text>
        <ui-label>Nome</ui-label>
      </ui-field-group>
      <ui-field-group :invalid="email_error" :value="email">
        <ui-text type="email" name="email" v-model="email" :value="$root.store.email"></ui-text>
        <ui-label>E-mail</ui-label>
      </ui-field-group>
      <div class="submit-box">
        <ui-button with-icon="send" colored raised :disabled="disabled">Enviar</ui-button>
      </div>
    </form>
    <ui-button icon="add" type="button" fab big-icon @click.prevent.native="notificate"></ui-button>
  </div>
</template>

<script>
import toast from '../../helpers/toast'
import store from '../../helpers/store'
import UiButton from '../Ui/UiButton'
import UiText from '../Ui/UiText'
import UiLabel from '../Ui/UiLabel'
import UiFieldGroup from '../Ui/UiFieldGroup'
import UiIcon from '../Ui/UiIcon'

export default {
  name: 'register',
  components: { UiButton, UiText, UiLabel, UiFieldGroup, UiIcon },
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
        this.disabled = true
        store.add('name', this.name)
        store.add('email', this.email)
        setTimeout(() => { this.disabled = false }, 2000)
      } else {
        toast.show('Por favor, digite os dados completos', 'error')
        this.name_error = true
      }
    },
    notificate (e) {
      toast.show('Hello world!')
    }
  },
  data () {
    return {
      name: null,
      email: null,
      name_error: false,
      email_error: false,
      disabled: false
    }
  }
}
</script>

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
