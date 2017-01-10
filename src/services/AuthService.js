import Axios from 'axios'
import VueRouter from 'vue-router'

import LocalStorageService from './LocalStorageService'
import { TOKEN_LOCAL_STORAGE, NAME } from '../config/AppConstants'
import { authUrl } from '../config/RestApi'

export default {
  isAuthenticated () {
    return (this.getToken())
  },

  signIn (username, password) {
    Axios({
      method: 'post',
      url: authUrl,
      data: {
        email: username,
        password: password
      }
    })
    .then(response => {
      LocalStorageService.add(TOKEN_LOCAL_STORAGE, response.data.token)
      LocalStorageService.add(NAME, response.data.name)

      this.redirectToDashboard()
    })
    .catch(error => { console.error(error.response) })
  },

  signOut () {
    this.clearLocalStorage()
    this.redirectToLogin()
  },

  redirectToDashboard () {
    var router = new VueRouter()

    router.push({ path: '/dashboard' })

    // enforce the hard reload
    window.location.reload()
  },

  redirectToLogin () {
    var router = new VueRouter()

    router.push({ path: '/login' })

    // enforce the hard reload
    window.location.reload()
  },

  getToken () {
    const token = LocalStorageService.get(TOKEN_LOCAL_STORAGE)

    return token
  },

  clearLocalStorage () {
    LocalStorageService.remove(TOKEN_LOCAL_STORAGE)
    LocalStorageService.remove(NAME)
  }
}
