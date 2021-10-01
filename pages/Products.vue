<template lang="pug">
.products
  table.table.table-hover.w-full
    thead
      tr
        th b_800
        th cnt
        th code
        th grade
        th health_state
        th id
        th info
        th perte
        th ref
        th reference
        th sc
        th state
        th th
        th warehouse
        th warehouse_id
        th weight_brut: 0
        th weight_net: 1105
        th width
    tbody
      tr(v-for='(item, index) in products' :key="'item-' + index" v-bind:class="{'active': index == 2}" class="hover")
        th {{item.b_800}}
        th {{item.cnt}}
        th {{item.code}}
        th {{item.grade}}
        th {{item.health_state}}
        th {{item.id}}
        th {{item.info}}
        th {{item.perte}}
        th {{item.ref}}
        th {{item.reference}}
        th {{item.sc}}
        th {{item.state}}
        th {{item.th}}
        th {{item.warehouse}}
        th {{item.warehouse_id}}
        th {{item.weight_brut}}
        th {{item.weight_net}}
        th {{item.width}}

</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "Products",
  layout: "default",
})

export default class Products extends Vue {
  products = [];
  async fetch (): Promise<void> {
    await this.$axios
      .get('/api/admin/slitters')
      .then(res => (
        this.products = res.data.data
      ));
  }
}
</script>

<style lang="scss">

</style>
