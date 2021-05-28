import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bemorlar',
    name: 'Bemorlar',
    component: () => import('../views/bemorlar/Bemorlar.vue')
  },
  {
    path: '/hodimlar',
    name: 'Hodimlar',
    component: () => import('../views/hodimlar/Hodimlar.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
