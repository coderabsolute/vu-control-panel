// This class is responsible to merge all the routes
// and pass it to the main.js
import {TenantRoutes} from './TenantRoutes'
import {BaseRoutes} from './BaseRoutes'

export default {
  getAllRoutes () {
    let allRoutes = []

    allRoutes = allRoutes.concat(BaseRoutes)
    allRoutes = allRoutes.concat(TenantRoutes)

    return allRoutes
  },

  getAllNonBaseRoutes () {
    let allRoutes = []

    allRoutes = allRoutes.concat(TenantRoutes)

    return allRoutes
  }
}
