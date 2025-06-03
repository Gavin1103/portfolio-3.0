<script setup lang="ts">
import {ref, onMounted, onBeforeUnmount} from 'vue'
import {Menu} from 'lucide-vue-next'

const isDropdownOpen = ref(false)

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const handleResize = () => {
  if (window.innerWidth > 700) {
    isDropdownOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})


</script>
<template>
  <nav>
    <div class="logo">Gavin Tjin</div>

    <Menu class="hamburger-icon" @click="toggleDropdown"/>

    <section class="nav-item-container">
      <RouterLink to="/" class="nav-item">Home</RouterLink>
      <RouterLink to="/my-work" class="nav-item nav-item-button">My work</RouterLink>
    </section>
  </nav>

  <!-- Mobiele dropdown -->
  <section class="dropdown-menu" v-if="isDropdownOpen">
    <div class="dropdown-item">Home</div>
    <div class="dropdown-item">My work</div>
  </section>
</template>

<style scoped>

nav {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.2rem solid var(--surface-light);
  padding: 10px 0;

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
      color: var(--surface-light);
      text-decoration: none;
    }

    .nav-item-button {
      color: var(--primary-color);
      margin-left: 20px;
      background-color: var(--surface-light);
      padding: 15px 25px;
      border: none;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
  }


  .hamburger-icon {
    display: none;
    color: var(--surface-light);
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
}

@media (max-width: 700px) {
  nav {
    .nav-item-container {
      display: none;
    }

    .hamburger-icon {
      display: block;
    }
  }

  .dropdown-menu {
    background-color: var(--surface-light);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .dropdown-item {
      color: var(--primary-color);
      font-size: 22px;
      font-weight: bold;
      width: 100%;
      border-bottom: 1px solid #ccc;
      display: flex;
      justify-content: center;
      padding: 5px 0 5px 0;
    }
  }

}
</style>