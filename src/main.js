// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
// 引入路由器对象
import router from './router'
// 引入Header组件
import Header from './components/Header/Header.vue'
// 注册程全局组件(在任何组件中可以直接使用,可以叫公共组件)
Vue.component(Header.name, Header)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router
})
