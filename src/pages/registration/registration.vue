<template>
  <card heading="Registration">
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
  import VueRouter from 'vue-router'

  export default {
    name: 'RegistrationPage',

    data () {
      return {
        vm: {
          username: ''
        }
      }
    },

    methods: {
      onSubmit () {
        var router = new VueRouter()

        router.push({ name: 'registrationSuccessful', params: { email: 'test@test.com' } })
      }
    }
  }
</script>