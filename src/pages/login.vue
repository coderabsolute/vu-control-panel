<template>
  <div class="container">
    <div class=" col-sm-6">
      <page-header caption="Login"></page-header>

      <form v-on:submit="login">
        
        <div class="form-group">
          <label>Username</label>
          <input v-model="vm.username" type="email" class="form-control" id="username" placeholder="Username" required autofocus>
        </div>
        
        <div class="form-group">
          <label>Password</label>
          <input v-model="vm.password" type="password" class="form-control" id="password" placeholder="Password" required>
        </div>

        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
  import AuthService from '../services/AuthService'

  export default {
    name: 'Login',
    data () {
      return {
        vm: {
          username: 'test@test.com',
          password: 'test'
        }
      }
    },

    beforeCreate () {
      // TODO: Other way is to redirect the user to dashboard forcefully.
      // This could be the improvement for future.
      AuthService.clearToken()
    },

    methods: {
      login () {
        AuthService.signIn(this.vm.username, this.vm.password)
      }
    }
  }
</script>