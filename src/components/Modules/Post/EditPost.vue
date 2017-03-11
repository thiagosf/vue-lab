<template>
  <div class="edit-post">
    <ui-second-title>{{$t('modules.posts.edit')}}</ui-second-title>
    <post-form v-if="loadedPost" :record="post" type="update"></post-form>
    <ui-spinner center v-if="!loadedPost"></ui-spinner>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PostForm from './PostForm'
import UiSpinner from '../../Ui/UiSpinner'

export default {
  name: 'edit-post',
  title: 'Edit Post',
  components: { PostForm, UiSpinner },
  computed: {
    ...mapGetters({
      post: 'getPost'
    }),
    loadedPost () {
      return this.post.id
    }
  },
  mounted () {
    if (this.$route.params.id) {
      this.$store.dispatch('getPost', this.$route.params.id)
    }
  }
}
</script>
