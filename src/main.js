import Vue from 'vue'
import App from './App.vue'
import VCalendar from 'v-calendar'
import router from './router'


Vue.config.productionTip = false

Vue.use(VCalendar, {})

Vue.use(router)

export default new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
