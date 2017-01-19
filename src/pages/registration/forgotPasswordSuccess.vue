<template>
  <card heading="Check your email">
    <div>
      We have just sent you an email at <strong><mark>{{ username }}</mark></strong> with instructions to reset your password.
    </div>

    <p>
      Just in-case, if you haven't received the email then please 
      <button @click="onResend" type="button" class="btn btn-default">Click here</button>
       to Resend.
    </p>
  </card>
</template>

<script>
  export default {
    name: 'ForgotPasswordSuccessPage',

    created () {
      this.username = this.$route.params.username
    },

    methods: {
      onResend () {
        console.log('You have clicked onResend()')
      }
    }
  }
</script>