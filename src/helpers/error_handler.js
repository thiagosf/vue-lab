import toast from './toast'

export default (error) => {
  if (error.message) {
    toast.show(error.message, 'error')
  } else if (error.body) {
    toast.show(error.body, 'error')
  } else if (error.statusText) {
    toast.show(error.statusText, 'error')
  }
}
