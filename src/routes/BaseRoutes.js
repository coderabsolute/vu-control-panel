// Standard Routes for all the users.
import Login from '../pages/Login.vue'
import Dashboard from '../pages/Dashboard.vue'
import ChangePassword from '../pages/ChangePassword.vue'
import Profile from '../pages/Profile.vue'
import Logout from '../pages/Logout.vue'

export const BaseRoutes = [
  { path: '/', component: resolve => resolve(Login), meta: { requiresAuth: false } },
  { path: '/login', component: resolve => resolve(Login), meta: { requiresAuth: false } },
  { path: '/dashboard', component: resolve => resolve(Dashboard), meta: { requiresAuth: true } },
  { path: '/changePassword', component: resolve => resolve(ChangePassword), meta: { requiresAuth: true } },
  { path: '/profile', component: resolve => resolve(Profile), meta: { requiresAuth: true } },
  { path: '/logout', component: resolve => resolve(Logout), meta: { requiresAuth: true } }
]
