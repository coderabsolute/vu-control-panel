<template>
  <div>
    <page-header caption="Profile"></page-header>

    <form v-on:submit="submit">

      <div class="form-group row">
        <label class="col-xs-2 col-form-label">Name</label>
        <div class="col-xs-4">
          <input v-model="vm.name" class="form-control" type="text">
        </div>
      </div>

      <div class="form-group row">
        <label class="col-xs-2 col-form-label">Date of birth</label>
        <div class="col-xs-4">
          <input v-model="vm.dateOfBirth" class="form-control" type="date">
        </div>
      </div>

      <div class="form-group row">
        <label class="col-xs-2 col-form-label">Gender</label>
        <div class="col-xs-6">
          <label class="form-check-label">
            <input class="form-check-input" type="radio" name="exampleRadios" value="1" v-model="vm.gender">Male
          </label>

          <label class="form-check-label">
            <input class="form-check-input" type="radio" name="exampleRadios" value="2" v-model="vm.gender">Female
          </label>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-xs-2 col-form-label">Default Language</label>
        <div class="col-xs-4">
          <select v-model="vm.selectedLanguageId" class="custom-select form-control">
            <option v-for="item in vm.languageList" v-bind:value="item.key">{{item.value}}</option>
          </select>
        </div>
      </div>

      <div class="form-group row">
        <div class="offset-sm-2 col-sm-10">
          <submit-button caption="Update Changes"></submit-button>
          <cancel-button></cancel-button>
        </div>
      </div>

    </form>
  </div>
</template>

<script>
  import HttpService from '../services/HttpService'
  import ConstantService from '../services/ConstantService'

  export default {
    name: 'Profile',

    data () {
      return {
        vm: {
          languageList: [],
          selectedLanguageId: 0,
          name: null,
          dateOfBirth: null,
          gender: null
        }
      }
    },

    created () {
      Promise.all([ConstantService.languages()]).then((resolved) => {
        this.vm.languageList = resolved[0].results

        this.fetchData()
      })
    },

    methods: {
      fetchData () {
        HttpService.get('userProfile')
        .then(response => {
          const profile = response.results

          this.vm.name = profile.name
          this.vm.selectedLanguageId = profile.defaultLanguageId
          this.vm.dateOfBirth = profile.dateOfBirth
          this.vm.gender = profile.gender
        })
      },

      submit () {
        const json = {
          name: this.vm.name,
          defaultLanguageId: this.vm.selectedLanguageId,
          dateOfBirth: this.vm.dateOfBirth,
          gender: this.vm.gender
        }

        HttpService.put('userProfile', json)
        .then(console.log)
      }
    }
  }
</script>