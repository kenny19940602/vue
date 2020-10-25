import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import 'ant-design-vue/dist/antd.css';
// import { Icon  } from 'ant-design-vue';
// import { Button  } from 'ant-design-vue';

Vue.config.productionTip = false
Vue.config.devTools = true

// Vue.use(Icon)
// Vue.use(Button)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
