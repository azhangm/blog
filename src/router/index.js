import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PubBlog from '@/views/PubBlog.vue'
import LoginView from '@/views/LoginView'
import RegisterView from '@/views/RegisterView'
import TeasView from '@/views/TeasView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/user/blog/',
    name: 'pubBlog',
    component: PubBlog
  },
  {
    path: '/user/login/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/user/register/',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/user/blog/',
    name: 'pubBlog',
    component: PubBlog
  },
  {
    path: '/user/teas/',
    name: 'teas',
    component: TeasView
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
