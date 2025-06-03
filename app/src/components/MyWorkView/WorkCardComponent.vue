<script setup lang="ts">

import {Github, ExternalLink, Info} from "lucide-vue-next";
</script>

<template>
  <div class="card">
    <img src="../../assets/visie-op-de-uitslag.png" alt="project-image"/>
    <p class="card-text">Visie op de uitslag</p>
    <div class="card-icons-container">
      <ExternalLink class="icon"/>
      <Info class="icon"/>
      <Github class="icon"/>
    </div>
  </div>
</template>

<style scoped>

.card {
  min-width: 300px;
  width: 45%;
  height: 400px;
  padding: 30px 0 0 0;
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

    .icon {
      margin: 0 15px;
      height: 30px;
      width: 30px;
      color: var(--surface-light);
      transition: transform 0.2s ease, color 0.2s ease;
      flex-shrink: 0;
      stroke-width: 2.5; /* standaard is meestal 2 */
    }

    .icon:hover {
      color: var(--accent-color);
      transform: scale(1.3);
      cursor: pointer;
    }
  }
}

.card:hover {
  transform: scale(1.025);
  cursor: pointer;
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