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
          <input v-model="vm.reEnterNewPassword" type="password" class="form-control" placeholder="Password" required>
        </div>
      </div>

      <submit-button caption="Update Changes"></submit-button>
      <cancel-button></cancel-button>
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
          oldPassword: null,
          newPassword: null,
          reEnterNewPassword: null
        }
      }
    },

    methods: {
      submit () {
        const json = JSON.stringify(this.vm)

        HttpService.put('changePassword', json)
        .then(console.log)
      }
    }
  }
</script>