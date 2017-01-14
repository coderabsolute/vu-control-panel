<template>
  <div>
    <table-header path="/branches/:id/create"></table-header>

    <data-grid
      :data="gridData"
      :columns="gridColumns"
      :filter-key="searchQuery">
    </data-grid>
    
    <table class="table">
      <thead class="thead">
        <tr>
          <th>Branch Name</th>
          <th>Registration No</th>
          <th>Currency</th>
          <th>Timezone</th>
          <th>Active</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in vm.list" :class="item.isActive === false ? 'table-danger' : ''">
          <td>
            <router-link v-bind:to="{ path: item.branchId + '/edit'} ">
              {{ item.branchName }}
            </router-link>
          </td>
          <td>{{ item.businessRegistrationNo }}</td>
          <td>{{ item.currencyName }}</td>
          <td>{{ item.timezoneName }}</td>
          <td class="text-sm-center">
            <i v-if="item.isActive === true" class="fa fa-check"></i>
          </td>
        </tr>
      </tbody>

    </table>

  </div>
</template>

<script>
  import HttpService from '../../../services/HttpService'

  export default {
    name: 'BranchesList',
    data () {
      return {
        searchQuery: '',
        gridColumns: ['branchName', 'businessRegistrationNo', 'currencyName', 'timezoneName', 'isActive'],
        gridData: [],

        loading: false,
        vm: {
          list: [],
          recordCount: 0
        }
      }
    },

    created () {
      this.fetchData()
    },

    methods: {
      fetchData () {
        HttpService.get('branches')
        .then(response => {
          this.vm = {
            recordCount: response.recordCount,
            list: response.results
          }

          this.gridData = response.results
        })
      }
    }
  }
</script>

