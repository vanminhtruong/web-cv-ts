<script setup lang="ts">
import { useThemeStore } from '../../stores/theme'
import { defineAsyncComponent } from 'vue'

// Import components with defineAsyncComponent
const EducationSection = defineAsyncComponent(() => import('./components/EducationSection.vue'))
const SkillsSection = defineAsyncComponent(() => import('./components/SkillsSection.vue'))

const themeStore = useThemeStore()
</script>

<template>
  <div class="min-h-screen py-10 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <EducationSection />
      <SkillsSection />
    </div>
  </div>
</template>
