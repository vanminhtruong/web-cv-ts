import { ref, onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'

export function useHeader() {
  // State variables
  const isMobileMenuOpen = ref<boolean>(false)
  const isScrolled = ref<boolean>(false)
  const scrollProgress = ref<number>(0)

  // Methods
  function toggleMobileMenu(): void {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  function closeMobileMenu(): void {
    isMobileMenuOpen.value = false
  }

  function updateScrollProgress(): void {
    // Calculate scroll progress as a percentage
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    if (totalHeight > 0) {
      scrollProgress.value = (window.scrollY / totalHeight) * 100
    } else {
      scrollProgress.value = 0
    }
    
    // Update header background
    isScrolled.value = window.scrollY > 10
  }

  // Lifecycle hooks
  onMounted(() => {
    window.addEventListener('scroll', updateScrollProgress)
    updateScrollProgress() // Initialize on mount
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateScrollProgress)
  })

  return {
    isMobileMenuOpen,
    isScrolled,
    scrollProgress,
    toggleMobileMenu,
    closeMobileMenu,
    updateScrollProgress
  }
} 