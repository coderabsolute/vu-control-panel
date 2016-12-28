import Axios from 'axios'
import VueRouter from 'vue-router'

import LocalStorageService from './LocalStorageService'
import {TOKEN_LOCAL_STORAGE} from '../config/AppConstants'
import {authUrl} from '../config/RestApi'

export default {
  isAuthenticated () {
    return (this.getToken())
  },

  signIn (username, password) {
    console.log(authUrl)

    Axios({
      method: 'post',
      url: authUrl,
      data: {
        email: username,
        password: password
      }
    })
    .then(response => {
      let token = response.data.token

      // add token
      LocalStorageService.add(TOKEN_LOCAL_STORAGE, token)

      // Push to dashboard
      this.pushToDashboard()
    })
    .catch(error => { console.log(error.response) })
  },

  signOut () {
    this.clearToken()
    this.pushToLogin()
  },

  pushToDashboard () {
    var router = new VueRouter()

    router.push({ path: '/dashboard' })

    // enforce the hard reload
    window.location.reload()
  },

  pushToLogin () {
    var router = new VueRouter()

    router.push({ path: '/login' })

    // enforce the hard reload
    window.location.reload()
  },

  getToken () {
    const token = LocalStorageService.get(TOKEN_LOCAL_STORAGE)

    return token
  },

  clearToken () {
    LocalStorageService.remove(TOKEN_LOCAL_STORAGE)
  }
}
