<script setup lang="ts">

</script>

<template>

  <header>
    <section class="img-container">
      <img src="../../assets/360_F_699466075_DaPTBNlNQTOwwjkOiFEoOvzDV0ByXR9E.jpg" alt=""/>
    </section>

    <section class="text-container">
      <p>Hi, I’m Gavin —<br> a <span>Full Stack Developer</span> crafting clean and scalable web solutions.</p>
    </section>
  </header>

</template>

<style scoped>

header {
  margin: 75px 0 75px 0;
  width: 100%;
  min-height: 400px;
  display: flex;

  .img-container {
    min-width: 300px;
    background-color: var(--surface-light);
    width: 40%;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

    img {
      width: 75%;
      border-radius: 15px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }
  }

  .text-container {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    p {
      width: 90%;
      color: var(--surface-light);
      font-size: 42px;

      span {
        color: var(--accent-color);
      }
    }
  }
}


@media (max-width: 1000px) {
  header {

    .img-container {
      width: 50%;
    }

    .text-container {
      width: 50%;

      p {
        font-size: 32px;
      }
    }
  }
}

@media (max-width: 700px) {
  header {
    margin-bottom: 0;
    flex-direction: column;
    align-items: center;

    .img-container {
      padding: 40px 0 40px 0;
      width: 100%;

      img {
        width: 60%;
      }
    }

    .text-container {
      width: 100%;

      p {
        width: 100%;
        text-align: center;
      }
    }
  }
}

</style>