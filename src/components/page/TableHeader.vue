<template>
  <div>
    <create-button :path="path"></create-button>
  </div>
</template>

<script>
  export default {
    name: 'TableHeader',
    props: ['path']
  }
</script>