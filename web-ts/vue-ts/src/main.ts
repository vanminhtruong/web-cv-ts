import './assets/tailwind.css'
import './assets/main.css'
import './assets/css/colors.css'
import './assets/css/themes.css'
import './assets/css/toast.css'

import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './i18n'

const savedTheme = localStorage.getItem('theme') || 'light'
if (savedTheme !== 'light') {
  document.documentElement.classList.add('dark')
  document.documentElement.classList.add(`theme-${savedTheme}`)
}

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(i18n)
app.use(Toast)

app.mount('#app')
