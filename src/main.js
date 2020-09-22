import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
// import buttonCounter from './components/buttonCounter.vue'

Vue.config.productionTip = false

// Vue.component('button-counter', buttonCounter)

// new Vue({
//   el:'#components-demo'
// })
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
