import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from './components/Home.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const mooshRouter = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/home', component: Home }
  ]
})


new Vue({
  router: mooshRouter,
  render: h => h(App),
}).$mount('#app')
