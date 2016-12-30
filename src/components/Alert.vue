<template>
  <div v-bind:class="{this.setting.alertType}" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <h4 class="alert-heading"><span class="fa fa-check-square"></span> {{setting.header}}</h4>
    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
    <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
  </div>
</template>

<script>
  export default {
    name: 'Alert',
    props: ['type'],

    data () {
      return {
        setting: {
          header: '',
          faIcon: '',
          alertType: ''
        }
      }
    },

    computed () {
      console.log('computed')
    },

    beforeCreate () {
      if (this.type === 'success') {
        this.setting = {
          header: 'Well done!',
          faIcon: 'fa fa-check-square',
          alertType: 'alert alert-success alert-dismissible fade in'
        }
      } else {
        this.setting = {
          header: 'Oops!',
          faIcon: 'fa fa-exclamation-triangle',
          alertType: 'alert alert-warning alert-dismissible fade in'
        }
      }
    }
  }
</script>