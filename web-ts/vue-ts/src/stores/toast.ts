import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'
// Import directly from the package without specifying ToastOptions
import type { TYPE } from 'vue-toastification/dist/types'
import { useColorStore } from './color'

// Define our own CustomToastOptions interface
interface CustomToastOptions {
  position?: string;
  toastClassName?: string;
  bodyClassName?: string;
  closeButton?: boolean;
  icon?: boolean;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnFocusLoss?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  draggablePercent?: number;
  showCloseButtonOnHover?: boolean;
  rtl?: boolean;
  timeout?: number;
  style?: Record<string, string>;
}

// Use any for toast options type since we can't properly import ToastOptions
type ToastOptionsType = any;

export const useToastStore = defineStore('toast', () => {
  const toast = useToast()
  const colorStore = useColorStore()

  // Common toast options to avoid duplication
  const getCommonOptions = (): CustomToastOptions => {
    return {
      position: 'top-right',
      toastClassName: 'custom-toast',
      bodyClassName: 'custom-toast-body',
      closeButton: false,
      icon: true,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      rtl: false,
      style: {
        '--color-primary': colorStore.currentColor.primary,
        '--color-secondary': colorStore.currentColor.secondary,
        '--color-accent': colorStore.currentColor.accent
      }
    }
  }

  function showSuccess(message: string): void {
    const options = getCommonOptions()
    options.timeout = 3000
    toast.success(message, options as ToastOptionsType)
  }

  function showError(message: string): void {
    const options = getCommonOptions()
    options.timeout = 4000
    toast.error(message, options as ToastOptionsType)
  }

  function showInfo(message: string): void {
    const options = getCommonOptions()
    options.timeout = 3000
    toast.info(message, options as ToastOptionsType)
  }

  function showWarning(message: string): void {
    const options = getCommonOptions()
    options.timeout = 3500
    toast.warning(message, options as ToastOptionsType)
  }

  return {
    showSuccess,
    showError,
    showInfo,
    showWarning
  }
}) 