<template>
  <card heading="Registration Successful!">
    <div class="form-group">
      <label>
        In the next few minutes we will be sending the confirmation email to {{ email }}.
      </label>
    </div>
  </card>
</template>

<script>
  export default {
    name: 'RegistrationSuccessfulPage',

    created () {
      this.email = this.$route.params.email
    },

    data () {
      return {
        email: ''
      }
    }
  }
</script>
