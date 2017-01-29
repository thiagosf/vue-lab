import UiIcon from '../components/Ui/UiIcon'

const SimpleUi = {
  install: function (Vue, options) {
    Vue.component('ui-title', {
      template: '<h1 :class="cssClasses"><ui-icon v-if="icon" rounded size="48" :name="icon" /> <slot></slot></h1>',
      components: { UiIcon },
      computed: {
        cssClasses () {
          return {
            'title-with-icon': this.icon
          }
        }
      },
      props: {
        icon: String
      }
    })
  }
}

export default SimpleUi
