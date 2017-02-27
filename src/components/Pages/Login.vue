<template>
  <div class="login">
    <ui-title icon="account_circle">Login</ui-title>
    <form action="#" @submit.prevent="sendForm">
      <ui-field-group :invalid="username_error" :value="username">
        <ui-text name="username" v-model="username" :value="user.username" required></ui-text>
        <ui-label>Nome de usuário</ui-label>
      </ui-field-group>
      <ui-field-group :invalid="password_error" :value="password">
        <ui-text type="password" name="password" v-model="password" :value="user.password" required></ui-text>
        <ui-label>Senha</ui-label>
      </ui-field-group>
      <div class="submit-box">
        <ui-button with-icon="lock" colored raised :disabled="disabled">
          Entrar
        </ui-button>
      </div>
    </form>
  </div>
</template>

<style lang="sass" scoped>
.login
  max-width: 300px
  margin: 0 auto
  .submit-box
    text-align: center
  .mdl-textfield__input
    font-size: 36px
</style>

<script>
import { mapGetters } from 'vuex'
import toast from '../../helpers/toast'
import UiButton from '../Ui/UiButton'
import UiText from '../Ui/UiText'
import UiLabel from '../Ui/UiLabel'
import UiFieldGroup from '../Ui/UiFieldGroup'

export default {
  name: 'login',
  components: { UiButton, UiText, UiLabel, UiFieldGroup },
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  },
  methods: {
    sendForm (e) {
      toast.show('Entrando...', 'success')
      // let redirect = this.$auth.redirect()
      // let redirect = { from: { name: 'home' } }
      // this.$auth.login({
      //   body: {
      //     username: this.username,
      //     password: this.password
      //   },
      //   redirect: { name: redirect ? redirect.from.name : 'home' },
      //   success (response) {
      //     // console.log('success', response)
      //     this.login(response.body.data)
      //     toast.show(response.body.message, 'success')
      //     // this.$router.push({ name: 'home' })
      //     this.$router.push('/')
      //   },
      //   error (response) {
      //     // console.log('error', response)
      //     this.error = response.data
      //     toast.show(response.body.message, 'success')
      //   }
      // })
    },
    login (user) {
      this.$store.dispatch('auth', user)
    }
  },
  data () {
    return {
      username: null,
      password: null,
      username_error: false,
      password_error: false,
      disabled: false
    }
  }
}
</script>
