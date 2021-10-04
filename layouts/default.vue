<template lang="pug">
.drawer
  input#drawer.drawer-toggle(type='checkbox')
  .drawer-content.overflow-hidden.min-h-screen.bg-indigo-50
    Navbar
    .container.mx-auto.py-10.px-4
      Breadcrumb
      Nuxt
  MobileMenu
  Footer
</template>
<script lang="ts">
  import { Component, Vue } from "nuxt-property-decorator";
  import Breadcrumb from "../components/Breadcrumb.vue";

  @Component({
    name: "Default",
    components: {Breadcrumb},
  })
  export default class Default extends Vue {}
</script>
