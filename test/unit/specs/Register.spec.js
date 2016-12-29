import Vue from 'vue'
import Register from 'src/components/Register'

describe('Register.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Register)
    })
    expect(vm.$el.querySelector('h1').textContent)
      .to.contain('Register')
  })
})
