import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/VistaPrincipal.vue'
import GeneroPeliculaView from '../views/GeneroPeliculaView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/genero/:id',
    name: 'genero',
    component: GeneroPeliculaView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
