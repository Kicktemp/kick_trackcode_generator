<template>
    <div class="hello">
        <input v-model="gtmid" placeholder="Pixel ID">
        <input v-model="code" placeholder="test">
        <vue-code-highlight language="javascript" id="clipboardcode">
&lt;script id="{{name}}"&gt;
// Google
var gtmid = {{gtmid}}
&lt;/script&gt;
        </vue-code-highlight>
    </div>
</template>

<script>
  import {component as VueCodeHighlight} from 'vue-code-highlight';

  export default {
    name: 'GoogleAnalytics',

    data() {
      return {
        gtmid: '',
        code: '',
        name: this.store.state.cookiename
      }
    },

    components: {
      VueCodeHighlight
    }
  }
</script>
