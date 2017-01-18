import {BranchesRoute} from './tenant/Branches'
import {ProductsRoute} from './tenant/Products'
import {BaseRoutes} from './BaseRoutes'
import {RegistrationRoutes} from './RegistrationRoutes'

export default {
  getAllRoutes () {
    let allRoutes = []

    allRoutes = allRoutes.concat(RegistrationRoutes)
    allRoutes = allRoutes.concat(this.getTenantRoutes())
    allRoutes = allRoutes.concat(BaseRoutes)

    return allRoutes
  },

  getTenantRoutes () {
    let allRoutes = []

    allRoutes = allRoutes.concat(BranchesRoute)
    allRoutes = allRoutes.concat(ProductsRoute)

    return allRoutes
  }
}
