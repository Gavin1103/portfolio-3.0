<script setup lang="ts">
import NavComponent from "@/components/NavComponent.vue";
import { RouterView, RouterLink } from 'vue-router'

</script>

<template>
  <div class="wrapper">
    <nav-component></nav-component>
    <RouterView />
  </div>
</template>

<style scoped>
.wrapper {
  max-width: 1200px;
  min-width: 320px;
  min-height: 100vh;
  width: 90%;
  margin: 0 auto;
}
</style>