<template>
  <div class="language-switcher">
    <div class="custom-select" @click="toggleDropdown" ref="selectContainer">
      <div class="selected-option">
        <span v-if="currentLocale === 'en'" class="flag-option">
          <div class="flag-icon flag-us"></div> English
        </span>
        <span v-else-if="currentLocale === 'ko'" class="flag-option">
          <div class="flag-icon flag-kr"></div> 한국어
        </span>
        <span v-else-if="currentLocale === 'vi'" class="flag-option">
          <div class="flag-icon flag-vn"></div> Tiếng Việt
        </span>
        <span v-else-if="currentLocale === 'zh'" class="flag-option">
          <div class="flag-icon flag-cn"></div> 中文
        </span>
        <span v-else-if="currentLocale === 'es'" class="flag-option">
          <div class="flag-icon flag-es"></div> Español
        </span>
        <span v-else-if="currentLocale === 'fr'" class="flag-option">
          <div class="flag-icon flag-fr"></div> Français
        </span>
        <!-- Mũi tên với hiệu ứng xoay -->
        <svg xmlns="http://www.w3.org/2000/svg" 
             class="h-4 w-4 ml-1 transition-transform duration-300 ease-in-out" 
             :class="{ 'rotate-180': isOpen }" 
             viewBox="0 0 20 20" 
             :fill="colorStore.currentColor.primary">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </div>
      <ul class="options-list" v-show="isOpen">
        <li 
          @click.stop="selectOption('en')" 
          :class="{'active': currentLocale === 'en'}"
          :style="{'--hover-bg-color': colorStore.currentColor.primary + '33', '--active-bg-color': colorStore.currentColor.primary}"
          class="flag-option"
        >
          <div class="flag-icon flag-us"></div> English
        </li>
        <li 
          @click.stop="selectOption('ko')" 
          :class="{'active': currentLocale === 'ko'}"
          :style="{'--hover-bg-color': colorStore.currentColor.primary + '33', '--active-bg-color': colorStore.currentColor.primary}"
          class="flag-option"
        >
          <div class="flag-icon flag-kr"></div> 한국어
        </li>
        <li 
          @click.stop="selectOption('vi')" 
          :class="{'active': currentLocale === 'vi'}"
          :style="{'--hover-bg-color': colorStore.currentColor.primary + '33', '--active-bg-color': colorStore.currentColor.primary}"
          class="flag-option"
        >
          <div class="flag-icon flag-vn"></div> Tiếng Việt
        </li>
        <li 
          @click.stop="selectOption('zh')" 
          :class="{'active': currentLocale === 'zh'}"
          :style="{'--hover-bg-color': colorStore.currentColor.primary + '33', '--active-bg-color': colorStore.currentColor.primary}"
          class="flag-option"
        >
          <div class="flag-icon flag-cn"></div> 中文
        </li>
        <li 
          @click.stop="selectOption('es')" 
          :class="{'active': currentLocale === 'es'}"
          :style="{'--hover-bg-color': colorStore.currentColor.primary + '33', '--active-bg-color': colorStore.currentColor.primary}"
          class="flag-option"
        >
          <div class="flag-icon flag-es"></div> Español
        </li>
        <li 
          @click.stop="selectOption('fr')" 
          :class="{'active': currentLocale === 'fr'}"
          :style="{'--hover-bg-color': colorStore.currentColor.primary + '33', '--active-bg-color': colorStore.currentColor.primary}"
          class="flag-option"
        >
          <div class="flag-icon flag-fr"></div> Français
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLanguageSwitcher } from '../composables/useLanguageSwitcher'

const {
  colorStore,
  themeStore,
  currentLocale,
  isOpen,
  selectContainer,
  toggleDropdown,
  selectOption
} = useLanguageSwitcher()
</script>

<script lang="ts">
export default {
  name: 'LanguageSwitcher'
}
</script>

<style scoped>
.language-switcher {
  margin: 0 1rem;
  position: relative;
}

.custom-select {
  position: relative;
  user-select: none;
  min-width: 125px;
}

.selected-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #f1f5f9;
  color: #334155;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.options-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 0.25rem;
  padding: 0;
  list-style: none;
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid #ccc;
  z-index: 50;
  overflow-y: visible;
}

