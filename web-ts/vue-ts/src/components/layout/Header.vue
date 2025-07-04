<template>
  <header :class="[
    'fixed w-full top-0 z-50 transition-all duration-300', 
    isScrolled ? 'bg-white dark:bg-gray-800 shadow-md py-2' : 'bg-transparent dark:bg-transparent py-4'
  ]">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        <div class="flex-shrink-0">
          <RouterLink to="/" class="font-bold xs:text-xl text-2xl flex items-center border-none outline-none" :style="{ 'color': primaryColor }" @click="closeMobileMenu">
            <span class="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="xs:h-6 xs:w-6 h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
              </svg>
            </span>
            <span class="flex overflow-visible items-baseline min-h-[1.5em] py-1">
              <span 
                v-for="(letter, index) in letters" 
                :key="index"
                class="inline-block transform transition-all duration-300 ease-out"
                :class="[
                  animatedLetters[index] ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0',
                  'hover:animate-bounce',
                  letter === ' ' ? 'mr-[0.15em]' : '',
                  letter !== ' ' ? 'mr-[0.02em]' : '',
                  letter === 'h' ? '-translate-y-[0.001em]' : '',
                  letter === 'g' ? 'leading-[1.2]' : ''
                ]"
                :style="{ 
                  'transition-delay': `${index * 100}ms`,
                  'animation-delay': `${index * 50}ms`,
                  'transition-property': 'transform, opacity',
                  'transform-origin': 'center',
                  'line-height': letter === 'g' ? '1.2' : '1',
                  'vertical-align': 'baseline'
                }"
              >
                {{ letter === ' ' ? '\u00A0' : letter }}
              </span>
            </span>
          </RouterLink>
        </div>
        
        <nav class="hidden xl:flex xl:space-x-6">
          <RouterLink to="/" class="text-gray-700 dark:text-gray-300 py-2 text-sm tablet:text-base font-medium transition-colors duration-200 nav-link" :style="{ '--hover-color': primaryColor }" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            {{ t('nav.home') }}
          </RouterLink>
          <RouterLink to="/skills" class="text-gray-700 dark:text-gray-300 py-2 text-sm tablet:text-base font-medium transition-colors duration-200 nav-link" :style="{ '--hover-color': primaryColor }" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            {{ t('nav.skills') }}
          </RouterLink>
          <RouterLink to="/experience" class="text-gray-700 dark:text-gray-300 py-2 text-sm tablet:text-base font-medium transition-colors duration-200 nav-link" :style="{ '--hover-color': primaryColor }" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            {{ t('nav.experience') }}
          </RouterLink>
          <RouterLink to="/contact" class="text-gray-700 dark:text-gray-300 py-2 text-sm tablet:text-base font-medium transition-colors duration-200 nav-link" :style="{ '--hover-color': primaryColor }" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            {{ t('nav.contact') }}
          </RouterLink>
        </nav>
        
        <div class="hidden xl:flex items-center xl:space-x-4">
          <LanguageSwitcher />
          <ColorSwitcher />
          <ThemeToggle />
          <DownloadButton />
        </div>
        
        <div class="xl:hidden">
          <button type="button" @click="toggleMobileMenu" class="text-gray-600 hover:text-primary transition-colors duration-200" :style="{ '--hover-color': primaryColor }" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="xs:h-5 xs:w-5 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="xs:h-5 xs:w-5 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <MobileMenu :is-open="isMobileMenuOpen" @close="closeMobileMenu" />
    
    <!-- Scroll Progress Bar -->
    <div v-if="isScrolled" class="scroll-progress-container">
      <div class="scroll-progress-bar" :style="{ width: scrollProgress + '%', backgroundColor: primaryColor }"></div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import LanguageSwitcher from '../LanguageSwitcher.vue'
import ColorSwitcher from '../ColorSwitcher.vue'
import ThemeToggle from './ThemeToggle.vue'
import DownloadButton from './DownloadButton.vue'
import MobileMenu from './MobileMenu.vue'
import { useHeader } from '../../composables/useHeader'
import { useNavigation } from '../../composables/useNavigation'
import { useHeaderStyles } from '../../composables/useHeaderStyles'
import { useLetterAnimation } from '../../composables/useLetterAnimation'
import { onMounted } from 'vue'

const {
  isMobileMenuOpen,
  isScrolled,
  scrollProgress,
  toggleMobileMenu,
  closeMobileMenu
} = useHeader()

const {
  t,
  handleMouseEnter,
  handleMouseLeave
} = useNavigation()

const {
  colorStore,
  primaryColor
} = useHeaderStyles()

const {
  letters,
  animatedLetters,
  initializeAnimation
} = useLetterAnimation()

onMounted(() => {
  initializeAnimation('Trương Văn Minh')
})

// Add named export
defineExpose({
  // Expose any needed properties or methods
})
</script>

<style scoped>
.router-link-active {
  color: v-bind("primaryColor");
}

.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: v-bind("primaryColor");
  transition: width 0.3s;
}

.nav-link:hover::after {
  width: 100%;
}

.scroll-progress-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: rgba(229, 231, 235, 0.3);
  z-index: 45;
  overflow: hidden;
}

.scroll-progress-bar {
  height: 100%;
  transition: width 0.1s ease;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0) translateY(-0.05em);
    vertical-align: baseline;
  }
  50% {
    transform: translateY(-25%) translateY(-0.05em);
    vertical-align: baseline;
  }
}

.hover\:animate-bounce:hover {
  animation: bounce 0.5s ease-in-out;
}

/* Ensure consistent baseline alignment */
.transform {
  will-change: transform, opacity;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  vertical-align: baseline;
}

/* Ensure container has enough space for descenders */
.flex {
  margin-bottom: 0.1em;
}
</style>
