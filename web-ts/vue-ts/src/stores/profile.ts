import { ref } from 'vue'
import { defineStore } from 'pinia'

interface SocialLinks {
  facebook: string;
  linkedin: string;
  github: string;
  youtube: string;
}

export const useProfileStore = defineStore('profile', () => {
  // Thông tin cá nhân
  const fullName = ref<string>('Trương Văn Minh')
  const jobTitle = ref<string>('Frontend Developer')
  const description = ref<string>('Frontend Developer chuyên nghiệp với kinh nghiệm phát triển giao diện người dùng.')
  const year = ref<number>(new Date().getFullYear())
  
  // Đường dẫn đến file CV
  const cvPath = ref<string>('/src/assets/file/TruongVanMinh-CV.pdf')
  
  // Thông tin liên hệ
  const socialLinks = ref<SocialLinks>({
    facebook: 'https://facebook.com/truongvanminh',
    linkedin: 'https://linkedin.com/in/truongvanminh',
    github: 'https://github.com/truongvanminh',
    youtube: 'https://youtube.com/truongvanminh'
  })

  return {
    fullName,
    jobTitle,
    description,
    year,
    socialLinks,
    cvPath
  }
}) 