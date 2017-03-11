<template>
  <div class="post-form">
    <form @submit.prevent="sendForm">
      <ui-field-group :help="$t('modules.posts.help.created_at')">
        <ui-text name="created_at" v-model="created_at" required></ui-text>
        <ui-label>{{$t('modules.posts.fields.created_at')}}</ui-label>
      </ui-field-group>
      <ui-field-group :help="$t('modules.posts.help.title')">
        <ui-text name="title" v-model="title" required></ui-text>
        <ui-label>{{$t('modules.posts.fields.title')}}</ui-label>
      </ui-field-group>
      <ui-field-group :help="$t('modules.posts.help.body')">
        <ui-text-area name="body" v-model="body" required></ui-text-area>
        <ui-label>{{$t('modules.posts.fields.body')}}</ui-label>
      </ui-field-group>
      <div class="submit-box">
        <ui-button :disabled="sending" spinner type="submit" raised primary>
          {{$t('actions.save')}}
        </ui-button>
      </div>
    </form>
  </div>
</template>

<script>
import moment from 'moment'
import { UiFieldGroup, UiLabel, UiText, UiTextArea, UiButton } from '../../Ui'
import { toast } from '../../../helpers'

export default {
  name: 'post-form',
  components: { UiFieldGroup, UiLabel, UiText, UiTextArea, UiButton },
  props: {
    record: Object,
    type: { type: String, default: 'create' }
  },
  data () {
    return {
      title: null,
      created_at: moment().format('DD/MM/YYYY'),
      body: null,
      sending: false
    }
  },
  methods: {
    sendForm () {
      if (this.isValid()) {
        this.sending = true
        this.storeDispatch().then((result) => {
          if (result.success) {
            toast.show(result.message)
            this.$router.push({ name: 'posts' })
          } else {
            toast.show(result.message, 'error')
          }
        })
      } else {
        this.sending = false
      }
    },
    isValid () {
      return true
    },
    storeDispatch () {
      if (this.type === 'create') {
        return this.$store.dispatch('createPost', this.getSendData())
      }
      return this.$store.dispatch('updatePost', this.record.id, this.getSendData())
    },
    getSendData () {
      return {
        title: this.title,
        created_at: this.created_at,
        body: this.body
      }
    }
  },
  created () {
    if (this.record) {
      for (let i in this.record) {
        this[i] = this.record[i]
      }
    }
  }
}
</script>
