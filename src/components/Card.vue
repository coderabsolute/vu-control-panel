<template>
  <div class="card">
    <h2 class="card-header headerStyle">{{heading}}</h2>
    <div class="card-block">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CardComponent',
    props: ['heading']
  }
</script>

<style>
  .headerStyle {
    color: blueviolet
  }
</style>