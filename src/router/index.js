import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactsView from '../views/ContactsView.vue'
import PartsView from '../views/PartsView.vue'
import ServiceView from '../views/ServiceView.vue'
import TechicalView from '../views/TechicalView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
   
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView
   
  },
  {
    path: '/parts',
    name: 'parts',
    component: PartsView
   
  },
  {
    path: '/service',
    name: 'service',
    component: ServiceView
   
  },
  {
    path: '/techical',
    name: 'techical',
    component: TechicalView
   
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
