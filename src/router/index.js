import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Parking from '../views/Parking'
import EditParking from '../views/EditParking'
import Users from '../views/Users'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/parking',
    name: 'Parking',
    component: Parking,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/editParking',
    name: 'EditParking',
    component: EditParking
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requiresAuth) === true &&
    store.getters.isLoggedIn === false
  )
    next({ name: "Login" });
  else next();
});

export default router
