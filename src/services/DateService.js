export default {
  getDays () {
    let result = []

    for (let step = 1; step <= 31; step++) {
      result.push({ key: step, value: step })
    }

    return result
  },

  getMonths () {
    let result = []

    result.push({ key: 1, value: 'January' })
    result.push({ key: 2, value: 'February' })
    result.push({ key: 3, value: 'March' })
    result.push({ key: 4, value: 'April' })
    result.push({ key: 5, value: 'May' })
    result.push({ key: 6, value: 'June' })
    result.push({ key: 7, value: 'July' })
    result.push({ key: 8, value: 'August' })
    result.push({ key: 9, value: 'September' })
    result.push({ key: 10, value: 'October' })
    result.push({ key: 11, value: 'November' })
    result.push({ key: 12, value: 'December' })

    return { 'results': result }
  },

  getYears () {
    let result = []

    for (let step = 2017; step >= 1920; step--) {
      result.push({ key: step, value: step })
    }

    return result
  }
}
