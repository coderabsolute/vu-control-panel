<template>
  <button v-on:click="cancel" type="button" class="btn btn-secondary">Cancel</button>
</template>

<script>
  export default {
    name: 'CancelButton',
    methods: {
      cancel () {
        this.$router.go(-1)
      }
    }
  }
</script>
