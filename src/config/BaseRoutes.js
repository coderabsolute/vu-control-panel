// Standard Routes for all the users.
import Login from '../pages/Login.vue'
import Dashboard from '../pages/Dashboard.vue'
import ChangePassword from '../pages/ChangePassword.vue'
import Profile from '../pages/Profile.vue'
import Logout from '../pages/Logout.vue'

export const BaseRoutes = [
  { path: '/', component: Login, meta: { requiresAuth: false, owner: 'base' } },
  { path: '/login', component: Login, meta: { requiresAuth: false, owner: 'base' } },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true, owner: 'base' } },
  { path: '/changePassword', component: ChangePassword, meta: { requiresAuth: true, owner: 'base' } },
  { path: '/profile', component: Profile, meta: { requiresAuth: true, owner: 'base' } },
  { path: '/logout', component: Logout, meta: { requiresAuth: true, owner: 'base' } }
]
