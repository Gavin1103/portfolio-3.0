<script setup lang="ts">
import {FileText, Github, Linkedin} from 'lucide-vue-next'
</script>

<template>
  <section>
    <button>
      <FileText class="icon"/>
      View Resume
    </button>
    <button>
      <Github class="icon"/>
      Github
    </button>
    <button>
      <Linkedin class="icon"/>
      LinkedIn
    </button>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-top: 0.2rem solid var(--surface-light);

  button {
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

    .icon {
      width: 24px;
      height: 24px;
    }
  }
}

@media (max-width: 700px) {
 section {
   padding: 20px 0 0 0;
   flex-direction: column;
   align-items: center;

   button{
     margin: 20px 0;
     width: 100%;
   }
 }
}



</style>