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
import PageHeader from './components/PageHeader.vue'
import TableHeader from './components/TableHeader.vue'
import CreateButton from './components/CreateButton.vue'
import SubmitButton from './components/SubmitButton.vue'
import CancelButton from './components/CancelButton.vue'
import DropdownList from './components/DropdownList.vue'

// install router
Vue.use(VueRouter)

// Component Global Registration
Vue.component('page-header', PageHeader)
Vue.component('table-header', TableHeader)
Vue.component('create-button', CreateButton)
Vue.component('submit-button', SubmitButton)
Vue.component('cancel-button', CancelButton)
Vue.component('dropdown-list', DropdownList)

console.log(Routes.getAllRoutes())

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
  router                  // attaching the router
}).$mount('#app')
