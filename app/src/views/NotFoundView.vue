<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <section class="not-found">
    <h1><span>404 —</span> Page not found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <button @click="router.push('/')">Go home</button>
  </section>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;

  h1 {
    color: var(--surface-light);
    font-size: 48px;

    span {
      color: var(--accent-color);
    }
  }

  p {
    color: var(--surface-light);
    font-size: 20px;
    margin: 10px 0 40px;
  }

  button {
    background-color: var(--accent-color);
    color: var(--surface-light);
    border: none;
    border-radius: 10px;
    padding: 15px 35px;
    font-size: 18px;
    font-family: inherit;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>
