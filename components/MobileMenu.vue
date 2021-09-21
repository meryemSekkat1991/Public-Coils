<template lang="pug">
.drawer-side
  label.drawer-overlay(:for='sidebar')
  ul.p-4.overflow-y-auto.menu.w-80.shadow-lg.text-white(class="bg-gradient-to-bl from-indigo-100 via-indigo-300 to-indigo-500")
    li(class="mb-2")
      nuxt-link(to="/") Home
    li(class="mb-2")
      nuxt-link(to="/warehouse") Warehouses
    li(class="mb-2")
      nuxt-link(to="/products") Products
    li(class="mb-2")
      nuxt-link(to="/services") Services
    li(class="mb-2")
      nuxt-link(to="/profiles") Profiles
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component({})
export default class MobileMenu extends Vue {
  @Prop({ default: 'drawer' }) sidebar!: string;
}
</script>

