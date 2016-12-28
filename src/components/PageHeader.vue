<template>
  <div>
    <h1 class="display-4">{{ caption }}</h1>
    <hr />
  </div>  
</template>

<script>
  export default {
    name: 'PageHeader',
    props: ['caption']
  }
</script>