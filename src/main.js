import Vue from 'vue'
import VueRouter from 'vue-router'
import VueHead from 'vue-head'

import App from './App.vue'
import router from './router'

Vue.use(VueRouter)
Vue.use(VueHead)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
