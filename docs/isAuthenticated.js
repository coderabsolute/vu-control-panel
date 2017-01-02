// A Sample code got from internet

import jwtDecode from 'jwt-decode'
/**
 * @returns {object} or false
 */
export default function checkIsAuthenticated () {
  var token = localStorage.getItem('token')
  let decodedToken
  if (token) {
    decodedToken = jwtDecode(token)
    if (decodedToken.iat <= decodedToken.exp) {
      return {
        originalToken: token,
        user: decodedToken.user
      }
    } else {
      localStorage.removeItem('token')
      return false
    }
  } else {
    return false
  }