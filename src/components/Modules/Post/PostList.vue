<template>
  <div class="post-list">
    <ui-floating-box>
      <router-link :to="{ name: 'new-post' }">
        <ui-button icon="add" type="button" primary fab big-icon></ui-button>
      </router-link>
    </ui-floating-box>
    <ui-grid :fields="fields" :records="posts" :actions="actions"></ui-grid>
  </div>
</template>

<script>
import { UiGrid, UiButton, UiFloatingBox } from '../../Ui'
import { mapGetters } from 'vuex'

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
      return [
        {
          icon: 'create',
          primary: true,
          handleClick (row) {
            self.$router.push({ name: 'edit-post', params: { id: row.id } })
          }
        },
        {
          icon: 'delete',
          danger: true,
          handleClick (row) {
            console.log(row)
          }
        }
      ]
    }
  },
  mounted () {
    this.$store.dispatch('getPosts')
  }
}
</script>
