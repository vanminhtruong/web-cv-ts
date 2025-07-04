import { ref, onUnmounted } from 'vue'

export function useLetterAnimation() {
  const letters = ref<string[]>([])
  const animatedLetters = ref<boolean[]>([])
  const animationTimer = ref<number | null>(null)
  const letterTimers = ref<number[]>([])

  const clearAllTimers = () => {
    if (animationTimer.value) {
      clearTimeout(animationTimer.value)
    }
    letterTimers.value.forEach(timer => clearTimeout(timer))
    letterTimers.value = []
  }

  const resetAnimation = () => {
    clearAllTimers()
    animatedLetters.value = new Array(letters.value.length).fill(false)
  }

  const startAnimation = () => {
    resetAnimation()
    
    // Animate letters appearing one by one
    const newTimers = letters.value.map((_, index) => {
      return window.setTimeout(() => {
        if (animatedLetters.value) {
          animatedLetters.value[index] = true
        }
      }, index * 100) // 100ms delay between each letter
    })
    letterTimers.value = newTimers

    // Calculate total duration for all letters to appear
    const lettersDuration = letters.value.length * 100
    const displayDuration = 1500
    const totalAppearDuration = lettersDuration + displayDuration

    const hideTimer = window.setTimeout(() => {
      if (animatedLetters.value) {
        animatedLetters.value = new Array(letters.value.length).fill(false)
      }
    }, totalAppearDuration)
    letterTimers.value.push(hideTimer)

    // Start next cycle after a pause
    const pauseDuration = 1000 // 1s pause before next cycle
    const totalCycleDuration = totalAppearDuration + pauseDuration
    
    animationTimer.value = window.setTimeout(() => {
      startAnimation() // Restart the cycle
    }, totalCycleDuration)
  }

  const initializeAnimation = (text: string) => {
    // Split text into characters while preserving spaces
    letters.value = text.split('')
    resetAnimation()
    
    // Start the initial animation after a short delay
    setTimeout(() => {
      startAnimation()
    }, 500)
  }

  // Clean up timers when component is unmounted
  onUnmounted(() => {
    clearAllTimers()
  })

  return {
    letters,
    animatedLetters,
    initializeAnimation
  }
} 