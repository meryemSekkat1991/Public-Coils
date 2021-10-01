<template lang="pug">
.flex.items-start.flex-col.space-y-2
  .breadcrumbs.text-sm
    ul
      li
        a Home
      li
        a Documents
      li Add Document
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
import { RouteRecord } from "vue-router";

@Component({
  name: "Breadcrumb"
})
export default class Breadcrumb extends Vue {
  breadcrumbs: Record<string, unknown>[] = [];
  updateRoute(): void {
    this.breadcrumbs = [];
    this.$route.matched.forEach((matched: RouteRecord): void => {
      if (matched.meta.breadcrumb) {
        matched.meta.breadcrumb.forEach(
          (breadcrumb: Record<string, unknown>): void => {
            this.breadcrumbs.push(breadcrumb);
          }
        );
      }
    });
  }
  @Watch("$route")
  routeChanged(): void {
    this.updateRoute();
  }
}
</script>
