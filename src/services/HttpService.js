import axios from 'axios'
import AuthService from './AuthService'
import {securedUrl} from '../config/RestApi'

export default {
  get (resource) {
    const url = this.getFullUrl(resource)

    return new Promise((resolve, reject) => {
      axios.get(url, this.headersConfig())
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error.response.data)
      })
    })
  },

  put (resource, formData) {
    const url = this.getFullUrl(resource)

    return new Promise((resolve, reject) => {
      axios.put(url, formData, this.headersConfig())
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error.response.data)
      })
    })
  },

  post (resource, formData) {
    const url = this.getFullUrl(resource)

    return new Promise((resolve, reject) => {
      axios.post(url, formData, this.headersConfig())
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error.response.data)
      })
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
    const tokenType = securedUrl.tokenType

    return tokenType + token
  },

  getFullUrl (resource) {
    const fullUrl = securedUrl.baseUrl + resource

    return fullUrl
  }

}
