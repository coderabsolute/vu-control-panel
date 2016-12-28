// Pages
import Login from '../pages/Login.vue'
import Dashboard from '../pages/Dashboard.vue'
import Branches from '../pages/Branches.vue'
import Logout from '../pages/Logout.vue'

export const BaseRoutes = [
  { path: '/', component: Login, meta: { requiresAuth: false } },
  { path: '/login', component: Login, meta: { requiresAuth: false } },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/branches', component: Branches, meta: { requiresAuth: true } },
  { path: '/logout', component: Logout, meta: { requiresAuth: true } }
]
