<template>
    <div class="hello">
        <input v-model="pixelid" placeholder="Pixel ID">
        <input v-model="code" placeholder="test">
        <vue-code-highlight language="javascript" id="clipboardcode">
&lt;script id="{{cookiename}}"&gt;
// Google

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
        pixelid: '',
        code: '',
        cookiename: this.store.state.cookiename
      }
    },

    components: {
      VueCodeHighlight
    }
  }
</script>
