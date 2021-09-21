<template lang="pug">
div(class="navbar mb-2 shadow-lg bg-gradient-to-b from-indigo-500 via-indigo-300 to-indigo-100 text-white")
  .flex-none(class='lg:flex')
    label.btn.btn-square.btn-ghost(:for='id')
      svg.inline-block.w-6.h-6.stroke-current(xmlns='http://www.w3.org/2000/svg' fill='none' viewbox='0 0 24 24')
        path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h16')
  .flex-1.px-2.mx-2(class='lg:flex')
    span.text-lg.font-bold
      | Coils
  .flex-none
    .avatar.mr-2
      .rounded-full.w-10.h-10.m-1
        img(src='https://i.pravatar.cc/500?img=32')
    button.btn.bg-indigo-300.text-white.font-bold.border-indigo-100(@click="logout" class="hover:bg-indigo-400 hover:border-indigo-100") logout
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component({})
export default class Navbar extends Vue {
  @Prop({ default: 'drawer' }) id!: string;

  logout() {
    this.$auth.logout()
      .then(() => {
        this.$router.push("/")
      })
  }
}
</script>
