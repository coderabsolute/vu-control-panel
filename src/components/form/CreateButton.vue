<template>
  <div>
    <button v-on:click="onClick" type="button" class="btn btn-danger">
      Create New Record
    </button>
  </div>
</template>

<script>
  export default {
    name: 'CreateButton',
    props: ['path'],

    methods: {
      onClick () {
        this.$router.push(this.path)
      }
    }
  }
</script>