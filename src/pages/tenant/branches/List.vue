<template>
  <div>
    <div>
      <table-header path="/branches/:id/create"></table-header>

      <el-table :data="gridData" border :default-sort="{prop: 'branchName'}" style="width: 100%">
        <el-table-column label="Action" width="120">
          <template scope="scope">
            <i @click="onRowDelete(scope.row)" class="fa fa-times btn btn-link" aria-hidden="true"></i>
            <i @click="onRowEdit(scope.row)" class="fa fa-pencil-square-o btn btn-link" aria-hidden="true"></i>
            
          </template>
        </el-table-column>

        <el-table-column prop="branchName" label="Branch Name" sortable></el-table-column>
        <el-table-column prop="businessRegistrationNo" label="Registration No" sortable></el-table-column>
        <el-table-column prop="currencyName" label="Currency" sortable width="180"></el-table-column>
        <el-table-column prop="timezoneName" label="Timezone" sortable></el-table-column>
        <el-table-column prop="isActive" label="Active" sortable width="100"></el-table-column>
      </el-table>
    </div>
    
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
      },

      onRowDelete (row) {
        console.log('onRowDelete:' + row.branchId)
      },

      onRowEdit (row) {
        this.$router.push({ path: 'edit', params: { id: row.branchId } })
        console.log('onRowEdit:' + row.branchId)
      }
    }
  }
</script>

