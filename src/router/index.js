import { createRouter, createWebHistory } from 'vue-router'
import Form from '@/views/Form.vue'
import Preview from '@/views/Preview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/form'
    },
    {
      path: '/form',
      name: 'form',
      component: Form 
    },
    {
      path: '/preview',
      name: 'preview',
      component: Preview  
    }
  ]
})

export default router
