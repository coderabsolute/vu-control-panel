// The routes defined in this class only belongs to the Tenants and
// every route must have a requireAuth by default.
import Products from '../pages/tenant/Products.vue'
import Variants from '../pages/tenant/Variants.vue'

import Branches from '../pages/tenant/branches/Branches.vue'
import BranchesList from '../pages/tenant/branches/List.vue'
import BranchesCreate from '../pages/tenant/branches/Create.vue'
import BranchesEdit from '../pages/tenant/branches/Edit.vue'

export const TenantRoutes = [
  {
    name: 'Branches',
    path: '/branches/:id',
    component: Branches,
    meta: { requiresAuth: true, owner: 'tenant' },
    children: [
      { path: '', component: BranchesList },
      { path: 'create', component: BranchesCreate },
      { path: 'edit', component: BranchesEdit }
    ]
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
