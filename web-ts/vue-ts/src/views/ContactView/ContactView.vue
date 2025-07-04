<script setup lang="ts">
import { useColorStore } from '../../stores/color'
import { useI18n } from 'vue-i18n'
import { defineAsyncComponent } from 'vue'
import { useAssetPath } from '../../composables/useAssetPath'

// Import components with defineAsyncComponent
const ContactInfoSection = defineAsyncComponent(() => import('./components/ContactInfoSection.vue'))
const ContactFormSection = defineAsyncComponent(() => import('./components/ContactFormSection.vue'))
const LazySection = defineAsyncComponent(() => import('../../components/LazySection.vue'))

const colorStore = useColorStore()
const { t } = useI18n()
const { getAssetPath } = useAssetPath()
</script>

<template>
  <div class="min-h-screen py-10 xs:py-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <LazySection class="mb-16 xs:mb-8">
        <div class="flex items-center mb-10 xs:mb-6">
          <div class="mr-4 hidden md:block">
            <div class="h-12 w-12 xs:h-8 xs:w-8 rounded-lg flex items-center justify-center shadow-md" :style="{ 'background-color': colorStore.currentColor.primary }">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 xs:h-4 xs:w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <h2 class="text-3xl xs:text-2xl font-bold inline-block pb-2 border-b-4 transform transition-all duration-300 hover:scale-105" :style="{ 'border-color': colorStore.currentColor.primary, 'color': colorStore.currentColor.primary }">{{ t('contact.title').toUpperCase() }}</h2>
        </div>

        <div class="flex flex-col md:flex-row gap-8 xs:gap-4 h-full">
          <LazySection class="w-full md:w-1/2" threshold="0.1" rootMargin="50px">
            <ContactInfoSection />
          </LazySection>
          <LazySection class="w-full md:w-1/2" threshold="0.1" rootMargin="50px">
            <ContactFormSection />
          </LazySection>
        </div>
      </LazySection>
    </div>
  </div>
</template>
