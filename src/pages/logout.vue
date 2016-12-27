<template>
  <!--Template may not be needed, so get rid of this template code.-->
  <h1>Logout</h1>
</template>

<script>
import AuthService from '../services/AuthService'

export default {
  name: 'logout',
  created () {
    AuthService.signOut()
  }
}
</script>