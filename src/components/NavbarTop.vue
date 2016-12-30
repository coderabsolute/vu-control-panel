<template>
  <nav class="navbar navbar-static-top navbar-dark bg-inverse">
    <router-link to="/dashboard" class="navbar-brand">Project Name</router-link>

    <div class="float-xs-right">
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown button
        </button>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <router-link to="/profile" class="dropdown-item">Profile</router-link>
          <router-link to="/changePassword" class="dropdown-item">Change Password</router-link>
          
          <div class="dropdown-divider"></div>
          <router-link to="/logout" class="dropdown-item">Logout</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'NavbarTop'
  }
</script>
