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

// Vue.http.headers.common['token'] = store.state.token;
// Vue.http.get(this.GLOBAL.url , { params: data, _timeout: 5000 })
//   .then((response) => {
//     const parsedBody = this.parsedBody(response);
//     success(parsedBody);
//   }, (response) => {
//       error(this.parsedBody(response));
//   })

// Vue.http.options.headers.Authorization = 'token ' + (localStorage['token'] || '')
// Vue.http.headers.common['Authorization'] = 'Bearer dsdfsdfsdf';
// Vue.http.interceptors.push((request,next)=>{
//   request.credentials = true; // 接口每次请求会跨域携带cookie
//   request.method= 'POST'; // 请求方式（get,post）
//   request.headers.set('token','111') // 请求headers携带参数
  
//   next(function(response){
//    return response;
//   });
//  })
// Vue.http.interceptors.push((request, next) => {
//   request.headers.set('token', token); //setting request.headers
//   next((response) => {
//     return response
//  })
// })

// Vue.http.options.headers={};
// Vue.http.options.headers.Authorization='token ' + (localStorage['token'] || '')

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
