import { createRouter, createWebHistory } from 'vue-router'
import CardsGenerator from '@/components/CardsGenerator.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CardsGenerator
    },
  ]
})

export default router
