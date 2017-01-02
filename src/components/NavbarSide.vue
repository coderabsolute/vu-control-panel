<template>
  <div class="list-group">
    <router-link v-for="item in routeList"
      v-bind:to="item.path"
      class="list-group-item list-group-item-action">
      <i class="fa fa-map-marker"></i>
      {{ item.name }}
    </router-link>
  </div>
</template>

<script>
  import AllRoutes from '../routes/Routes'

  export default {
    name: 'NavbarSide',

    data () {
      return {
        routeList: []
      }
    },

    created () {
      this.routeList = AllRoutes.getTenantRoutes()
    }
  }
</script>
