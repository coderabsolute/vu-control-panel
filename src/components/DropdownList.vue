<template>
  <div>
    <select v-model="selectedId" class="custom-select form-control">
      <option v-bind:value="null">Choose....</option>
      <option v-for="option in options" v-bind:value="option.key">{{ option.value }}</option>
    </select>
  </div>  
</template>

<script>
  export default {
    name: 'DropdownList',
    props: ['options', 'preSelectedKey'],
    data () {
      return {
        selectedId: null
      }
    },

    watch: {
      selectedId (value) {
        this.$emit('input', value)
      }
    },

    updated () {
      if (this.preSelectedKey === undefined) {
        this.selectedId = null
      } else {
        this.selectedId = this.preSelectedKey
      }
    }
  }
</script>
