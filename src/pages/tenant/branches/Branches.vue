<template>
  <div>
    <div class="card">
    <h2 class="card-header">Branches</h2>
    <div class="card-block">
      <router-view></router-view>
    </div>
  </div>
    
  </div>  
</template>

<script>
  export default {
    name: 'Branches'
  }
</script>