<template>
  <div id="app">
    <Home/>
    <select v-model="selected">
      <option v-for="option in options" :key="option.value" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>
    <FacebookPixel v-if="selected === 'facebook'" :cookiename="cookiename"/>
    <GoogleAnalytics  v-if="selected === 'ga'" :cookiename="cookiename"/>
    <button v-on:click="copyCode">Übertragen</button>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import FacebookPixel from './components/FacebookPixel.vue'
import GoogleAnalytics from './components/GoogleAnalytics.vue'

export default {
  name: 'app',

  components: {
    Home,
    FacebookPixel,
    GoogleAnalytics,
  },

  data() {
    return {
      cookiename: window.document.getElementById('kc_name').value,
      selected: '',
      options: [
        { text: 'Bitte wähle ein Template', value: '' },
        { text: 'Facebook Pixel', value: 'facebook' },
        { text: 'Google Analytics', value: 'ga' },
      ]
    }
  },

  methods: {
    copyCode(){
      let code = window.document.getElementById('clipboardcode').getElementsByTagName('CODE')[0].innerHTML.replace(/<\/?span[^>]*>/g,"");
      window.document.getElementById('optincode').innerHTML = code;
    }
  },

  mounted() {
    let app = this;
    let name = window.document.getElementById('kc_name');
    name.addEventListener("change", function () {
      app.cookiename = name.value;
    });
  }
}
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 60px;
  }

  ul.nav > li {
    display: inline;
    padding-left: 10px;
  }
  ul.nav > li::before {
    content: "\2630";
    padding-right: 5px;
  }
</style>
