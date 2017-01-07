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
          <dropdown-list :options="vm.currencyList" 
            :pre-selected-key="vm.selectedCurrencyId" 
            v-model="vm.selectedCurrencyId"
          ></dropdown-list>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-xs-2 col-form-label">Timezone</label>
        <div class="col-xs-4">
          <dropdown-list :options="vm.timezoneList" 
            :pre-selected-key="vm.selectedTimezoneId" 
            v-model="vm.selectedTimezoneId"
          ></dropdown-list>
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
  import HttpService from '../../services/HttpService'
  import ConstantService from '../../services/ConstantService'

  export default {
    name: 'BranchComponent',
    props: [
      'mode',       // edit or new
      'branchId'
    ],

    data () {
      return {
        vm: {
          id: this.branchId,
          currencyList: [],
          timezoneList: [],
          selectedCurrencyId: null,
          selectedTimezoneId: null,
          branchName: null,
          businessRegistrationNo: null,
          isActive: false
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

        if (this.mode === 'edit') {
          this.fetchData()
        }
      })
    },

    methods: {
      fetchData () {
        HttpService.getOne('branches', this.vm.id)
        .then(response => {
          this.vm.branchName = response.branchName
          this.vm.businessRegistrationNo = response.businessRegistrationNo
          this.vm.isActive = response.isActive
          this.vm.selectedCurrencyId = response.baseCurrencyId
          this.vm.selectedTimezoneId = response.timezoneId
        })
      },

      submit () {
        const resource = 'branches'
        const body = {
          branchName: this.vm.branchName,
          businessRegistrationNo: this.vm.businessRegistrationNo,
          isActive: this.vm.isActive,
          baseCurrencyId: this.vm.selectedCurrencyId,
          timezoneId: this.vm.selectedTimezoneId
        }

        if (this.mode === 'edit') {
          HttpService.putOne(resource, this.vm.id, body)
          .then(success => { this.$router.go(-1) })
        } else {
          HttpService.post(resource, body)
          .then(response => { this.$router.go(-1) })
        }
      }
    }
  }
</script>