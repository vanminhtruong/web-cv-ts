import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView/HomeView.vue')
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import('../views/SkillsView/SkillsView.vue')
  },
  {
    path: '/experience',
    name: 'experience',
    component: () => import('../views/ExperienceView/ExperienceView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
