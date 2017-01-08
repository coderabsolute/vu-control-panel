<template>
  <thead class="thead">
    <tr>
      <th colspan="100" class="align-text-bottom">
        <create-button :path="path"></create-button>
      </th>
    </tr>
  </thead>
</template>

<script>
  export default {
    name: 'TableHeader',
    props: ['path']
  }
</script>