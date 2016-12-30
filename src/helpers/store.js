export default {
  data: {},
  listeners: [],
  connect (data) {
    this.data = data
    return this.get()
  },
  add (key, value) {
    this.data[key] = value
    this.notificate()
    return this.data
  },
  get (key = null) {
    if (key) {
      return this.data[key]
    }
    return this.data
  },
  remove (key) {
    delete this.data[key]
    this.notificate()
    return this.data
  },
  addListener (callback) {
    this.listeners.push(callback)
  },
  notificate () {
    this.listeners.map((callback) => {
      callback(this.data)
    })
  }
}
