<template>
    <div class="hello">
        <input v-model="pixelid" placeholder="Pixel ID">
        <input v-model="code" placeholder="test">
        <vue-code-highlight language="javascript" id="clipboardcode">&lt;script id="{{cookiename}}"&gt;
// Facebook Pixel Code
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '{{pixelid}}');
&lt;/script&gt;</vue-code-highlight>
    </div>
</template>

<script>
  import {component as VueCodeHighlight} from 'vue-code-highlight';

  export default {
    name: 'FacebookPixel',

    props: {
      cookiename: {
        type: String,
        required: true
      }
    },

    data() {
      return {
        pixelid: 'da',
        code: ''
      }
    },

    components: {
      VueCodeHighlight
    }
  }
</script>
