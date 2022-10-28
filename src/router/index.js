import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Contacts from '../views/Contacts.vue'
import Inbox from '../views/Inbox.vue'
import Notepad from '../views/Notepad.vue'
const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'Login',
   
    component: Login
  },
  {
    path: '/',
    name: 'Dashboard',
   
    component: Dashboard
  },
  {
    path: '/contacts',
    name: 'Contacts',
   
    component: Contacts
  },
  {
    path: '/inbox',
    name: 'Inbox',
   
    component: Inbox
  },
  {
    path: '/notepad',
    name: 'Notepad',
   
    component: Notepad
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
