<script setup>

</script>

<template>
  <nav>
    <div class="logo">
      Gavin Tjin
    </div>
    <section class="nav-item-container">
      <div class="nav-item">Home</div>
      <button class="nav-item nav-item-button">My work</button>
    </section>
  </nav>
</template>

<style scoped>

nav {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.2rem solid white;
  padding: 10px 0 10px 0;

  .logo {
    color: var(--accent-color);
    font-size: 35px;
  }

  .nav-item-container {
    display: flex;

    .nav-item {
      display: flex;
      align-items: center;
      font-weight: bolder;
      font-size: 20px;
      color:  var(--surface-light);
    }

    .nav-item-button {
      color: var(--primary-color);
      margin-left: 20px;
      background-color: var(--surface-light);
      padding: 15px 25px 15px 25px;
      border: none;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }
  }
}
</style>