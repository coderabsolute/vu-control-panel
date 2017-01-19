<template>
  <div id="app">
    <!--Top navigation bar is only shown to authenticated users-->
    <navbar-top v-if="isAuthenticated"></navbar-top>

    <div class="container-fluid">
      <div class="row">

        <!--Side navigation bar is only shown to authenticated users-->
        <div class="col-sm-1 sidebar" style="padding: 0em;">
          <navbar-side v-if="isAuthenticated"></navbar-side>
        </div>

        <!--The pages gets injected here based on the router selection-->
        <div class="col-sm-11 main" style="padding-right: 0em;">
          <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<script>
  import NavbarTop from './components/navigation/NavbarTop.vue'
  import NavbarSide from './components/navigation/NavbarSide.vue'
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
