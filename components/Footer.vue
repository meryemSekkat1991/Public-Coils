<template lang="pug">
footer.p-4.footer.text-base-content.footer-center(class="bg-gradient-to-b from-indigo-500 via-indigo-300 to-indigo-200")
  div
    p Copyright &copy; 2021 - All right reserved by ACME Industries Ltd
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "Footer",
})
export default class Footer extends Vue {}
</script>
