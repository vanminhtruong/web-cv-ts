import { ref, onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useColorStore } from '../stores/color'
import { useThemeStore } from '../stores/theme'

export function useLanguageSwitcher() {
  const colorStore = useColorStore()
  const themeStore = useThemeStore()
  const { locale } = useI18n()
  const currentLocale = ref<string>(locale.value)
  const isOpen = ref<boolean>(false)
  const selectContainer = ref<HTMLElement | null>(null)

  const toggleDropdown = (): void => {
    if (!isOpen.value) {
      window.dispatchEvent(new Event('language-switcher-open'));
    }
    isOpen.value = !isOpen.value
  }

  const selectOption = (value: string): void => {
    currentLocale.value = value
    locale.value = value
    localStorage.setItem('locale', value)
    isOpen.value = false
  }

  const handleClickOutside = (event: MouseEvent): void => {
    if (selectContainer.value && !selectContainer.value.contains(event.target as Node)) {
      isOpen.value = false
    }
  }

  onMounted(() => {
    const savedLocale = localStorage.getItem('locale')
    if (savedLocale) {
      currentLocale.value = savedLocale
      locale.value = savedLocale
    }
    
    document.addEventListener('click', handleClickOutside)
    
    // Listen for events from other dropdowns
    window.addEventListener('color-switcher-open', () => {
      isOpen.value = false
    })
    
    window.addEventListener('theme-toggle-open', () => {
      isOpen.value = false
    })
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
    window.removeEventListener('color-switcher-open', () => {
      isOpen.value = false
    })
    window.removeEventListener('theme-toggle-open', () => {
      isOpen.value = false
    })
  })

  return {
    colorStore,
    themeStore,
    currentLocale,
    isOpen,
    selectContainer,
    toggleDropdown,
    selectOption
  }
} 