// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

// Route Configuration
import Routes from './routes/Routes'

// Services
import AuthService from './services/AuthService'

// Components
// import PageHeader from './components/PageHeader.vue'
const PageHeader = (resolve) => require(['./components/page/PageHeader.vue'], resolve)
const TableHeader = (resolve) => require(['./components/page/TableHeader.vue'], resolve)

const Notifications = (resolve) => require(['./components/Notification.vue'], resolve)

// Form Components
const CreateButton = (resolve) => require(['./components/form/CreateButton.vue'], resolve)
const SubmitButton = (resolve) => require(['./components/form/SubmitButton.vue'], resolve)
const CancelButton = (resolve) => require(['./components/form/CancelButton.vue'], resolve)
const DropdownList = (resolve) => require(['./components/form/DropdownList.vue'], resolve)

// Tenant Components
const BranchComponent = (resolve) => require(['./components/tenant/BranchComponent.vue'], resolve)

// install router
Vue.use(VueRouter)

// Component Global Registration
Vue.component('page-header', PageHeader)
Vue.component('table-header', TableHeader)
Vue.component('create-button', CreateButton)
Vue.component('submit-button', SubmitButton)
Vue.component('cancel-button', CancelButton)
Vue.component('dropdown-list', DropdownList)
Vue.component('notifications', Notifications)

// Tenant
Vue.component('branch-component', BranchComponent)

let bus = new Vue()

// routing
const router = new VueRouter({
  routes: Routes.getAllRoutes()
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const isAuthenticated = AuthService.isAuthenticated()

    if (!isAuthenticated) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
    next()
  } else {
    next() // make sure to always call next()!
  }
})

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  data () {
    return {
      bus: bus
    }
  },
  router                  // attaching the router
}).$mount('#app')
