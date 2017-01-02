import Branches from '../../pages/tenant/branches/Branches.vue'
import BranchesList from '../../pages/tenant/branches/List.vue'
import BranchesCreate from '../../pages/tenant/branches/Create.vue'
import BranchesEdit from '../../pages/tenant/branches/Edit.vue'

export const BranchesRoute = [
  {
    name: 'Branches',
    path: '/branches/:id',
    component: resolve => resolve(Branches),
    meta: { requiresAuth: true, owner: 'tenant' },
    children: [
      { path: '', component: resolve => resolve(BranchesList) },
      { path: 'create', component: resolve => resolve(BranchesCreate) },
      { path: 'edit', component: resolve => resolve(BranchesEdit) }
    ]
  }
]
