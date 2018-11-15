import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import ResetPasswordStep1 from '@/components/ResetPasswordStep1'
import ResetPasswordStep2 from '@/components/ResetPasswordStep2'
import ResetPasswordStep3 from '@/components/ResetPasswordStep3'
import DriverLogin from '@/components/DriverLogin'
import CodeVerify from '@/components/CodeVerify'
import HomePage from '@/components/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'SignIn'
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
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
    },
    {
      path: '/ResetPasswordStep1',
      name: 'ResetPasswordStep1',
      component: ResetPasswordStep1
    },
    {
      path: '/ResetPasswordStep2',
      name: 'ResetPasswordStep2',
      component: ResetPasswordStep2
    },
    {
      path: '/ResetPasswordStep3',
      name: 'ResetPasswordStep3',
      component: ResetPasswordStep3
    }
  ]
})
