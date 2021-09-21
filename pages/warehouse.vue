<template lang="pug">
.warehouses
  h1.text-xl.font-bold.mb-5 Warehouses
  WarehousesCard(v-for="warehouse in warehouses" :warehouse="warehouse" :key="warehouse.id")
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({
  name: "warehouses",
  layout: "default",
})


export default class home extends Vue {
  warehouses = [];
  async fetch () {
    this.$axios
      .get('/api/admin/warehouses')
      .then(res => (
        this.warehouses = res.data
      ));
  }
}
</script>
