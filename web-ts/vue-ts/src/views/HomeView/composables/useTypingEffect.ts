import { ref, onMounted, onBeforeUnmount } from 'vue'
import type { Ref } from 'vue'

interface TypingEffectOptions {
  typingSpeed?: number;
  deletingSpeed?: number;
  delayAfterComplete?: number;
  delayAfterDelete?: number;
  startDelay?: number;
  loop?: boolean;
}

interface TypingEffectReturn {
  displayedText: Ref<string>;
  isDeleting: Ref<boolean>;
  loopNum: Ref<number>;
  startTyping: () => void;
  stopTyping: () => void;
}

/**
 * Composable cung cấp hiệu ứng đánh máy cho văn bản
 * @param text - Văn bản đầy đủ cần hiển thị
 * @param options - Các tùy chọn cấu hình
 * @returns - Các giá trị và hàm để sử dụng hiệu ứng
 */
export function useTypingEffect(text: string, options: TypingEffectOptions = {}): TypingEffectReturn {
  // Các tham số mặc định
  const {
    typingSpeed = 150,
    deletingSpeed = 100,
    delayAfterComplete = 2000,
    delayAfterDelete = 500,
    startDelay = 1000,
    loop = true
  } = options

  // Các biến trạng thái
  const displayedText = ref<string>('')
  const isDeleting = ref<boolean>(false)
  const loopNum = ref<number>(0)
  const currentSpeed = ref<number>(typingSpeed)
  
  let typingTimer: number | null = null

  const typeEffect = (): void => {
    const fullText = text

    if (isDeleting.value) {
      displayedText.value = fullText.substring(0, displayedText.value.length - 1)
      currentSpeed.value = deletingSpeed
    } else {
      displayedText.value = fullText.substring(0, displayedText.value.length + 1)
      currentSpeed.value = typingSpeed
    }

    if (!isDeleting.value && displayedText.value === fullText) {
      currentSpeed.value = delayAfterComplete
      isDeleting.value = true
    } else if (isDeleting.value && displayedText.value === '') {
      isDeleting.value = false
      if (loop) {
        loopNum.value++
      }
      currentSpeed.value = delayAfterDelete
    }

    if (!loop && isDeleting.value && displayedText.value === '') {
      return
    }

    typingTimer = window.setTimeout(typeEffect, currentSpeed.value)
  }

  const startTyping = (): void => {
    if (typingTimer) {
      clearTimeout(typingTimer)
    }
    typingTimer = window.setTimeout(typeEffect, startDelay)
  }

  const stopTyping = (): void => {
    if (typingTimer) {
      clearTimeout(typingTimer)
      typingTimer = null
    }
  }

  onMounted(() => {
    startTyping()
  })

  onBeforeUnmount(() => {
    stopTyping()
  })

  return {
    displayedText,
    isDeleting,
    loopNum,
    startTyping,
    stopTyping
  }
} 