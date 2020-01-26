import Login from '../src/components/Login.vue';
import { mount } from '@vue/test-utils';
import Vue from 'vue'

describe('Login', () => {
  const wrapper = mount(Login)

  it('contains form', () => {
    expect(wrapper.contains('form')).toBe(true)
  })

  it('renders error', async () => {
    const input = wrapper.find('input')
    const form = wrapper.find('form')
    input.setValue('not test')
    await Vue.nextTick
    form.trigger('submit')
    await Vue.nextTick
    expect(wrapper.contains('.error')).toBe(true)
  })

})