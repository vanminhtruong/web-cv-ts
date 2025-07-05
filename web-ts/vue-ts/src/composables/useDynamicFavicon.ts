import { watch } from 'vue'
import { useColorStore } from '../stores/color'

export function useDynamicFavicon() {
  const colorStore = useColorStore()

  /**
   * Cập nhật favicon và theme color với màu hiện tại
   */
  function updateFavicon(color: string) {
    // Tạo SVG với màu được truyền vào
    const svg = createFaviconSVG(color)
    
    // Chuyển SVG thành URL và cập nhật favicon
    const url = svgToURL(svg)
    updateFaviconLink(url)
    
    // Cập nhật theme color cho mobile
    updateThemeColor(color)
    
    // Giải phóng bộ nhớ
    cleanupURL(url)
  }

  /**
   * Tạo nội dung SVG cho favicon
   */
  function createFaviconSVG(color: string) {
    return `
      <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="6" fill="${color}"/>
        <text x="16" y="22" font-family="Arial Black, sans-serif" font-size="16" font-weight="900" fill="white" text-anchor="middle">CV</text>
      </svg>
    `
  }

  /**
   * Chuyển đổi SVG thành URL
   */
  function svgToURL(svg: string) {
    const blob = new Blob([svg], { type: 'image/svg+xml' })
    return URL.createObjectURL(blob)
  }

  /**
   * Cập nhật link favicon
   */
  function updateFaviconLink(url: string) {
    const link = document.querySelector('link[rel="icon"]') as HTMLLinkElement
    if (link) link.href = url
  }

  /**
   * Cập nhật theme color cho mobile
   */
  function updateThemeColor(color: string) {
    const meta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement
    if (meta) meta.content = color
  }

  /**
   * Giải phóng bộ nhớ URL
   */
  function cleanupURL(url: string) {
    setTimeout(() => URL.revokeObjectURL(url), 5000)
  }

  // Theo dõi thay đổi màu và cập nhật favicon
  watch(
    () => colorStore.currentColor.primary,
    (newColor) => updateFavicon(newColor),
    { immediate: true }
  )

  return { updateFavicon }
} 