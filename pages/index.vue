<template lang="pug">
.page
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({
  auth: "guest",
  name: "Home",
  layout: "default",
})
export default class Home extends Vue {
}
</script>
