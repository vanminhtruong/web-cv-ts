import { computed } from 'vue'

/**
 * Composable để xử lý đường dẫn tài nguyên (hình ảnh, PDF, v.v.) cho cả môi trường phát triển và GitHub Pages
 */
export function useAssetPath() {
  /**
   * Kiểm tra xem ứng dụng có đang chạy trên GitHub Pages không
   */
  const isGitHubPages = computed(() => {
    return window.location.href.includes('/web-cv-ts/')
  })

  /**
   * Tạo đường dẫn đúng cho tài nguyên dựa trên môi trường
   * @param path Đường dẫn tương đối của tài nguyên
   * @returns Đường dẫn đầy đủ phù hợp với môi trường
   */
  const getAssetPath = (path: string): string => {
    // Đảm bảo path bắt đầu bằng dấu /
    const normalizedPath = path.startsWith('/') ? path : `/${path}`
    
    // Nếu đang ở GitHub Pages, thêm base path
    return isGitHubPages.value 
      ? `/web-cv-ts${normalizedPath}` 
      : normalizedPath
  }

  return {
    isGitHubPages,
    getAssetPath
  }
} 