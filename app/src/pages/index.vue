<template>
  <h1>{{ helloWorld }}</h1>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component // <- 1
export default class Index extends Vue /* <- 2 */ {
  get helloWorld(): string {
    // <- 3
    return "Hello world!";
  }
}
</script>
