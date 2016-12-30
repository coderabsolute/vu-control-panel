import HttpService from './HttpService'

export default {
  languages () {
    return HttpService.get('constants/languages').then().catch()
  },

  countries () {
    return HttpService.get('constants/countries').then().catch()
  },

  timezones () {
    return HttpService.get('constants/timezones').then().catch()
  }
}
