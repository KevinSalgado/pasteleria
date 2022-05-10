import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pastelero',
    name: 'pastelero',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pastelero.vue')
  },
  {
    path: '/pedir',
    name: 'pedir',

    component: () => import(/* webpackChunkName: "about" */ '../views/Pedir.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
