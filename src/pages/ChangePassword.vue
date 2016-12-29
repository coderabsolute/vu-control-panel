<template>
  <div>
    <page-header caption="Change Password"></page-header>

    <form v-on:submit="submit">
      <div class="form-group row">
        <div class="col-sm-4">
          <label>Current Password</label>
          <input v-model="vm.oldPassword" type="password" class="form-control" placeholder="Password" required autofocus>
        </div>        
      </div>

      <div class="form-group row">
        <div class="col-sm-4">
          <label>New Password</label>
          <input v-model="vm.newPassword" type="password" class="form-control" placeholder="Password" required>
        </div>
      </div>

      <div class="form-group row">
        <div class="col-sm-4">
          <label>Re-enter Password</label>
          <input v-model="vm.reEnterPassword" type="password" class="form-control" placeholder="Password" required>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Update Changes</button>
    </form>
  </div>
</template>

<script>
  import HttpService from '../services/HttpService'

  export default {
    name: 'ChangePassword',
    data () {
      return {
        vm: {
          oldPassword: '',
          newPassword: '',
          reEnterPassword: ''
        }
      }
    },

    methods: {
      submit () {
        const json = {
          oldPassword: this.vm.oldPassword,
          newPassword: this.vm.newPassword,
          reEnterNewPassword: this.vm.reEnterPassword
        }

        HttpService.put('changePassword', json)
        .then(console.log)
        console.log(json)
      }
    }
  }
</script>