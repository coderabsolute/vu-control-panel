<template></template>

<script>
import AuthService from '../services/AuthService'

export default {
  name: 'Logout',
  beforeCreate () {
    AuthService.signOut()
  }
}
</script>