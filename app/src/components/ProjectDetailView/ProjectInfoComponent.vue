<script setup lang="ts">
import {Link} from "lucide-vue-next";
import {ref} from 'vue'

import visie_API_image from '@/assets/visie-op-de-uitslag-api.png'

const selectedImage = ref<string | null>(null)

const openImage = (src: string) => {
  console.log(src)
  selectedImage.value = src
}

const closeOverlay = () => {
  selectedImage.value = null
}
</script>

<template>
  <h1><span>Project—</span>Visie op de uitslag</h1>
  <section class="img-container">
    <img
        src="../../assets/visie-op-de-uitslag.png"
        alt="Visie op de uitslag"
        @click="openImage('../../assets/visie-op-de-uitslag.png')"
    />
    <img
        src="../../assets/visie-op-de-uitslag-api.png"
        alt="Visie op de uitslag"
        @click="openImage('../../assets/visie-op-de-uitslag-api.png')"
    />
  </section>
  <p class="built-info">Built with Vue.js (website) and Spring Boot (API)</p>
  <div class="link-container">
    <a href="#">
      <Link class="link-icon"/>
      Website
    </a>
    <a href="#">
      <Link class="link-icon"/>
      API
    </a>
  </div>
  <p class="project-info-text">It is a long established fact that a reader will be distracted by the readable content of
    a page when looking at
    its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
    to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and
    web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many
    web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
    purpose (injected humour and the like).</p>

  <!-- Overlay -->
  <div class="image-overlay" v-if="selectedImage" @click="closeOverlay">
    <img :src="visie_API_image" alt="Zoomed in" @click.stop/>
  </div>
</template>
<!--//https://visie-op-de-uitslag-api.up.railway.app/api/swagger-ui/index.html-->

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