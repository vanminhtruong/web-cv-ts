import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import { useColorStore } from '../stores/color'

interface StyleObject {
  [key: string]: string;
}

export function useHeaderStyles() {
  const colorStore = useColorStore()

  // Get primary color for active links and hover effects
  const primaryColor: ComputedRef<string> = computed(() => colorStore.currentColor.primary)
  
  // Style for scroll progress bar
  const progressBarStyle = (progress: number): StyleObject => {
    return {
      width: `${progress}%`,
      backgroundColor: colorStore.currentColor.primary
    }
  }
  
  // Style for router-link-active
  const activeNavLinkStyle: ComputedRef<StyleObject> = computed(() => {
    return {
      color: colorStore.currentColor.primary
    }
  })

  return {
    colorStore,
    primaryColor,
    progressBarStyle,
    activeNavLinkStyle
  }
} 