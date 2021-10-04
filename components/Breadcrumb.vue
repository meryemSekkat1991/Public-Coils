<template lang="pug">
.flex.items-start.flex-col.space-y-2
  .breadcrumbs.text-sm(aria-label="breadcrumb" v-if="getBreadcrumbs.length")
    ul
      li(v-for="(item, i) in getBreadcrumbs" :key="i")
        nuxt-link(v-if="item.href" :to="item.href") {{ item.text }}
        a(v-else) {{ item.text }}
</template>

<script lang="ts">
import { Component, Vue, Watch, Mutation } from "nuxt-property-decorator";

@Component({
  name: "Breadcrumb"
})
export default class Breadcrumb extends Vue {
  breadcrumbs: Record<string, unknown>[] = [];

  @Mutation("set") setBreadcrumbs!: (arg0: Record<string, unknown>[]) => void;

  get getBreadcrumbs(): Record<string, unknown>[] {
    return [
      {
        text: "Home",
        href: "/",
      },
      ...this.$store.state.breadcrumbs,
    ];
  }

  created(): void {
    this.updateRoute();
  }

  updateRoute(): void {
    this.breadcrumbs = [];
    let localBreads = this.$route.path.split('/');
    let array = localBreads.slice(1).map(function (value) {
      return {
        text: value,
        href: value,
      }
    })
    array.forEach(
      (breadcrumb: Record<string, unknown>): void => {
        this.breadcrumbs.push(breadcrumb);
      }
    );
    this.setBreadcrumbs(this.breadcrumbs);
  }

  @Watch("$route")
  routeChanged(): void {
    console.log("route changed");
    this.updateRoute();
  }
}
</script>
