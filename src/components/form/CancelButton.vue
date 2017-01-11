<template>
  <button v-on:click="onClick" type="button" class="btn btn-secondary">Cancel</button>
</template>

<script>
  export default {
    name: 'CancelButton',
    methods: {
      onClick () {
        this.$router.go(-1)
      }
    }
  }
</script>
