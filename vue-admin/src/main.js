import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import VueResource from 'vue-resource'
import api from './api/index'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueResource)
Vue.config.productionTip = false;
Vue.prototype.APIurl = api;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
