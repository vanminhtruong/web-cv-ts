<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans dark:text-white">
    <BackToTop />
    <Header />
    <main class="pt-20">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted, defineAsyncComponent } from 'vue'
import { useThemeStore } from '../../stores/theme'
import { useColorStore } from '../../stores/color'

// Import components with defineAsyncComponent
const Header = defineAsyncComponent(() => import('./Header.vue'))
const Footer = defineAsyncComponent(() => import('./Footer.vue'))
const BackToTop = defineAsyncComponent(() => import('../BackToTop.vue'))

const themeStore = useThemeStore()
const colorStore = useColorStore()

onMounted(() => {
  themeStore.initTheme()
  colorStore.initColor()
})
</script>
