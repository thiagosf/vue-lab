export default {
  show (message, type = 'error') {
    message = message.replace(/(<([^>]+)>)/ig, '')
    let snackbar = document.querySelector('#snackbar-message')
    if (snackbar.className.indexOf('mdl-snackbar--active') === -1) {
      snackbar.MaterialSnackbar.showSnackbar({ message })
    }
  }
}
