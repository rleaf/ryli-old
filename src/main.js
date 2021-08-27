import Vue from 'vue'
import VueRouter from 'vue-router'
// import MathJax, { initMathJax, renderByMathjax } from 'mathjax-vue'

import App from './App.vue'
import router from './router'
// import three from '../node_modules/three'

Vue.use(VueRouter)

// initMathJax({})
// renderByMathjax()

// Vue.use(MathJax)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
