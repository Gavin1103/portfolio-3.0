<script setup lang="ts">
import {Link, Github} from "lucide-vue-next";
import {ref, computed, onMounted} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import projectData from '@/assets/projects.json'

const route = useRoute()
const router = useRouter()

const project = computed(() =>
    projectData.find(p => p.identifier === route.params.id)
)

const selectedImage = ref<string | null>(null)
const openImage = (src: string) => selectedImage.value = src
const closeOverlay = () => selectedImage.value = null

onMounted(() => {
  if (!project.value) {
    router.replace('/my-work')
  }
})
</script>

<template>
  <h1><span>Project—</span>{{ project?.title }}</h1>
  <section class="img-container" v-if="project">
    <img
        :src="`/img/${project.identifier}/${project['primary-image']}`"
        :alt="project.title"
        @click="openImage(`/img/${project.identifier}/${project['primary-image']}`)"
    />
    <img
        :src="`/img/${project.identifier}/${project['secondary-image']}`"
        :alt="project.title"
        @click="openImage(`/img/${project.identifier}/${project['secondary-image']}`)"
    />
  </section>
  <p class="built-info">{{project?.["technical-description"]}}</p>
  <div class="link-container">
    <a v-if="project?.['url-1']" :href="project['url-1']" target="_blank">
      <Link class="link-icon"/>
      Website
    </a>
    <a v-if="project?.['url-2']" :href="project['url-2']" target="_blank">
      <Link class="link-icon"/>
      API
    </a>
    <a v-if="project?.git" :href="project.git" target="_blank">
      <Github class="link-icon"/>
      GitHub
    </a>
  </div>
  <p class="project-description">
    {{ project?.description }}
  </p>

  <h2 v-if="project?.['extra-images']?.length">Extra</h2>
  <section class="img-container" v-if="project?.['extra-images']?.length">
    <img
        v-for="(img, i) in project['extra-images']"
        :key="i"
        :src="`/img/${project.identifier}/${img}`"
        :alt="project.title"
        @click="openImage(`/img/${project.identifier}/${img}`)"
    />
  </section>

  <!-- Overlay -->
  <div v-if="selectedImage" class="image-overlay" @click="closeOverlay">
    <img :src="selectedImage" alt="Zoomed in" @click.stop/>
  </div>
</template>
<style scoped>
h1 {
  color: var(--surface-light);

  span {
    color: var(--accent-color);
  }
}

.img-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;

  &:last-child {
    padding: 0 0 75px 0;
  }

  img {
    min-width: 300px;
    width: 47.5%;
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    transition: transform 0.2s ease, color 0.2s ease;

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }
}

p {
  color: var(--surface-light);
}

.link-container {
  width: 100%;
  display: flex;
  gap: 30px;

  a {
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    color: var(--accent-color);
    font-size: 18px;
    transition: transform 0.2s ease, color 0.2s ease;

    .link-icon {
      height: 18px;
      width: 18px;
      stroke-width: 2.5;
      margin-right: 5px;
    }

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
}

h2 {
  margin: 30px 0 0 0;
  padding: 30px 0;
  color: var(--accent-color);
  width: 100%;
  border-top: solid 0.2rem var(--surface-light);
}

.image-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(2px);

  img {
    max-width: 80%;
    max-height: 80%;
    border-radius: 10px;
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.2);
    cursor: zoom-out;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }
}

@media (max-width: 700px) {
  .img-container {
    flex-direction: column;
    gap: 30px;

    img {
      width: 100%;
    }
  }
}


</style>