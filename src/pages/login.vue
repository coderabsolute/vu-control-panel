<template>
  <div class="container">
    <div class=" col-sm-6">
      <h1 class="text-center">{{vm.pageTitle}}</h1>
      <form v-on:submit="login">
        <div class="form-group">
          <label>Username</label>
          <input v-model="vm.username" type="email" class="form-control" id="username" placeholder="Username" required autofocus>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input v-model="vm.password" type="password" class="form-control" id="password" placeholder="Password" required>
        </div>

        <button type="submit" class="btn btn-success btn-block">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import AuthService from '../services/AuthService'

export default {
  name: 'login',
  data () {
    return {
      vm: {
        pageTitle: 'Login',
        username: 'test@test.com',
        password: 'test'
      }
    }
  },

  methods: {
    login () {
      AuthService.signIn(this.vm.username, this.vm.password)
    }
  }
}
</script>