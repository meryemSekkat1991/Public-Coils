<template lang="pug">
.drawer
  input#drawer.drawer-toggle(type='checkbox')
  .drawer-content.overflow-hidden.min-h-screen.bg-indigo-50
    Navbar
    client-only
      Nuxt.container.mx-auto.py-10.px-4
  MobileMenu
  Footer
</template>
