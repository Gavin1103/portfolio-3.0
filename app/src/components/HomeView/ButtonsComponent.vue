<script setup lang="ts">
import {FileText, Github, Linkedin} from 'lucide-vue-next'
import cvPdf from '@/assets/cv/Gavin_Tjin_cv.pdf'

</script>

<template>
  <section>
    <a :href="cvPdf" target="_blank" rel="noopener">
      <FileText class="icon" />
      View Resume
    </a>
    <a href="https://github.com/Gavin1103" target="_blank" rel="noopener">
      <Github class="icon"/>
      Github
    </a>
    <a href="https://www.linkedin.com/in/gavintjin/" target="_blank" rel="noopener">
      <Linkedin class="icon"/>
      LinkedIn
    </a>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-top: 0.2rem solid var(--surface-light);

  a {
    min-width: 200px;
    width: 30%;
    height: 75px;
    background-color: var(--accent-color);
    border: none;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    margin: 50px 0;
    color: var(--surface-light);
    font-size: 22px;
    font-weight: bolder;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    text-decoration: none;

    &:hover {
      transition: transform 0.2s ease, color 0.2s ease;
      cursor: pointer;
      transform: scale(1.05);
    }

    .icon {
      width: 24px;
      height: 24px;
      stroke-width: 2.5;
    }
  }
}

@media (max-width: 700px) {
 section {
   padding: 20px 0 0 0;
   flex-direction: column;
   align-items: center;

   a{
     margin: 20px 0;
     width: 100%;
   }
 }
}



</style>