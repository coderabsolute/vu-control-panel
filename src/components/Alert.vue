<!--TODO: This component is not completed yet.
This component can be replaced with Notification Service.-->
<template>
  <div v-if="show" class="alert alert-dismissible fade in" v-bind:class="alertType" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <h4 class="alert-heading"><span class="fa" v-bind:class="icon"></span> {{ title }}</h4>
    <p>{{ message }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Alert',
    props: ['type', 'message'],
    data () {
      return {
        show: false
      }
    },

    computed: {
      title () {
        return (this.type === 'success') ? 'Well done!' : 'Oops!'
      },

      icon () {
        return (this.type === 'success') ? 'fa-check-square' : 'fa-exclamation-triangle'
      },

      alertType () {
        return (this.type === 'success') ? 'alert-success' : 'alert-danger'
      }
    },

    methods: {
      show () {
        console.log('Methods -> Show is called.')
      }
    }
  }
</script>