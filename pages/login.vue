<template lang="pug" >
.login
  .hero.min-h-screen.text-neutral-content.bg-gradient-to-r.from-black.via-indigo-800.to-black
    .flex-col.justify-center.hero-content.w-full(class="md:w-4/6")
      .text-center(class='lg:text-left')
        h1.mb-14.text-3xl.font-bold.max-w-lg.text-center(class="md:text-5xl") Sign to coils Admin Side
      .card.flex-shrink-0.w-full.min-w-sm.shadow-2xl.bg-base-100
        ValidationObserver( v-slot="{ handleSubmit }" tag="div")
          form(@submit.prevent="handleSubmit(login)")
            .card-body
              .form-control
                label.label
                  span.label-text Email
                input.input.input-bordered( v-model="form.email" placeholder='Email Address')
              .form-control
                label.label
                  span.label-text Password
                input.input.input-bordered(type='password', v-model="form.password" placeholder='Enter Password' autocomplete="current-password" minlength='6', maxlength='64')
                label.label
                  a.label-text-alt.link.link-hover(href='#') Forgot password?
              .form-control.mt-6
                button.btn.btn-primary(type='submit') Sign in
</template>

<script lang="ts">
import {Component, mixins} from "nuxt-property-decorator";
import { ValidationObserver, ValidationProvider } from 'vee-validate'

@Component({
  auth: 'guest',
  layout: 'empty',
  components: {
    ValidationObserver, ValidationProvider
  }
})
export default class LoginPage extends mixins() {
  form = {
    email:'',
    password: ''
  };

  head () {
    return {
      bodyAttrs: {
        class: 'bg-login'
      }
    }
  }

  login() {
    this.$nuxt.$loading.start()
    this.$auth.loginWith('local',  { data: this.form } )
      .then(() => {
        this.$router.push("/")
      })
      .catch((error) => {
      }).finally(()=>{
      this.$nuxt.$loading.finish()
    })
  }
}
</script>
