<template>
  <card heading="Create an Account">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <input v-model="vm.username" type="email" class="form-control" id="username" placeholder="your email address" required autofocus>
      </div>

      <div class="form-group">
        <input v-model="vm.reEnterUsername" type="email" class="form-control" id="username" placeholder="Re enter your email" required autofocus>
      </div>

      <div class="form-group">
        <input v-model="vm.fullName" type="email" class="form-control" id="username" placeholder="Full name" required autofocus>
      </div>

      <div class="form-group">
        <input v-model="vm.password" type="password" class="form-control" id="username" placeholder="New Password" required autofocus>
      </div>

      <div class="form-group">
        <span>
          Your Birthday &nbsp;
          <select v-model="vm.dobDay" class="custom-select">
            <option v-bind:value="null">Day</option>
            <option v-for="option in dayList" v-bind:value="option.key">{{ option.value }}</option>
          </select>
          
          <select v-model="vm.dobMonth" class="custom-select">
            <option v-bind:value="null">Month</option>
            <option v-for="option in monthList" v-bind:value="option.key">{{ option.value }}</option>
          </select>

          <select v-model="vm.dobYear" class="custom-select">
            <option v-bind:value="null">Year</option>
            <option v-for="option in yearList" v-bind:value="option.key">{{ option.value }}</option>
          </select>
        </span>

        <span class="pull-right">
           <label class="form-check-label col-form-label-lg">
            <input class="form-check-input" type="radio" name="exampleRadios" value="2" v-model="vm.gender">Female
          </label>

          <label class="form-check-label col-form-label-lg">
            <input class="form-check-input" type="radio" name="exampleRadios" value="1" v-model="vm.gender">Male
          </label>
        </span>
      </div>

      <div class="form-group">
        <button type="submit" class="btn btn-success btn-lg">Create an Account</button>
      </div>
    </form>
  </card>
</template>

<script>
  import DateService from '../../services/DateService'

  export default {
    name: 'RegisterComponent',

    created () {
      this.dayList = DateService.getDays()
      this.monthList = DateService.getMonths().results
      this.yearList = DateService.getYears()
    },

    data () {
      return {
        dayList: null,
        monthList: null,
        yearList: null,
        vm: {
          username: null,
          reEnterUsername: null,
          fullName: null,
          password: null,
          birthday: null,
          dobDay: null,
          dobMonth: null,
          dobYear: null,
          gender: null
        }
      }
    },

    methods: {
      onSubmit () {
        this.$router.push({ name: 'registerSuccess', params: { username: this.vm.username } })
      }
    }
  }
</script>