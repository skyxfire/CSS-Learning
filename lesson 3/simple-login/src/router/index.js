import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import DriverLogin from '@/components/DriverLogin'
import CodeVerify from '@/components/CodeVerify'
import HomePage from '@/components/HomePage'

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
      path: '/CodeVerify',
      name: 'CodeVerify',
      component: CodeVerify
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
