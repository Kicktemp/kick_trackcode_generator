import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import 'vue-code-highlight/themes/window.css'
import 'vue-code-highlight/themes/duotone-sea.css'

Vue.config.productionTip = false;



var store = {
  debug: true,
  state: {
    cookiename: window.document.getElementById('kc_name')
  },
  setCookienNameAction (newValue) {
    // eslint-disable-next-line
    if (this.debug) console.log('setMessageAction triggered with', newValue)
    this.state.cookiename = newValue
  }
}

let name = window.document.getElementById('kc_name');
name.addEventListener("change", function () {
  store.setCookienNameAction(name.value);
});

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
