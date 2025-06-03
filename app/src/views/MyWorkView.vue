<script setup lang="ts">
import WorkCardComponent from "@/components/MyWorkView/WorkCardComponent.vue";
</script>

<template>

  <h1>My work</h1>

  <section>
    <WorkCardComponent></WorkCardComponent>
    <WorkCardComponent></WorkCardComponent>
    <WorkCardComponent></WorkCardComponent>
    <WorkCardComponent></WorkCardComponent>
    <WorkCardComponent></WorkCardComponent>
  </section>

</template>

<style scoped>
h1{
  color: var(--surface-light);
}

section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

</style>
