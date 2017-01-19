<template>
  <div>
    <div class="container topMargin">
      <div class="offset-sm-1 col-sm-8 jumbotron">

        <div class="card">
          <div class="card-block">
            <h5 class="card-title">Registered users</h5>

            <form @submit.prevent="onSubmit" class="form-inline">
              <div class="input-group">
                <div class="input-group-addon">@</div>
                <input v-model="vm.username" type="email" class="form-control" id="username" placeholder="Email address" required autofocus>
              </div>
              
              <div class="input-group">
                <div class="input-group-addon">*</div>
                <input v-model="vm.password" type="password" class="form-control" id="password" placeholder="Password" required>
              </div>

              <button type="submit" class="btn btn-primary">Log In</button>
              
              <div>
                <button @click="onForgotPassword" type="button" class="btn btn-link">Forgot Password?</button>
              </div>

            </form>
          </div>
          <h2 class="card-header"></h2>
        </div>
        
        <register></register>
      </div>
    </div>
  </div>
</template>

<script>
  import AuthService from '../../services/AuthService'

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
      AuthService.clearLocalStorage()
    },

    methods: {
      onSubmit () {
        AuthService.signIn(this.vm.username, this.vm.password)
      },

      onForgotPassword () {
        this.$router.push({ name: 'forgotPassword' })
      }
    }
  }
</script>

<style>
  .topMargin {
    padding-top: 5em;
  }
</style>