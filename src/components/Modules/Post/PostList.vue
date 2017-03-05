<template>
  <div class="post-list">
    <router-link :to="{ name: 'new-post' }">
      <ui-button icon="add" type="button" primary fab big-icon></ui-button>
    </router-link>
    <ui-grid :records="getPosts()" :actions="getActions()"></ui-grid>
  </div>
</template>

<script>
import { UiGrid, UiButton } from '../../Ui'
export default {
  name: 'post',
  title: 'Posts',
  components: { UiGrid, UiButton },
  methods: {
    getPosts () {
      return [{
        id: 1,
        title: 'lalal'
      }]
    },
    getActions () {
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
  }
}
</script>
