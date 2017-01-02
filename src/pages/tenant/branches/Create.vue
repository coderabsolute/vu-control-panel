<template>
  <div>
    <form v-on:submit="submit">
      <div class="form-group row">
        <label class="col-xs-2 col-form-label">Branch name</label>
        <div class="col-xs-4">
          <input v-model="vm.branchName" class="form-control" type="text" required autofocus>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-xs-2 col-form-label">Registration No</label>
        <div class="col-xs-4">
          <input v-model="vm.businessRegistrationNo" class="form-control" type="text">
        </div>
      </div>

      <div class="form-group row">
        <label class="col-xs-2 col-form-label">Default Currency</label>
        <div class="col-xs-4">
          <select v-model="vm.selectedCurrencyId" class="custom-select form-control">
            <option v-bind:value="null">Choose....</option>
            <option v-for="item in vm.currencyList" v-bind:value="item.key">{{item.value}}</option>
          </select>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-xs-2 col-form-label">Timezone</label>
        <div class="col-xs-4">
          <select v-model="vm.selectedTimezoneId" class="custom-select form-control">
            <option v-bind:value="null">Choose....</option>
            <option v-for="item in vm.timezoneList" v-bind:value="item.key">{{item.value}}</option>
          </select>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2">Active</label>
        <div class="col-sm-10">
          <div class="form-check">
            <label class="form-check-label">
              <input v-model="vm.isActive" class="form-check-input" type="checkbox">
            </label>
          </div>
        </div>
      </div>

      <div class="form-group row">
          <div class="offset-sm-2 col-sm-10">
            <submit-button caption="Save"></submit-button>
            <cancel-button></cancel-button>
          </div>
        </div>
    </form>
  </div>
  
</template>

<script>
  import HttpService from '../../../services/HttpService'
  import ConstantService from '../../../services/ConstantService'

  export default {
    name: 'BranchesCreate',
    data () {
      return {
        vm: {
          currencyList: [],
          timezoneList: [],
          selectedCurrencyId: null,
          selectedTimezoneId: null,
          branchName: null,
          businessRegistrationNo: null,
          isActive: true
        }
      }
    },

    created () {
      Promise.all([
        ConstantService.currencies(),
        ConstantService.timezones()
      ]).then((resolved) => {
        this.vm.currencyList = resolved[0].results
        this.vm.timezoneList = resolved[1].results
      })
    },

    methods: {
      submit () {
        const body = {
          branchName: this.vm.branchName,
          businessRegistrationNo: this.vm.businessRegistrationNo,
          isActive: this.vm.isActive,
          baseCurrencyId: this.vm.selectedCurrencyId,
          timezoneId: this.vm.selectedTimezoneId
        }

        HttpService.post('branches', body)
        .then(response => {
          this.$router.go(-1)
        })
        .error(console.error)
      }
    }
  }
</script>