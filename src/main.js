import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'

Vue.component('app-header', Header);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
