import { createRouter, createWebHashHistory } from 'vue-router' // 👈 เปลี่ยนตรงนี้
import HomeView from '../views/HomeView.vue'

const router = createRouter({
 // 👇 เปลี่ยนเป็น createWebHashHistory (ไม่ต้องใส่ import.meta.env.BASE_URL ข้างในก็ได้)
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('../views/DemoDashboardView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router