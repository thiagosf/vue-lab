<template>
  <div class="login">
    <div v-if="ready">
      <ui-title icon="account_circle">{{ $t('pages.login.title') }}</ui-title>
      <form action="#" @submit.prevent="sendForm">
        <ui-field-group :invalid="username_error" :value="username">
          <ui-text name="username" v-model="username" :value="user.username" required></ui-text>
          <ui-label>{{ $t('models.user.username') }}</ui-label>
        </ui-field-group>
        <ui-field-group :invalid="password_error" :value="password">
          <ui-text type="password" name="password" v-model="password" :value="user.password" required></ui-text>
          <ui-label>{{ $t('models.user.password') }}</ui-label>
        </ui-field-group>
        <div class="submit-box">
          <ui-button with-icon="lock" colored raised :disabled="disabled">
            {{ $t('actions.enter') }}
          </ui-button>
        </div>
      </form>
      <div class="languages-box">
        <a href="#" :class="{ 'active': item.active }" v-if="locales" v-for="item in locales" @click.prevent="setLocale(item.locale)"> {{ item.name }}</a>
      </div>
      <div class="tip" v-html="$t('pages.login.tip')"></div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.login
  max-width: 350px
  margin: 0 auto
  .submit-box
    text-align: center
  .mdl-textfield__input
    font-size: 36px
  .languages-box
    text-align: center
    margin-top: 40px
    a
      display: inline-block
      margin: 0 10px
      &.active
        color: #ccc
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
      user: 'getUser',
      currentLocale: 'getCurrentLocale',
      locales: 'getLocales'
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
    },
    setLocale (locale) {
      this.$store.dispatch('setLocale', locale)
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
