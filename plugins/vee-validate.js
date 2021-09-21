import { extend, configure } from 'vee-validate'
import { email, required } from 'vee-validate/dist/rules'

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})

extend('required', {
  ...required,
  message: 'This field is required'
})

extend('email', {
  ...email,
  message: 'Invalid email'
})

extend('password', {
  params: ['target'],
  validate (value, { target }) {
    return value === target
  },
  message: 'Password confirmation does not match'
})

extend('strong_password', {
  validate (value) {
    if (!value.match(/(?=.{8,})/)) {
      return 'The password must be eight characters or longer'
    }
    if (!value.match(/(?=.*[a-z])/)) {
      return 'The password must contain at least 1 lowercase alphabetical character'
    }
    if (!value.match(/(?=.*[A-Z])/)) {
      return 'The password must contain at least 1 uppercase alphabetical character'
    }
    if (!value.match(/(?=.*[0-9])/)) {
      return 'The password must contain at least 1 numeric character'
    }
    return true
  }
})
