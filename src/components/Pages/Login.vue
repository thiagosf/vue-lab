<template>
  <div class="login">
    <div v-if="ready">
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
      <div class="tip">
        Dica <code>admin:123</code>
      </div>
    </div>
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
.tip
  margin-top: 20px
  font-size: 12px
  text-align: center
  &::before
    content: "..."
    display: block
    margin-bottom: 5px
    color: #ccc
    font-size: 48px
    line-height: 1
    font-family: serif
  code
    display: inline-block
    padding: 0 5px
    border-radius: 2px
    background: #eee
    margin-left: 5px
</style>

<script>
import { mapGetters } from 'vuex'
import toast from '../../helpers/toast'
import errorHandler from '../../helpers/error_handler'
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
      this.disabled = true
      this.$store.dispatch('auth', {
        username: this.username,
        password: this.password
      }).then((user) => {
        toast.show(`Bem vindo ${user.username}!`, 'success')
        this.$cookie.set('token', user.token)
        this.disabled = false
      }).catch((error) => {
        this.disabled = false
        errorHandler(error)
      })
    }
  },
  data () {
    return {
      ready: false,
      username: null,
      password: null,
      username_error: false,
      password_error: false,
      disabled: false
    }
  },
  mounted () {
    this.ready = false
    if (this.user.id) {
      this.$router.push({ name: 'home' })
    } else {
      this.ready = true
    }
  }
}
</script>
