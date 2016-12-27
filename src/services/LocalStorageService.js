export default {
  add (name, value) {
    window.localStorage.setItem(name, value)
  },

  remove (name) {
    try {
      window.localStorage.removeItem(name)
    } catch (e) {
      console.log(e)
    }
  },

  get (name) {
    try {
      const value = window.localStorage.getItem(name)

      if (value === null) {
        return undefined
      }

      return (value)
    } catch (e) {
      console.log(e)
    }
  }
}
