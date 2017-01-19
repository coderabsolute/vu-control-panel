<template>
  <card heading="Forgotten the password?">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <input v-model="vm.username" type="email" class="form-control" id="username" placeholder="Re enter your email or username" required autofocus>
      </div>

      <div class="form-group">
        <button type="submit" class="btn btn-success">Recover Password</button>
      </div>
    </form>
  </card>
</template>

<script>
  export default {
    name: 'ForgotPasswordPage',

    data () {
      return {
        vm: {
          username: ''
        }
      }
    },

    methods: {
      onSubmit () {
        this.$router.push({ name: 'forgotPasswordSuccess', params: { username: this.vm.username } })
      }
    }
  }
</script>