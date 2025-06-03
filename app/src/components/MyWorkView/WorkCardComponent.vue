<script setup lang="ts">
import {defineProps} from 'vue'
import {Github, ExternalLink, Info} from 'lucide-vue-next'

const props = defineProps<{
  identifier: string
  title: string
  image: string
  url1?: string
  git?: string
  info?: string
}>()
</script>

<template>
  <div class="card">
    <img :src="`/src/assets/img/${props.identifier}/${props.image}`" :alt="title"/>
    <p class="card-text">{{ title }}</p>

    <div class="card-icons-container">
      <a v-if="url1" :href="url1" target="_blank">
        <ExternalLink class="icon"/>
      </a>
      <RouterLink v-if="info" :to="`/project-detail/${info}`">
        <Info class="icon"/>
      </RouterLink>
      <a v-if="git && git !== '#'" :href="git" target="_blank">
        <Github class="icon"/>
      </a>
    </div>
  </div>
</template>

<style scoped>

.card {
  min-width: 300px;
  width: 47.5%;
  height: 400px;
  padding: 30px 0 10px 0;
  background-color: #007C91;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s ease, color 0.2s ease;


  img {
    min-width: 280px;
    width: 75%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
  }

  p {
    height: auto;
    color: var(--surface-light);
    font-size: 24px;
    align-content: center;
  }

  .card-icons-container {
    display: flex;
    justify-content: center;
    min-width: 280px;
    width: 75%;

    a {
      display: flex;
      justify-content: center;

      .icon {
        margin: 0 15px;
        height: 30px;
        width: 30px;
        color: var(--surface-light);
        transition: transform 0.2s ease, color 0.2s ease;
        flex-shrink: 0;
        stroke-width: 2.5;
      }

      .icon:hover {
        color: var(--accent-color);
        transform: scale(1.3);
        cursor: pointer;
      }
    }
  }
}

.card:hover {
  transform: scale(1.025);
}

@media (max-width: 900px) {
  .card {
    padding: 75px 0 50px 0;
    width: 100%;
  }
}

@media (max-width: 700px) {
  .card {
    padding: 20px 0 10px 0;
    width: 100%;
  }
}

@media (max-width: 500px) {
  .card {
    padding: 0 0 0 0;
    width: 100%;
  }
}


</style>