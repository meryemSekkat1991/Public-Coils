<template lang="pug">
.home-page.text-white
  .hero.min-h-screen.bg-indigo-200(class="bg-gradient-to-b from-indigo-500 via-indigo-300 to-indigo-200")
    .flex-col.hero-content(class='lg:flex-row-reverse')
      img.max-w-lg.rounded-lg.shadow-2xl.w-96.h-84(src='https://i.ibb.co/KXF1Qzb/coilsciel.jpg')
      div
        h1.mb-5.text-5xl.font-bold  Coils Web Admin Side
        p.mb-5
          | Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
        nuxt-link(:to="localePath('/warehouse')").btn.btn-primary Get Started
  .bottom-part.topDiagonal.bg-indigo-100
  .coils-exemples.flex.justify-center.bg-indigo-100
    .avatar.mx-8(v-for="image in images" )
      .mb-8.w-48.h-48.mask.mask-hexagon
        img(:src="image")
</template>

<script lang="ts">
  import {Vue, Component, Watch} from "nuxt-property-decorator";

@Component({
  auth: "guest",
  name: "Home",
  layout: "empty",
})
export default class Home extends Vue {
  images = [
    "https://i.ibb.co/v1xFhfP/coils1.jpg",
    "https://i.ibb.co/mv59TjT/coils2.jpg",
    "https://i.ibb.co/jWTrzbq/coils3.jpg",
    "https://i.ibb.co/xsVDTFc/coils.jpg"
  ]
}
</script>
<style lang="scss">
  .home-page {
    .bottom-part {
      height: 81px;
      margin-top: -118px;
      padding: 16px 16px 100px 16px;
    }
    .topDiagonal {
      -webkit-clip-path: polygon(0 80px, 100% 0, 100% 100%, 0 100%);
      clip-path: polygon(0 80px, 100% 0, 100% 100%, 0 100%);
    }
  }

</style>
