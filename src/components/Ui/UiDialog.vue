<template>
  <dialog class="mdl-dialog">
    <h4 class="mdl-dialog__title" v-if="title">{{title}}</h4>
    <div class="mdl-dialog__content" v-if="text" v-html="text" />
    <div class="mdl-dialog__actions">
      <ui-button raised primary v-if="onAccept" @click.native="accept">{{acceptText}}</ui-button>
      <ui-button @click.native="close">{{cancelText}}</ui-button>
    </div>
  </dialog>
</template>

<script>
import dialogPolyfill from 'dialog-polyfill'
import UiButton from './UiButton'
import { uiComponent } from '../Mixins'
export default {
  name: 'ui-dialog',
  mixins: [uiComponent],
  components: { UiButton },
  computed: {
    cssClasses () {
      return {
        'mdl-button': true
      }
    }
  },
  data () {
    return {
      title: 'Confirmação',
      text: null,
      dialog: null,
      onAccept: null,
      acceptText: 'Sim',
      cancelText: 'Cancelar'
    }
  },
  mounted () {
    this.dialog = document.querySelector('dialog')
    if (!this.dialog.showModal) {
      dialogPolyfill.registerDialog(this.dialog)
    }
  },
  methods: {
    open (config) {
      this.setConfig(config)
      this.dialog.showModal()
    },
    close () {
      this.dialog.close()
    },
    setConfig (config) {
      for (let i in config) {
        this[i] = config[i]
      }
    },
    accept () {
      if (typeof this.onAccept === 'function') {
        this.onAccept()
      }
      this.close()
    }
  }
}
</script>
