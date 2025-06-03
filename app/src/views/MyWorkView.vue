<script setup lang="ts">
import { ref, onMounted } from 'vue'
import WorkCardComponent from "@/components/MyWorkView/WorkCardComponent.vue"
import projects from '@/assets/projects.json'

const projectList = ref(projects)
</script>

<template>
  <h1>My work</h1>

  <section>
    <WorkCardComponent
        v-for="project in projectList"
        :key="project.identifier"
        :identifier="project.identifier"
        :title="project.title"
        :image="project['primary-image']"
        :url1="project['url-1']"
        :git="project.git"
        :info="project['intern-link']"
    />
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
