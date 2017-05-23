// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// how to use Bootstrap with vue webpack and cli
// @see https://www.youtube.com/watch?v=HxWSL0Pvhw8
import jQuery from 'jquery'
global.jQuery = jQuery
let bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
