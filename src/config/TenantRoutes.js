// The routes defined in this class only belongs to the Tenants and
// every route must have a requireAuth by default.
import Branches from '../pages/tenant/Branches.vue'
import Products from '../pages/tenant/Products.vue'
import Variants from '../pages/tenant/Variants.vue'

export const TenantRoutes = [
  {
    name: 'Branches',
    path: '/branches',
    component: Branches,
    meta: { requiresAuth: true, owner: 'tenant' }
  },
  {
    name: 'Products',
    path: '/products',
    component: Products,
    meta: { requiresAuth: true, owner: 'tenant' }
  },
  {
    name: 'Variants',
    path: '/variants',
    component: Variants,
    meta: { requiresAuth: true, owner: 'tenant' }
  }
]
