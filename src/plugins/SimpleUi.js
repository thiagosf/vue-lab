import UiIcon from '../components/Ui/UiIcon'

const SimpleUi = {
  version: '1.0.0',
  install: function (Vue, options) {
    Vue.component('ui-title', {
      template: '<h1 :class="cssClasses"><ui-icon v-if="icon" rounded size="48" :name="icon" /> <slot></slot></h1>',
      components: { UiIcon },
      computed: {
        cssClasses () {
          return {
            'main-title': true,
            'title-with-icon': this.icon
          }
        }
      },
      props: {
        icon: String
      }
    })
    Vue.component('ui-second-title', {
      template: '<h2 :class="cssClasses"><span><ui-icon v-if="icon" rounded size="48" :name="icon" /> <slot></slot></span></h2>',
      components: { UiIcon },
      computed: {
        cssClasses () {
          return {
            'second-title': true,
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
