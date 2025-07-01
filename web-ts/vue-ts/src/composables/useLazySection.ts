import { ref, onMounted, onBeforeUnmount } from 'vue'
import type { Ref } from 'vue'

interface LazyProps {
  threshold: number;
  rootMargin: string;
}

interface LazySection {
  lazySection: Ref<HTMLElement | null>;
  isVisible: Ref<boolean>;
}

export function useLazySection(props: LazyProps): LazySection {
  const lazySection = ref<HTMLElement | null>(null)
  const isVisible = ref<boolean>(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          isVisible.value = entry.isIntersecting
        })
      },
      {
        threshold: props.threshold,
        rootMargin: props.rootMargin
      }
    )
    
    if (lazySection.value) {
      observer.observe(lazySection.value)
    }
  })

  onBeforeUnmount(() => {
    if (observer && lazySection.value) {
      observer.unobserve(lazySection.value)
      observer.disconnect()
    }
  })

  return {
    lazySection,
    isVisible
  }
} 