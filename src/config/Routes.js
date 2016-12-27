// Pages
import login from '../pages/login.vue'
import dashboard from '../pages/dashboard.vue'
import branches from '../pages/branches.vue'
import logout from '../pages/logout.vue'

export const parentRoutes = [
  { path: '/login', component: login, meta: { requiresAuth: false } },
  { path: '/dashboard', component: dashboard, meta: { requiresAuth: true } },
  { path: '/branches', component: branches, meta: { requiresAuth: true } },
  { path: '/logout', component: logout, meta: { requiresAuth: true } }
]
