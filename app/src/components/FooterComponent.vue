<script setup lang="ts">
</script>

<template>
  <footer>
    <p>© {{ new Date().getFullYear() }} Gavin Tjin</p>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  border-top: 0.2rem solid var(--surface-light);
  padding: 30px 0;
  display: flex;
  justify-content: center;

  p {
    color: var(--surface-light);
    font-size: 14px;
    opacity: 0.6;
  }
}
</style>
