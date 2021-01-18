import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import VueResource from 'vue-resource'
import api from './api/index'
import global_ from '../src/views/components/Global.vue'//引用文件
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueResource)
Vue.config.productionTip = false;
Vue.prototype.APIurl = api;
Vue.prototype.GLOBAL = global_;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
