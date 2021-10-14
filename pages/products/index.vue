<template lang="pug">
.products
  .flex
    .form-control.flex-1.mr-2
      label.label
        span.label-text.font-bold Search By name
      .flex.space-x-2.mb-4
        input.w-full.input.input-primary.input-bordered(type='text' placeholder='Search' v-model="params.q" @input="createQuery")
    .form-control
        label.label
          span.label-text.font-bold Search By State
        select.select.select-bordered.w-full.max-w-xs.w-96(v-model="state" @input="createQuery")
          option(disabled='disabled' selected='selected') All
          option draft
          option validated
          option archived

  table.table.table-hover.w-full
    thead
      tr
        th id
        th b_800
        th code
        th grade
        th health_state
        th perte
        th ref
        th reference
        th sc
        th state
        th th
        th warehouse
        th warehouseId
        th brut
        th net
        th width
    tbody
      tr(v-for='(item, index) in products' :key="'item-' + index" class="hover")
        th {{item.id}}
        th {{item.b_800}}
        th {{item.code}}
        th {{item.grade}}
        th {{item.health_state}}
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
  .flex.justify-center.my-4
    Pagination(:meta="pagination" classes="btn-md bg-indigo-600 border-none hover:bg-indigo-900" @page-changed="pageChanged")
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
import { isEmpty, set, toSafeInteger } from "lodash";

@Component({
  layout: "default",
  watch: {
    '$route.query': '$fetch'
  },
})

export default class index extends Vue {
  products = [];
  currentPage = 1;
  state = "";
  params = {
    q: "",
    page: 1,
  };

  pagination = {
    current_page: 1,
    last_page: 15,
    next_page: 2,
    prev_page: 1,
    total_count: 100,
    per_page: 18
  }


  createQuery(): void {
    const query = {
      page: this.currentPage > 1 ? this.currentPage.toString() : undefined,
      q: this.params.q || undefined,
      state: this.state,
    };

    this.$router.push({
      name: this.$route.name!,
      query,
    });
  }

  async fetch (): Promise<void> {
    await this.$axios
      .get('/api/admin/slitters?', {
        params: {
          search: this.params.q,
          page_size: 50,
          page: this.currentPage,
          state: this.state
        }
      })
      .then(res => (
        this.products = res.data.data
      ));
  }

  pageChanged(page: number): void {
    this.currentPage = page;
    this.createQuery();
  }

  @Watch("$route", { immediate: true })
  setQuery(): void {
    this.params = {
      q: this.$route.query.q?.toString() || "",
      page: this.currentPage
    };
    this.currentPage = toSafeInteger(this.$route.query.page) || 1;
  }
}
</script>
