import { createRouter, createWebHashHistory } from 'vue-router'
import CardsGenerator from '@/components/CardsGenerator.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/generate',
      name: 'generate',
      component: CardsGenerator
    },
  ]
})

export default router
