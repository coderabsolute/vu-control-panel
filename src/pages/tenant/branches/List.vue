<template>
  <div>
    <h4>List - {{ vm.recordCount }}</h4>

    <table class="table">
      <thead class="thead-inverse">
        <tr>
          <th>Branch Name</th>
          <th>Registration No</th>
          <th>Currency</th>
          <th>Timezone</th>
          <th>Active</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in vm.list">
          <td>
            <router-link v-bind:to="{ path: item.branchId + '/edit'}  ">
              {{ item.branchName }}
            </router-link>
          </td>
          <td>{{ item.branchRegistrationNo }}</td>
          <td>{{ item.currencyName }}</td>
          <td>{{ item.timezoneName }}</td>
          <td>{{ item.isActive }}</td>
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
        })
      }
    }
  }
</script>
