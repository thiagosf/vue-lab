<template>
  <div class="new-post">
    <ui-second-title>{{$t('modules.posts.new')}}</ui-second-title>
    <post-form type="create"></post-form>
  </div>
</template>

<script>
import PostForm from './PostForm'

export default {
  name: 'new-post',
  title: 'New Post',
  breadcrumb: 'New',
  components: { PostForm }
}
</script>
