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
      selectedsLabel="Remover selecionados"
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
          console.log(row)
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
    this.$store.dispatch('getPosts', this.page)
  },
  updated () {
    if (this.page !== this.postPage) {
      this.page = this.postPage
      this.$store.dispatch('getPosts', this.page)
    }
  },
  methods: {
    removeSelecteds (selecteds) {
      this.$bus.$emit('openDialogAction', {
        text: 'Essa ação é irreversível. Quer continuar?',
        onAccept: () => {
          this.$store.dispatch('deletePosts', selecteds)
        }
      })
    }
  }
}
</script>
