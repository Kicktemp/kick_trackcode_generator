<template>
  <div id="app">
    <ul class="nav">
      <li>
        <router-link to="/facebook">Facebook</router-link>
      </li>
      <li>
        <router-link to="/google">Google</router-link>
      </li>
    </ul>
    <p>{{cookiename}}</p>
    <router-view></router-view>
    <HelloWorld :cookiename="cookiename"/>
    <button v-on:click="copyCode">Übertragen</button>
  </div>
</template>

<script>
export default {
  name: 'app',

  data() {
    return {
      cookiename: window.document.getElementById('kc_name').value
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
