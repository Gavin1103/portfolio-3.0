<script setup lang="ts">
import {ref, onMounted, onBeforeUnmount} from 'vue'
import {Menu} from 'lucide-vue-next'

const isDropdownOpen = ref(false)
const menuButtonRef = ref<HTMLElement | null>(null)
const dropdownRef = ref<HTMLElement | null>(null)

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const handleResize = () => {
  if (window.innerWidth > 700) {
    isDropdownOpen.value = false
  }
}

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as Node

  if (
      isDropdownOpen.value &&
      dropdownRef.value &&
      !dropdownRef.value.contains(target) &&
      menuButtonRef.value &&
      !menuButtonRef.value.contains(target)
  ) {
    isDropdownOpen.value = false
  }
}

const closeDropdown = () => {
  isDropdownOpen.value = false
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  document.removeEventListener('click', handleClickOutside)
})


</script>
<template>
  <nav>
    <RouterLink to="/" class="logo">
      <span v-for="(char, i) in 'Gavin Tjin'.split('')" :key="i" class="logo-letter"
            :style="`animation-delay: ${i * 0.1}s`">
        {{ char === ' ' ? '\u00A0' : char }}
      </span>
    </RouterLink>

    <Menu ref="menuButtonRef" class="hamburger-icon" @click="toggleDropdown"/>

    <section class="nav-item-container">
      <RouterLink to="/" class="nav-item">Home</RouterLink>
      <RouterLink to="/my-work" class="nav-item nav-item-button">My work</RouterLink>
    </section>
  </nav>

  <!-- Mobiele dropdown -->
  <section class="dropdown-menu" v-if="isDropdownOpen" ref="dropdownRef">
    <RouterLink to="/" @click="closeDropdown" class="dropdown-item">Home</RouterLink>
    <RouterLink to="/my-work" @click="closeDropdown" class="dropdown-item">My work</RouterLink>
  </section>
</template>

<style scoped>

@keyframes colorPulse {
  0%, 100% {
    color: var(--accent-color);
  }
  50% {
    color: var(--surface-light);
  }
}

nav {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.2rem solid var(--surface-light);
  padding: 10px 0;

  .logo {
    font-size: 35px;
    text-decoration: none;
    display: flex;
    gap: 1px;
    transition: transform 0.2s ease, color 0.2s ease;

    .logo-letter {
      --letter-color: var(--accent-color);
      color: var(--letter-color);
      display: inline-block;
      animation: none;
      transition: color 0.5s ease;
    }

    &:hover {
      transform: scale(1.05);
      cursor: pointer;

      .logo-letter {
        animation: colorPulse 1.5s infinite ease-in-out;
      }
    }
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
      transition: transform 0.2s ease, color 0.2s ease;
    }

    .nav-item:hover {
      color: var(--accent-color);
      transform: scale(1.1);
      cursor: pointer;
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

    .nav-item-button:hover {
      color: var(--primary-color);
    }
  }


  .hamburger-icon {
    display: none;
    color: var(--surface-light);
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: transform 0.2s ease, color 0.2s ease;
  }

  .hamburger-icon:hover {
    color: var(--accent-color);
    transform: scale(1.1);
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
      text-decoration: none;
      transition: transform 0.2s ease, color 0.2s ease;
    }

    .dropdown-item:hover {
      color: var(--accent-color);
    }
  }

}
</style>