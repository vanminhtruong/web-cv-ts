import { ref } from 'vue'
import { defineStore } from 'pinia'

interface ThemeInfo {
  id: string;
  name: string;
}

export const useThemeStore = defineStore('theme', () => {
  const darkThemes: ThemeInfo[] = [
    { id: 'dark', name: 'Dark Mode' },
    { id: 'black', name: 'Black Mode' },
    { id: 'navy', name: 'Navy Mode' },
    { id: 'charcoal', name: 'Charcoal Mode' },
    { id: 'midnight', name: 'Midnight Mode' },
    { id: 'deep-purple', name: 'Deep Purple Mode' }
  ]

  const savedTheme = localStorage.getItem('theme') || 'light'
  const isDark = ref<boolean>(savedTheme !== 'light')
  const currentDarkTheme = ref<string>(savedTheme !== 'light' ? savedTheme : 'dark')
  const currentDarkThemeInfo = ref<ThemeInfo>(darkThemes.find(theme => theme.id === currentDarkTheme.value) || darkThemes[0])

  function toggleTheme(): void {
    isDark.value = !isDark.value
    localStorage.setItem('theme', isDark.value ? currentDarkTheme.value : 'light')
    updateThemeClass()
  }
  
  function setTheme(themeId: string): void {
    if (themeId === 'light') {
      isDark.value = false
    } else {
      isDark.value = true
      currentDarkTheme.value = themeId
      const theme = darkThemes.find(t => t.id === themeId)
      if (theme) {
        currentDarkThemeInfo.value = theme
      }
    }
    localStorage.setItem('theme', themeId)
    updateThemeClass()
  }
  
  function updateThemeClass(): void {
    try {
      // Lấy tất cả các theme class
      const themeClasses = darkThemes.map(theme => `theme-${theme.id}`)
      
      // Xóa tất cả các theme class hiện tại
      document.documentElement.classList.remove('dark', ...themeClasses)
      
      // Thêm class mới nếu đang ở dark mode
      if (isDark.value) {
        document.documentElement.classList.add('dark')
        document.documentElement.classList.add(`theme-${currentDarkTheme.value}`)
      }
    } catch (error) {
      console.error('Error updating theme class:', error)
    }
  }
  
  function initTheme(): void {
    updateThemeClass()
  }
  
  return { 
    isDark, 
    darkThemes, 
    currentDarkTheme, 
    currentDarkThemeInfo,
    toggleTheme, 
    setTheme, 
    initTheme 
  }
}) 