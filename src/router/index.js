import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home";
import FacebookPixel from "../components/FacebookPixel";
import GoogleAnalytics from "../components/GoogleAnalytics";
import GoogleTagManager from "../components/GoogleTagManager";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/facebook",
      name: "FacebookPixel",
      component: FacebookPixel
    },
    {
      path: "/google",
      name: "GoogleAnalytics",
      component: GoogleAnalytics
    },
    {
      path: "/gtm",
      name: "GoogleTagManager",
      component: GoogleTagManager
    }
  ]
});
