import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import DriverLogin from '@/components/DriverLogin'
import Logincode from '@/components/Logincode'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/driverlogin',
      name: DriverLogin,
      component: DriverLogin
    },
    {
      path: '/logincode',
      name: 'Logincode',
      component: Logincode
    }  
  ]
})
