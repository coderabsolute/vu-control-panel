<template>
  <div>
    <button v-on:click="redirectToCreate" type="button" class="btn btn-danger">Create New</button>
  </div>  
</template>
<script>
  export default {
    name: 'CreateButton',
    props: ['path'],
    methods: {
      redirectToCreate () {
        this.$router.push(this.path)
      }
    }
  }
</script>