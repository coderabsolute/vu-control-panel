<template>
  <card heading="Profile">

    <form @submit.prevent="onSubmit">
      <div class="form-group row">
        <div class="col-sm-4">
          <label>Name</label>
          <input v-model="vm.name" class="form-control" type="text">
        </div>
      </div>

      <div class="form-group row">
        <div class="col-sm-4">
          <label>Date of birth</label>
          <input v-model="vm.dateOfBirth" class="form-control" type="date">
        </div>
      </div>

      <div class="form-group row">
        <div class="col-sm-4">
          <label>Gender</label>
          <div>
            <label class="form-check-label">
              <input class="form-check-input" type="radio" name="exampleRadios" value="1" v-model="vm.gender">Male
            </label>
            <label class="form-check-label">
              <input class="form-check-input" type="radio" name="exampleRadios" value="2" v-model="vm.gender">Female
            </label>
          </div>
        </div>
      </div>

      <div class="form-group row">
        <div class="col-sm-4">
          <label>Default Language</label>
          <dropdown-list :options="vm.languageList" 
            :pre-selected-key="vm.selectedLanguageId" 
            v-model="vm.selectedLanguageId"
          ></dropdown-list>
        </div>
      </div>

      <div class="form-group row">
        <div class="col-sm-10">
          <submit-button caption="Update Changes" :disabled="Processing"></submit-button>
          <cancel-button></cancel-button>
        </div>
      </div>
    </form>

  </card>
</template>

<script>
  import HttpService from '../services/HttpService'
  import ConstantService from '../services/ConstantService'

  export default {
    name: 'Profile',

    data () {
      return {
        isProcessing: false,
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
      try {
        this.isProcessing = true

        Promise.all([ConstantService.languages()]).then((resolved) => {
          this.vm.languageList = resolved[0].results

          this.fetchData()
        })
      } finally {
        this.isProcessing = false
      }
    },

    computed: {
      Processing () {
        console.log('computed: ' + this.isProgressing)
        return this.isProcessing
      }
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

      onSubmit () {
        try {
          const json = {
            name: this.vm.name,
            defaultLanguageId: this.vm.selectedLanguageId,
            dateOfBirth: this.vm.dateOfBirth,
            gender: this.vm.gender
          }

          HttpService.put('userProfile', json)
          .then(success => {
            this.$notify({
              title: 'Success',
              message: success.successMessage,
              type: 'success',
              duration: 2000
            })
          })
        } finally {
          this.isProcessing = false
        }
      }
    }
  }
</script>