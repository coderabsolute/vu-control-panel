<!--error: this.$root.bus.$emit('notification.error', 'TITLE HERE', 'MESSAGE HERE')
success: this.$root.bus.$emit('notification.success', 'TITLE HERE', 'MESSAGE HERE')
info: this.$root.bus.$emit('notification.info', 'TITLE HERE', 'MESSAGE HERE')
warning: this.$root.bus.$emit('notification.warning', 'TITLE HERE', 'MESSAGE HERE')-->
<template>

  <section id="notifications">
    <div v-for="notification in notifications" 
      @click="removeNotification(notification)" 
      :class="{ 'notification' : true, 'notification--info' : notification.type == 'info', 'notification--success' : notification.type == 'success', 'notification--warning' : notification.type == 'warning', 'notification--error' : notification.type == 'error', 'notification--removing' : notification.removing }">
      <h1 class="notification__h1" v-if="notification.title.length > 0">{{ notification.title }}</h1>
      <p class="notification__p" v-if="notification.message.length > 0">{{ notification.message }}</p>
    </div>
  </section>

</template>

<script>
export default {
  props: [
    'autoRemove',
    'autoRemoveTime'
  ],

  data () {
    return {
      notifications: []
    }
  },

  methods: {
    addNotification (notification) {
      notification.title = notification.title || ''
      notification.message = notification.message || ''
      notification.type = notification.type || 'success'
      if (notification.timeout !== 0 && this.autoRemove) {
        notification.timeout = notification.timeout || this.autoRemoveTime
      }
      notification.removing = false

      if (notification.message.length > 0) {
        this.notifications.push(notification)
        if (notification.timeout > 0 && this.autoRemove) {
          setTimeout(() => {
            this.removeNotification(notification)
          }, notification.timeout)
        }
      }
    },

    success (title, message) {
      this.addNotification({
        title: title,
        message: message,
        type: 'success'
      })
    },

    info (title, message) {
      this.addNotification({
        title: title,
        message: message,
        type: 'info'
      })
    },

    error (title, message) {
      this.addNotification({
        title: title,
        message: message,
        type: 'error'
      })
    },

    warning (title, message) {
      this.addNotification({
        title: title,
        message: message,
        type: 'warning'
      })
    },

    removeNotification (notification) {
      notification.removing = true
      setTimeout(() => {
        this.notifications.splice(this.notifications.indexOf(notification), 1)
      }, 500)
    }
  },

  created () {
    this.$root.bus.$on('notification.success', (title, message) => {
      this.success(title, message)
    })

    this.$root.bus.$on('notification.info', (title, message) => {
      this.info(title, message)
    })

    this.$root.bus.$on('notification.error', (title, message) => {
      this.error(title, message)
    })

    this.$root.bus.$on('notification.warning', (title, message) => {
      this.warning(title, message)
    })
  }
}
</script>

<style scoped>

#notifications {
  position: fixed;
  top: 0;
  right: 20px;
  height: auto;
  width: 300px;
  max-width: 25%;
  z-index: 9999;
}
.notification {
  color: #ffffff;
  display: block;
  margin: 20px 0px;
  padding: 10px;
  -webkit-box-shadow: 1px 1px 0px 0px rgba(0,0,0,0.9);
  -moz-box-shadow: 1px 1px 0px 0px rgba(0,0,0,0.9);
  box-shadow: 1px 1px 0px 0px rgba(0,0,0,0.9);
  max-height: 300px;
    transition-property: all;
    transition-duration: .5s;
}
.notification--removing {
  max-height: 0px;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.notification__h1 {
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
}
.notification__p {
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
}
.notification--error {
  background-color: #d91e18;
}
.notification--warning {
  background-color: #ff4500;
}
.notification--success {
  background-color: #0a0;
}
.notification--info {
  background-color: #1e90ff;
}

</style>