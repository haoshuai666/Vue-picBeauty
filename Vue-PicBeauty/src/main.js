// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/reset.css'
import VueSee from 'vue-see'
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui'
Vue.use(Mint)
/* 适用于Vue.js2.0的图片预览插件 */
var options = {}
Vue.use(VueSee, options)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