.options-list li {
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.options-list li:hover {
  background-color: var(--hover-bg-color);
}

.options-list li.active {
  background-color: var(--active-bg-color);
  color: white;
}

/* Dark mode styles */
.dark .selected-option {
  background-color: var(--bg-secondary, #1e293b);
  border-color: var(--card-border, #475569);
  color: var(--text-primary, #f8fafc);
}

.dark .options-list {
  background-color: var(--bg-primary, #0f172a);
  border-color: var(--card-border, #4B5563);
  color: var(--text-primary, #E5E7EB);
}

.flag-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Flag icons */
.flag-icon {
  width: 24px;
  height: 16px;
  border-radius: 1px;
  flex-shrink: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 0.5px solid rgba(0,0,0,0.1);
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

/* USA Flag - Chính xác theo tỷ lệ 10:19 */
.flag-us {
  background: 
    linear-gradient(to bottom, 
      #B22234 0%, #B22234 7.69%, 
      #FFFFFF 7.69%, #FFFFFF 15.38%,
      #B22234 15.38%, #B22234 23.08%,
      #FFFFFF 23.08%, #FFFFFF 30.77%,
      #B22234 30.77%, #B22234 38.46%,
      #FFFFFF 38.46%, #FFFFFF 46.15%,
      #B22234 46.15%, #B22234 53.85%,
      #FFFFFF 53.85%, #FFFFFF 61.54%,
      #B22234 61.54%, #B22234 69.23%,
      #FFFFFF 69.23%, #FFFFFF 76.92%,
      #B22234 76.92%, #B22234 84.62%,
      #FFFFFF 84.62%, #FFFFFF 92.31%,
      #B22234 92.31%, #B22234 100%);
  position: relative;
}
.flag-us::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 38%;
  height: 53.8%;
  background: #3C3B6E;
}
.flag-us::after {
  content: '⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐';
  position: absolute;
  top: 1px;
  left: 1px;
  width: 36%;
  height: 51%;
  color: #FFFFFF;
  font-size: 1.5px;
  line-height: 2px;
  letter-spacing: -0.5px;
  overflow: hidden;
}

/* South Korea Flag - Taegeukgi chi tiết */
.flag-kr {
  background: #FFFFFF;
  position: relative;
}
.flag-kr::before {
  content: '';
  position: absolute;
  top: 7px;
  left: 11px;
  width: 6px;
  height: 6px;
  background: 
    radial-gradient(ellipse 3px 1.5px at 1.5px 1.5px, #003478 0%, #003478 100%, transparent 100%),
    radial-gradient(ellipse 3px 1.5px at 4.5px 4.5px, #CD2E3A 0%, #CD2E3A 100%, transparent 100%),
    conic-gradient(from 0deg, #CD2E3A 0deg, #CD2E3A 180deg, #003478 180deg, #003478 360deg);
  border-radius: 50%;
  transform: rotate(0deg);
}
.flag-kr::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  background-image:
    /* Geon (Heaven) - top left */
    linear-gradient(45deg, #000 0%, #000 15%, transparent 15%, transparent 25%, #000 25%, #000 40%, transparent 40%, transparent 50%, #000 50%, #000 65%, transparent 65%, transparent 75%, #000 75%, #000 90%, transparent 90%),
    /* Ri (Fire) - bottom right */
    linear-gradient(225deg, #000 0%, #000 15%, transparent 15%, transparent 25%, #000 25%, #000 40%, transparent 40%, transparent 60%, #000 60%, #000 75%, transparent 75%, transparent 85%, #000 85%, #000 100%),
    /* Gam (Water) - top right */
    linear-gradient(-45deg, #000 0%, #000 15%, transparent 15%, transparent 35%, #000 35%, #000 50%, transparent 50%, transparent 70%, #000 70%, #000 85%, transparent 85%),
    /* Gon (Earth) - bottom left */
    linear-gradient(135deg, #000 0%, #000 15%, transparent 15%, transparent 35%, #000 35%, #000 50%, transparent 50%, transparent 70%, #000 70%, #000 85%, transparent 85%);
  background-size: 3px 8px, 3px 8px, 3px 8px, 3px 8px;
  background-position: 1px 1px, calc(100% - 4px) calc(100% - 9px), calc(100% - 4px) 1px, 1px calc(100% - 9px);
  background-repeat: no-repeat;
}

/* Vietnam Flag - Chi tiết ngôi sao năm cánh */
.flag-vn {
  background: #DA020E;
  position: relative;
}
.flag-vn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  transform: translate(-50%, -50%);
  background: #FFFF00;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

/* China Flag - Năm sao chi tiết */
.flag-cn {
  background: #DE2910;
  position: relative;
}
.flag-cn::before {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 4px;
  height: 4px;
  background: #FFDE00;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}
.flag-cn::after {
  content: '';
  position: absolute;
  background: #FFDE00;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  box-shadow: 
    /* Sao nhỏ 1 */
    5px 1px 0 0 #FFDE00,
    /* Sao nhỏ 2 */  
    6px 3px 0 0 #FFDE00,
    /* Sao nhỏ 3 */
    6px 6px 0 0 #FFDE00,
    /* Sao nhỏ 4 */
    4px 7px 0 0 #FFDE00;
  width: 1.5px;
  height: 1.5px;
  top: 2px;
  left: 8px;
}

/* Spain Flag - Chi tiết với quốc huy */
.flag-es {
  background: linear-gradient(to bottom, 
    #AA151B 0%, #AA151B 25%, 
    #F1BF00 25%, #F1BF00 75%, 
    #AA151B 75%, #AA151B 100%);
  position: relative;
}
.flag-es::before {
  content: '';
  position: absolute;
  top: 6px;
  left: 7px;
  width: 10px;
  height: 4px;
  background: 
    radial-gradient(ellipse at center, #FFD700 0%, #FFD700 30%, #8B0000 30%, #8B0000 50%, #FFD700 50%, #FFD700 70%, #8B0000 70%);
  border: 0.5px solid #000;
  border-radius: 1px;
}
.flag-es::after {
  content: '♛';
  position: absolute;
  top: 4px;
  left: 11px;
  font-size: 4px;
  color: #FFD700;
  text-shadow: 0 0 0.5px #000;
}

/* France Flag - Tỷ lệ chính xác 30:33:37 */
.flag-fr {
  background: linear-gradient(to right, 
    #002654 0%, #002654 30%, 
    #FFFFFF 30%, #FFFFFF 63%, 
    #ED2939 63%, #ED2939 100%);
  position: relative;
}
.flag-fr::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, 
    #002654 0%, #002654 30%, 
    #FFFFFF 30%, #FFFFFF 63%, 
    #ED2939 63%, #ED2939 100%);
  box-shadow: inset 0 0 1px rgba(0,0,0,0.1);
}
</style>
