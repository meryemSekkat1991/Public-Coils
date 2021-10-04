<template lang="pug">
label.text-xl {{name}}
</template>

<script lang="ts">
  import words from "lodash/words";
  import { Component, Vue, Prop } from "nuxt-property-decorator";

  @Component({
    name: "Placeholder"
  })
  export default class Placeholder extends Vue {
    @Prop({ required: true }) data!: string;
    get name(): string {
      if (this.data) {
        return words(this.data)
          .slice(0, 2)
          .map((text: string) => text.substring(0, 1).toUpperCase())
          .join("");
      }
      return "";
    }
  }
</script>

