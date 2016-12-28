import axios from 'axios'
import AuthService from './AuthService'
import {securedApi} from '../config/RestApi'

export default {
  get (resource) {
    const url = this.getFullUrl(resource)

    return new Promise((resolve, reject) => {
      axios.get(url, this.headersConfig())
      .then(response => { resolve(response.data) })
      .catch(error => { reject(error.response.data) })
    })
  },

  post (resource, formData) {
    const url = this.getFullUrl(resource)

    return new Promise((resolve, reject) => {
      axios.get(url, formData, this.headersConfig())
      .then(response => { resolve(response.data) })
      .catch(error => { reject(error.response.data) })
    })
  },

  headersConfig () {
    return {
      headers: {
        'Authorization': this.getAuthHeader(),
        'Content-Type': 'application/json'
      }
    }
  },

  getAuthHeader () {
    const token = AuthService.getToken()
    const tokenType = securedApi.tokenType

    return tokenType + token
  },

  getFullUrl (resource) {
    const fullUrl = securedApi.baseUrl + resource

    return fullUrl
  }

}
