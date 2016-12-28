<template>
  <div class="container-fluid">
    <div class="jumbotron">
      <h1 class="display-3">Hello, world!</h1>

      <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
      
      <p><a v-on:click="stopClicks" class="btn btn-primary btn-lg" role="button">Learn more »</a></p>

      <!-- Example row of columns -->
      <div class="row">
        <div class="col-md-4">
          <h2>Heading</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          <p><a v-on:click="stopClicks" class="btn btn-secondary" role="button">View details »</a></p>
        </div>
        <div class="col-md-4">
          <h2>Heading</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          <p><a v-on:click="stopClicks" class="btn btn-secondary" ole="button">View details »</a></p>
        </div>
        <div class="col-md-4">
          <h2>Heading</h2>
          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          <p><a v-on:click="stopClicks" class="btn btn-secondary" role="button">View details »</a></p>
        </div>
      </div>

      <hr>

      <footer>
        <p>© Company 2016</p>
      </footer>
    </div>
  </div>
</template>

<script>
  import HttpService from '../services/HttpService'

  export default {
    name: 'Dashboard',

    created () {
      HttpService.get('constants/currencies')
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    },

    methods: {
      stopClicks () {
        window.alert('Stop clicking around and sit tight for more updates.')
      }
    }
  }
</script>