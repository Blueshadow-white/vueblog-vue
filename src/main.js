// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/index';
import './axios.js' // 请求拦截
import { mavonEditor } from "mavon-editor";
import 'mavon-editor/dist/css/index.css'
import './permission.js' // 路由拦截
Vue.prototype.$axios = axios //

Vue.config.productionTip = false
Vue.use(ElementUI,VueAxios,axios)
Vue.component("mavon-editor", mavonEditor);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
