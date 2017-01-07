<template>
  <branch-component mode="edit" :branch-id="this.$route.params.id"></branch-component>
</template>

<script>
  export default {
    name: 'BranchesEdit'
  }
</script>