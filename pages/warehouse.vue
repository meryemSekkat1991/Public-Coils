<template lang="pug">
.warehouses
  h1.text-xl.font-bold.mb-5 {{$t('coils.warehouses')}}
  WarehousesCard(v-for="warehouse in warehouses" :warehouse="warehouse" :key="warehouse.id")
</template>

<script lang="ts">
import {Vue, Component, Watch} from "nuxt-property-decorator";

@Component({
  name: "warehouses",
  layout: "default",
})


export default class home extends Vue {
  warehouses = [];
  async fetch () {
    await this.$axios
      .get('/api/admin/warehouses')
      .then(res => (
        this.warehouses = res.data
      ));
  }
}
</script>
