<template>
<h1>Dashboard</h1>
</template>

<script>
// import {AuthService} from '../services/AuthService'

export default {
  name: 'Dashboard',
  data () {
    console.log('Data is called.')
    return {
      any: {
        pageTitle: 'Branches'
      }
    }
  },

  created () {
    console.log('created is called.')
  }
}
</script>