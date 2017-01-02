<template>
  <thead class="thead-inverse">
    <tr>
      <th colspan="100" class="align-text-bottom">
        <create-button v-bind:path="path"></create-button>
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