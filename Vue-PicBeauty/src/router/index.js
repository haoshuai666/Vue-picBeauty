import Vue from 'vue'
import Router from 'vue-router'
import homepage from '../views/Homepage/homepage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    }
  ]
})
