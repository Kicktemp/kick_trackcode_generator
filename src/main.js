import Vue from 'vue'
import App from './App.vue'
import 'vue-code-highlight/themes/window.css'
import 'vue-code-highlight/themes/duotone-sea.css'

Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
}).$mount('#app')
