<template>
  <div id="app">
    <!--Top navigation bar is only shown to authenticated users-->
    <navbar-top v-if="isAuthenticated"></navbar-top>

    <div class="container-fluid">
      <div class="row">

        <!--Side navigation bar is only shown to authenticated users-->
        <div class="col-sm-3 col-md-2 sidebar">
          <navbar-side v-if="isAuthenticated"></navbar-side>
        </div>

        <!--The pages gets injected here based on the router selection-->
        <div class="col-sm-9 col-md-10 main">
          <router-view></router-view>
        </div>

        <notifications :auto-remove="true" :auto-remove-time="2500"></notifications>
      </div>
  </div>
</template>

<script>
  import NavbarTop from './components/NavbarTop.vue'
  import NavbarSide from './components/NavbarSide.vue'
  import AuthService from './services/AuthService'

  export default {
    name: 'app',
    components: { NavbarTop, NavbarSide },
    data () {
      return {
        isAuthenticated: AuthService.isAuthenticated()
      }
    }
  }
</script>

<style>
  .fa-check {
    color: green
  }
</style>
