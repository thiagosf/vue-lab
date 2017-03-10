<template>
  <div class="post-list">
    <router-link :to="{ name: 'new-post' }" class="floating-button">
      <ui-button icon="add" type="button" primary fab big-icon></ui-button>
    </router-link>
    <ui-grid :fields="fields" :records="posts" :actions="actions"></ui-grid>
  </div>
</template>

<script>
import { UiGrid, UiButton } from '../../Ui'
import { mapGetters } from 'vuex'

export default {
  name: 'post',
  title: 'Posts',
  components: { UiGrid, UiButton },
  computed: {
    ...mapGetters({
      posts: 'getPosts',
      fields: 'getPostFields'
    }),
    actions () {
      return [
        {
          icon: 'create',
          primary: true,
          handleClick: function (rows) {
            console.log(rows)
          }
        },
        {
          icon: 'delete',
          danger: true,
          handleClick: function (rows) {
            console.log(rows)
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
