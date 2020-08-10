import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import MegaMooshLand from './components/MegaMooshLand.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const mooshRouter = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: MegaMooshLand }
  ]
})


new Vue({
  router: mooshRouter,
  render: h => h(App),
}).$mount('#app')
