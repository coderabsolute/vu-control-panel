import Products from '../../pages/tenant/products/Products.vue'
import ProductsList from '../../pages/tenant/products/List.vue'
import ProductsCreate from '../../pages/tenant/products/Create.vue'
import ProductsEdit from '../../pages/tenant/products/Edit.vue'
import ProductsImportFromFile from '../../pages/tenant/products/ImportFromFile.vue'

export const ProductsRoute = [
  {
    name: 'Products',
    path: '/products/:id',
    component: resolve => resolve(Products),
    meta: { requiresAuth: true, owner: 'tenant' },
    children: [
      { path: '', component: resolve => resolve(ProductsList) },
      { path: 'create', component: resolve => resolve(ProductsCreate) },
      { path: 'edit', component: resolve => resolve(ProductsEdit) },
      { path: 'importFromFile', component: resolve => resolve(ProductsImportFromFile) }
    ]
  }
]
