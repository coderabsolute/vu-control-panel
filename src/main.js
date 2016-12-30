// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

// Route Configuration
import {BaseRoutes} from './config/BaseRoutes'

// Services
import AuthService from './services/AuthService'

// Components Registration
import PageHeader from './components/PageHeader.vue'
import Alert from './components/Alert.vue'

// install router
Vue.use(VueRouter)

// Component Global Registration
Vue.component('page-header', PageHeader)
Vue.component('alert', Alert)

// routing
const router = new VueRouter({
  routes: BaseRoutes // short for routes: routes
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
