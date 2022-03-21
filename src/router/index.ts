import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Auth from '../views/Auth.vue'
import Main from '../views/Main.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Главная',
    component: Auth
  },
  {
    path: '/chat',
    name: 'Чат',
    component: Main
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
