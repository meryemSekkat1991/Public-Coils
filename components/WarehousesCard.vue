<template lang="pug">
.card
  .card-body.shadow-md.w-full.border.mb-5.rounded-lg.bg-white
    .flex.flex-grow.items-center
      .flex-none
        .cover.h-12.w-12.rounded-full.flex.justify-center.items-center.text-white.font-bold(class="bg-gradient-to-tr from-indigo-200 via-indigo-300 to-indigo-200 ")
          Placeholder(:data="warehouse.name")
      .flex-1.pr-5
        input.input.w-full(v-model="warehouse.name")
      .flex-none
        .card-action.place-self-end
          button.btn.btn-primary.mr-2(@click="save(warehouse.id)") Save
          button.btn.bg-red-600.text-white.border-red-100(class="hover:bg-red-700 hover:border-red-100" @click="deleteWarehouse(warehouse.id)") Delete
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component({
  name: "warehousesCard",
})
export default class warehousesCard extends Vue {
  @Prop() warehouse?: Record<string, unknown>;

  deleteWarehouse(id: number): void {
    this.$axios
      .delete(`/api/admin/warehouses/${id}`)
      .then(res => (
        console.log("done")
      ));
  }

  save(id: number): void {
    const source = this.$axios.CancelToken.source()
    this.$axios
      .$patch(
        `/api/admin/warehouses/${id}`,
        {
          id: this.warehouse?.id,
          name: this.warehouse?.name,},
        {
          cancelToken: source.token
        }
      )
    setTimeout(function () {
    }, 500)
  }
}
</script>
