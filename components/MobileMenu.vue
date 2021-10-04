<template lang="pug">
.drawer-side
  label.drawer-overlay(:for='sidebar')
  ul.p-4.overflow-y-auto.menu.w-80.shadow-lg.text-white(class="bg-gradient-to-bl from-indigo-800 via-indigo-700 to-indigo-800")
    span.text-lg.font-bold.flex.mb-4
      img.ml-1.w-12.h-6(src="https://i.ibb.co/m6QgTtM/logo-coils.png")
      span.ml-2.uppercase  {{$t('coils.coils')}}
    li(class="mb-2")
      nuxt-link(:to="localePath('/')") {{$t('coils.home')}}
    li(class="mb-2")
      nuxt-link(:to="localePath('/warehouse')") {{$t('coils.warehouses')}}
    li(class="mb-2")
      nuxt-link(:to="localePath('/products')") {{$t('coils.products')}}
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component({})
export default class MobileMenu extends Vue {
  @Prop({ default: 'drawer' }) sidebar!: string;
}
</script>

