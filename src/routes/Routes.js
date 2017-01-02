import {BranchesRoute} from './tenant/Branches'
import {ProductsRoute} from './tenant/Products'
import {BaseRoutes} from './BaseRoutes'

export default {
  getAllRoutes () {
    let allRoutes = []

    allRoutes = allRoutes.concat(BaseRoutes)
    allRoutes = allRoutes.concat(this.getTenantRoutes())

    return allRoutes
  },

  getTenantRoutes () {
    let allRoutes = []

    allRoutes = allRoutes.concat(BranchesRoute)
    allRoutes = allRoutes.concat(ProductsRoute)

    return allRoutes
  }
}
