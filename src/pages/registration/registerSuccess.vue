<template>
  <card heading="Registration Successful!">
    <div class="form-group">
      <label>
        In the next few minutes we will be sending the confirmation email to {{ username }}.
      </label>
    </div>
  </card>
</template>

<script>
  export default {
    name: 'registerSuccessPage',

    created () {
      this.username = this.$route.params.username
    },

    data () {
      return {
        username: ''
      }
    }
  }
</script>
