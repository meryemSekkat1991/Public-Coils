<template lang="pug">
div(class="navbar mb-2 shadow-lg bg-gradient-to-b from-indigo-500 via-indigo-300 to-indigo-100 text-white")
  .flex-none(class='lg:flex')
    label.btn.btn-square.btn-ghost(:for='id')
      svg.inline-block.w-6.h-6.stroke-current(xmlns='http://www.w3.org/2000/svg' fill='none' viewbox='0 0 24 24')
        path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h16')
  .flex-1.px-2.mx-2(class='lg:flex')
    span.text-lg.font-bold.flex
      img.ml-1.w-12.h-6(src="https://i.ibb.co/m6QgTtM/logo-coils.png")
      span.ml-2.uppercase {{$t('coils.coils')}}
  LanguageSwitcher
  .user.relative(v-if="isAuth")
    .collapse.relative(tabindex='0')
      .collapse-title.text-xs.font-medium
        .cover(class="flex bg-indigo-400 rounded-full w-8 h-8  items-center justify-center hover:bg-transparent")
          Placeholder(:data="user.lastname")
      .collapse-content.fixed.top-20
        .label.text-sm {{user.lastname}}
    .tooltip(data-tip='logout' class="tooltip-bottom tooltip-info")
      a.btn.btn-ghost(@click="logout") [->
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component({
})
export default class Navbar extends Vue {
  @Prop({ default: 'drawer' }) id!: string;

  get user(): Record<string, unknown> | null {
    return this.$auth.user;
  }

  get isAuth(): boolean {
    return  this.$auth.loggedIn;
  }
  logout(): void {
    this.$auth.logout()
      .then(() => {
        this.$router.push("/")
      })
  }
}
</script>
<style lang="scss">
.collapse {
  .collapse-title {
    @apply p-0 w-12 h-12 flex items-center justify-center;
  }
  .collapse-content {
    @apply pb-0;
  }
}
</style>
