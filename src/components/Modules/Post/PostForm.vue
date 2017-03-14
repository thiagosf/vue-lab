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
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--6-col">
          <ui-field-group :help="$t('modules.posts.help.body')">
            <ui-text-area name="body" v-model="body" required></ui-text-area>
            <ui-label>{{$t('modules.posts.fields.body')}}</ui-label>
          </ui-field-group>
        </div>
        <div class="mdl-cell mdl-cell--6-col">
          <small>Preview</small>
          <div class="markdown-preview" v-html="compiledMarkdown"></div>
        </div>
      </div>
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
import marked from 'marked'
import { UiFieldGroup, UiLabel, UiText, UiTextArea, UiButton } from '../../Ui'
import { toast } from '../../../helpers'
import converter from './converter'

export default {
  name: 'post-form',
  components: { UiFieldGroup, UiLabel, UiText, UiTextArea, UiButton },
  props: {
    record: Object,
    type: { type: String, default: 'create' },
    converter: Function
  },
  data () {
    return {
      title: null,
      created_at: moment().format('DD/MM/YYYY'),
      body: null,
      sending: false
    }
  },
  computed: {
    compiledMarkdown () {
      if (this.body) {
        return marked(this.body, { sanitize: true })
      }
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
        this[i] = converter(i, this.record[i])
      }
    }
  }
}
</script>
