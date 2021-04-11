import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Profil from '../views/Profil.vue'
import DetailAnime from '../views/DetailAnime.vue'
import Recommandation from '../views/Recommandation'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login

  },
  {
    path: '/recommandation',
    name: 'Recommandation',
    component: Recommandation
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil

  },
  {
    path: '/detailanime',
    name: 'DetailAnime',
    component: DetailAnime

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
