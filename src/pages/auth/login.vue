<template>
  <div>
    <div class="container" style="padding-top: 10em;">
      <div class="col-sm-8">
        
        <div class="card">
          <h3 class="card-header">Control Panel - Login</h3>
          <div class="card-block backgroundColor">
            <form @submit.prevent="onSubmit">
              <div class="form-group">
                <label>Email address</label>
                <input v-model="vm.username" type="email" class="form-control" id="username" placeholder="Username" required autofocus>
              </div>
              
              <div class="form-group">
                <label>Password</label>
                <input v-model="vm.password" type="password" class="form-control" id="password" placeholder="Password" required>
              </div>

              <button type="submit" class="btn btn-danger">Login</button>
            </form>
          </div>
        </div>

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
      }
    }
  }
</script>