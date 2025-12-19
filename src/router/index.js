import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(), // ไม่ต้องใส่ import.meta.env.BASE_URL ก็ได้ถ้าไม่ได้ config อะไรพิเศษ
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/demo',
      name: 'demo',
      // route level code-splitting
      // this generates a separate chunk (Demo.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DemoDashboardView.vue')
    }
  ],
  // ทำให้เวลาเปลี่ยนหน้าแล้ว scroll ไปบนสุดเสมอ
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router