<template>
  <div class="post-list">
    <ui-floating-box>
      <router-link :to="{ name: 'new-post' }">
        <ui-button icon="add" type="button" primary fab big-icon></ui-button>
      </router-link>
    </ui-floating-box>
    <ui-grid
      name="post"
      :fields="fields"
      :records="posts"
      :actions="actions"
      :converter="converter"
      :paging="postPaging"
      v-on:selectedsAction="removeSelecteds"
      ></ui-grid>
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
      fields: 'getPostFields',
      postPage: 'getPostPage',
      postPaging: 'getPostPaging'
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
          self.$bus.$emit('openDialog', {
            text: `<p>Essa ação é irreversível. Quer continuar?</p><p>Item a ser excluído: <strong>${row.title}</strong></p>`,
            onAccept: (closeDialog) => {
              self.$store.dispatch('deletePost', row.id).then((result) => {
                if (result.success) {
                  self.loadPosts(self.page)
                }
                closeDialog()
              })
            }
          })
        }
      }]
    }
  },
  data () {
    return {
      page: 1,
      converter
    }
  },
  created () {
    this.loadPosts()
  },
  updated () {
    if (this.page !== this.postPage) {
      this.page = this.postPage
      this.loadPosts(this.page)
    }
  },
  methods: {
    loadPosts (page = 1) {
      this.$store.dispatch('getPosts', page)
    },
    removeSelecteds (selecteds) {
      let items = []
      for (let i in this.posts) {
        let post = this.posts[i]
        if (selecteds.indexOf(parseInt(post.id)) > -1) {
          items.push(`<li>${post.title}</li>`)
        }
      }
      this.$bus.$emit('openDialog', {
        text: `<p>Essa ação é irreversível. Quer continuar?</p><p>Item(s) a ser(em) excluído(s):</p><ul>${items.join('')}</ul>`,
        onAccept: (closeDialog) => {
          this.$store.dispatch('deletePosts', selecteds).then((result) => {
            if (result.success) {
              this.loadPosts(this.page)
            }
            closeDialog()
          })
        }
      })
    }
  }
}
</script>
