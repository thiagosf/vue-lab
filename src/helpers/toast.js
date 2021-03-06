window.addEventListener('load', () => {
  window.MaterialSnackbar.prototype.setMessage = function (message) {
    this.textElement_.textContent = message
  }
})

export default {
  show (message, type = 'success', timeout = 4000) {
    message = message.replace(/(<([^>]+)>)/ig, '')
    let snackbar = document.querySelector('#snackbar-message')
    if (snackbar.MaterialSnackbar) {
      if (snackbar.className.indexOf('mdl-snackbar--active') === -1) {
        snackbar.MaterialSnackbar.showSnackbar({ message, timeout })
      } else {
        snackbar.MaterialSnackbar.setMessage(message)
      }
    }
  }
}
