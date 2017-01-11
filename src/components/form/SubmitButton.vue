<template>
  <button type="submit" class="btn btn-primary">{{ caption }}</button>
</template>
<script>
  export default {
    name: 'SubmitButton',
    props: ['caption']
  }
</script>