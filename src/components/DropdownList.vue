<!--Instead use this library https://github.com/monterail/vue-multiselect-->
<template>
  <div class="form-group row">
    <label class="col-xs-2 col-form-label">{{ caption }}</label>
    <div class="col-xs-4">
      <select v-model="selectedId" class="custom-select form-control">
        <option v-bind:value="null">Choose....</option>
        <option v-for="option in items" v-bind:value="option.key">{{option.value}}</option>
      </select>
    </div>
    <div>Child Value - {{selectedId}} </div>
  </div>
</template>

<script>
  export default {
    name: 'DropdownList',
    props: ['options', 'caption'],
    data () {
      return {
        selectedId: null
      }
    }
  }
</script>
