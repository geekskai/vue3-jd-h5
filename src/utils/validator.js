import Vue from 'vue'
import { extend, ValidationProvider, ValidationObserver } from 'vee-validate'
import { required, email, regex } from 'vee-validate/dist/rules'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

// Add the required rule
extend('required', {
  ...required,
  message: '必填！'
})
extend('email', {
  ...email,
  message: '邮箱格式错误！'
})
extend('regex', {
  ...regex,
  message: '输入格式有误！'
})
