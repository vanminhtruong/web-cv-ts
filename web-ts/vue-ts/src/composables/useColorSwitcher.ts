import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useColorStore } from '../stores/color'
import { useI18n } from 'vue-i18n'
import type { Ref } from 'vue'

interface Color {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  accent: string;
}

export function useColorSwitcher() {
  const { t } = useI18n()
  const colorStore = useColorStore()
  const isOpen = ref<boolean>(false)
  const currentColor = ref<Color>(colorStore.currentColor)

  const toggleColorMenu = (): void => {
    if (!isOpen.value) {
      window.dispatchEvent(new Event('color-switcher-open'));
    }
    isOpen.value = !isOpen.value
  }

  const selectColor = (colorId: string): void => {
    colorStore.setColor(colorId)
    currentColor.value = colorStore.currentColor
    isOpen.value = false
  }

  const handleClickOutside = (event: MouseEvent): void => {
    const colorSwitcher = document.querySelector('.color-switcher')
    if (colorSwitcher && !colorSwitcher.contains(event.target as Node)) {
      isOpen.value = false
    }
  }

  // Watch for changes in colorStore.currentColor
  watch(() => colorStore.currentColor, (newColor) => {
    currentColor.value = newColor
  }, { deep: true })

  onMounted(() => {
    document.addEventListener('click', handleClickOutside)
    window.addEventListener('theme-toggle-open', () => {
      isOpen.value = false
    })
    window.addEventListener('language-switcher-open', () => {
      isOpen.value = false
    })
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
    window.removeEventListener('theme-toggle-open', () => {
      isOpen.value = false
    })
    window.removeEventListener('language-switcher-open', () => {
      isOpen.value = false
    })
  })

  return {
    t,
    colorStore,
    isOpen,
    currentColor,
    currentColorId: colorStore.currentColorId,
    toggleColorMenu,
    selectColor
  }
} 