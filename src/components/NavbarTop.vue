<template>
  <nav class="navbar navbar-static-top navbar-dark bg-inverse">
    <router-link to="/dashboard" class="navbar-brand">Control Panel Beta 1.0</router-link>

    <ul class="nav navbar-nav">
      <!--Just to provide a bit of spacing, maybe this can be extended with css property as an improvement.-->
      <li class="nav-item">
        <span>&nbsp; &nbsp; &nbsp;</span>
      </li>

      <li class="nav-item active">
        <div class="nav-link">

          <div class="btn-group">
            <span class="dropdown-toggle" style="color: white" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Configuration
            </span>

            <div class="dropdown-menu dropdown-menu-right">
                <router-link v-for="item in routeList"
                  v-bind:to="item.path"
                  class="dropdown-item">
                  <i class="fa fa-map-marker"></i>
                  {{ item.name }}
                  <div class="dropdown-divider"></div>
                </router-link>
            </div>
          </div>

        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Reports</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Reports</a>
      </li>
    </ul>

    <div class="float-xs-right">
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fa fa-cog"></i> Dropdown button
        </button>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <router-link to="/dashboard" class="dropdown-item">
            <i class="fa fa-th" aria-hidden="true"></i>
            Dashboard
          </router-link>
          
          <router-link to="/changePassword" class="dropdown-item">
            <i class="fa fa-lock" aria-hidden="true"></i>
            Change Password
          </router-link>
          
          <router-link to="/profile" class="dropdown-item">
            <i class="fa fa-user" aria-hidden="true"></i>
            Profile
          </router-link>

          <div class="dropdown-divider"></div>
          <router-link to="/logout" class="dropdown-item">
            <i class="fa fa-sign-out" aria-hidden="true"></i>
            Logout
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import AllRoutes from '../routes/Routes'

  export default {
    name: 'NavbarTop',

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