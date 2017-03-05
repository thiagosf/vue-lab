function plugin (Vue, options = {}) {
  Object.defineProperties(Vue.prototype, {
    $breadcrumbs: {
      get: function () {
        let crumbs = []
        crumbs = [{ breadcrumb: 'Dashboard', name: 'home' }].concat(crumbs)
        for (let i in this.$route.matched) {
          let crumb = null
          let item = this.$route.matched[i]
          let name = item.name
          if (!name && item.meta.alias) name = item.meta.alias
          if (item.components && item.components.default) {
            if (item.components.default.breadcrumb) {
              crumb = {
                breadcrumb: item.components.default.breadcrumb,
                name: name
              }
            } else if (item.components.default.title) {
              crumb = {
                breadcrumb: item.components.default.title,
                name: name
              }
            }
          }
          if (crumb) {
            if (!crumbs.some((e) => e.breadcrumb === crumb.breadcrumb)) {
              crumbs.push(crumb)
            }
          }
        }
        if (crumbs.length) {
          crumbs[crumbs.length - 1].active = true
        }
        return crumbs
      }
    }
  })

  Vue.component('breadcrumbs', {
    template: `
      <nav class="breadcrumbs" v-if="$breadcrumbs.length">
        <ul>
          <li v-for="crumb in $breadcrumbs" :class="{ active: crumb.active }" v-bind:key="crumb.breadcrumb">
            <router-link v-if="!crumb.active" :to="{ name: crumb.name }">{{ crumb.breadcrumb }}</router-link>
            <span v-if="crumb.active">{{ crumb.breadcrumb }}</span>
          </li>
        </ul>
      </nav>`
  })
}

plugin.version = '1.0.0'

export default plugin
