import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Profile from './components/Profile.vue'

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);
Vue.component('app-profile', Profile);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
