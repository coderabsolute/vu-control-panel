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
        <div class="col-xs-2">
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
          <button type="submit" class="btn btn-primary">Update Changes</button>
        </div>
      </div>
     
    </form>
  </div>  
</template>

<script>
  import ConstantService from '../services/ConstantService'

  export default {
    name: 'Profile',
    data () {
      return {
        vm: {
          languageList: [],
          selectedLanguageId: 0,
          name: '',
          dateOfBirth: '',
          gender: ''
        }
      }
    },

    created () {
      Promise.all([ConstantService.languages()]).then((resolved) => {
        this.vm.languageList = resolved[0].results
      })
    },

    methods: {
      submit () {
        console.log('form is submitted')
      }
    }
  }
</script>