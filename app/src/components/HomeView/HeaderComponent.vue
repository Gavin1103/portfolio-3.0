<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Typedefinitie van elk tekstsegment
type Segment =
    | { type: 'text'; text: string }
    | { type: 'highlight'; text: string }
    | { type: 'br' }

// Geanimeerde content in logische segmenten
const contentParts: Segment[] = [
  { type: 'text', text: 'Hi, I’m Gavin —' },
  { type: 'br' },
  { type: 'text', text: 'a ' },
  { type: 'highlight', text: 'Full ' },
  { type: 'highlight', text: 'Stack ' },
  { type: 'highlight', text: 'Developer ' },
  { type: 'text', text: 'crafting clean and scalable web solutions.' }
]

// Weergegeven onderdelen
const renderedParts = ref<string[]>([])
const currentPart = ref('')
const currentType = ref<'text' | 'highlight' | null>(null)

// Posities in de contentParts en individuele tekst
let outerIndex = 0
let innerIndex = 0

onMounted(() => {
  const interval = setInterval(() => {
    const part = contentParts[outerIndex]
    if (!part) {
      clearInterval(interval)
      return
    }

    if (part.type === 'br') {
      // Voeg een regelafbreking toe
      renderedParts.value.push('<br>')
      outerIndex++
      innerIndex = 0
      return
    }

    const currentText = part.text
    currentPart.value += currentText[innerIndex]
    currentType.value = part.type
    innerIndex++

    const isDone = innerIndex >= currentText.length
    if (isDone) {
      if (part.type === 'highlight') {
        renderedParts.value.push(`<span class="highlight">${currentPart.value}</span>`)
      } else {
        renderedParts.value.push(currentPart.value)
      }

      // Reset voor volgende segment
      currentPart.value = ''
      currentType.value = null
      innerIndex = 0
      outerIndex++
    }
  }, 60) // snelheid per letter
})
</script>

<template>
  <header>
    <section class="img-container">
      <img
          src="../../assets/img/360_F_699466075_DaPTBNlNQTOwwjkOiFEoOvzDV0ByXR9E.jpg"
          alt="Gavin"
      />
    </section>

    <section class="text-container">
      <p class="typed-text">
        <span v-for="(part, i) in renderedParts" :key="i" v-html="part"/>
        <span v-if="currentPart">
            <span v-if="currentType === 'highlight'" class="highlight">{{ currentPart }}</span>
            <span v-else>{{ currentPart }}</span>
        </span>
      </p>
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
    transition: transform 0.4s ease, color 0.4s ease;

    img {
      width: 75%;
      border-radius: 15px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);

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


      ::v-deep(.highlight) {
        color: var(--accent-color);
        font-weight: bold;
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