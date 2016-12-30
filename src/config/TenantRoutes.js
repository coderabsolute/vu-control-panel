// The routes defined in this class only belongs to the Tenants and 
// every route must have a requireAuth by default.

import Login from '../pages/Login.vue'
import Dashboard from '../pages/Dashboard.vue'
import ChangePassword from '../pages/ChangePassword.vue'
import Profile from '../pages/Profile.vue'
import Logout from '../pages/Logout.vue'


export const TenantRoutes = [
  { path: '/', component: Login, meta: { requiresAuth: true } },
  { path: '/login', component: Login, meta: { requiresAuth: true } },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/changePassword', component: ChangePassword, meta: { requiresAuth: true } },
  { path: '/profile', component: Profile, meta: { requiresAuth: true } },
  { path: '/logout', component: Logout, meta: { requiresAuth: true } }
]
