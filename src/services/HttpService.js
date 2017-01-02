import axios from 'axios'

import LocalStorageService from './LocalStorageService'
import {TOKEN_LOCAL_STORAGE} from '../config/AppConstants'
import {securedUrl} from '../config/RestApi'

export default {
  get (resource) {
    const url = this.getCompleteUrl(resource)

    return new Promise((resolve, reject) => {
      axios.get(url, this.headersConfig())
      .then(response => { resolve(response.data) })
      .catch(error => { reject(error.response.data) })
    })
  },

  getOne (resource, id) {
    const resourceWithId = resource + '/' + id

    return new Promise((resolve, reject) => {
      this.get(resourceWithId)
      .then(response => { resolve(response) })
      .catch(error => { reject(error) })
    })
  },

  put (resource, formData) {
    const url = this.getCompleteUrl(resource)

    return new Promise((resolve, reject) => {
      axios.put(url, formData, this.headersConfig())
      .then(response => { resolve(response.data) })
      .catch(error => { reject(error.response.data) })
    })
  },

  putOne (resource, id, formData) {
    const resourceWithId = resource + '/' + id

    return new Promise((resolve, reject) => {
      this.put(resourceWithId, formData, this.headersConfig())
      .then(response => { resolve(response) })
      .catch(error => { reject(error) })
    })
  },

  post (resource, formData) {
    const url = this.getCompleteUrl(resource)

    return new Promise((resolve, reject) => {
      axios.post(url, formData, this.headersConfig())
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
    const token = LocalStorageService.get(TOKEN_LOCAL_STORAGE)
    const tokenType = securedUrl.tokenType

    return tokenType + token
  },

  getCompleteUrl (resource) {
    const fullUrl = securedUrl.baseUrl + resource

    return fullUrl
  }
}
