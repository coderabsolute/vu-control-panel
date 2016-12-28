import LocalStorageService from './LocalStorageService'
import {TOKEN_LOCAL_STORAGE} from '../config/AppConstants'
import Axios from 'axios'
import VueRouter from 'vue-router'

export default {
  isAuthenticated () {
    const token = LocalStorageService.get(TOKEN_LOCAL_STORAGE)

    return (token)
  },

  signIn (username, password) {
    Axios({
      method: 'post',
      url: 'http://52.39.73.158/v1/auth',
      data: {
        email: username,
        password
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

  pushToDashboard () {
    var router = new VueRouter()

    router.push({ path: 'dashboard' })
  },

  clearToken () {
    LocalStorageService.remove(TOKEN_LOCAL_STORAGE)
  },

  signOut () {
    this.clearToken()
  }
}
