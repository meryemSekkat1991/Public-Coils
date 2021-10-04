<template lang="pug">
.home-page
</template>

<script lang="ts">
  import {Vue, Component, Watch} from "nuxt-property-decorator";

@Component({
  auth: "guest",
  name: "Home",
  layout: "default",
})
export default class Home extends Vue {
}
</script>
<style lang="scss">
  .home-page {
    .part {
      height: 81px;
      margin-top: -81px;
      background: white;
      padding: 16px 16px 100px 16px;
    }
    .topDiagonal {
      -webkit-clip-path: polygon(0 80px, 100% 0, 100% 100%, 0 100%);
      clip-path: polygon(0 80px, 100% 0, 100% 100%, 0 100%);
    }
  }
</style>
