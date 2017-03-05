const DocumentTitle = {
  version: '1.0.0',
  install: function (Vue, options) {
    Vue.prototype.$refreshDocumentTitle = function () {
      let item = this.$route.matched[this.$route.matched.length - 1]
      if (
        item &&
        item.components &&
        item.components.default &&
        item.components.default.title
      ) {
        let titles = []
        titles.push(item.components.default.title)
        if (options.mainTitle) {
          titles.push(options.mainTitle)
        }
        this.$setDocumentTitle(titles)
      }
    }
    Vue.prototype.$setDocumentTitle = function (title) {
      document.title = Array.isArray(title) ? title.join(options.separator) : title
    }
  }
}

export default DocumentTitle
