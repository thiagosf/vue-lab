<template>
  <div class="post-list">
    <ui-floating-box>
      <router-link :to="{ name: 'new-post' }">
        <ui-button icon="add" type="button" primary fab big-icon></ui-button>
      </router-link>
    </ui-floating-box>
    <ui-grid :fields="fields" :records="posts" :actions="actions" :converter="converter"></ui-grid>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { UiGrid, UiButton, UiFloatingBox } from '../../Ui'
import converter from './converter'

export default {
  name: 'post',
  title: 'Posts',
  components: { UiGrid, UiButton, UiFloatingBox },
  computed: {
    ...mapGetters({
      posts: 'getPosts',
      fields: 'getPostFields'
    }),
    actions () {
      const self = this
      return [{
        icon: 'create',
        primary: true,
        handleClick (row) {
          self.$router.push({ name: 'edit-post', params: { id: row.id } })
        }
      }, {
        icon: 'delete',
        danger: true,
        handleClick (row) {
          console.log(row)
        }
      }]
    }
  },
  data () {
    return {
      converter
    }
  },
  created () {
    this.$store.dispatch('getPosts')
  }
}
</script>
