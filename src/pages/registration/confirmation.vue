<template>
  <card heading="Registration Confirmation">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Email address</label>
        <input v-model="vm.username" type="email" class="form-control" id="username" placeholder="your email address" required autofocus>
      </div>

      <button type="submit" class="btn btn-danger">Register</button>
    </form>
  </card>
</template>

<script>
  export default {
    name: 'ConfirmationPage',

    methods: {
      onSubmit () {
        console.log('submitted.')
      }
    }
  }
</script>