import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(ElementUI);
Vue.config.productionTip = false
//axios全局引入
Vue.prototype.$http = Axios;
Axios.defaults.baseURL = 'http://127.0.0.1:8089'
//默认路径

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
