<template>
  <div>
    <div class="content">
      <div class="title" align="center">
        <label>请输入验证码<p class="text15">13774223323</p></label>
      </div>
       <!-- 验证码 begin-->
      <Sms v-model="code"></Sms>
      <!-- 验证码 end-->
      <div align="center">
        <wv-button type="primary" @click="login">确定</wv-button>
       
        <p class="consentclause"><a @click="countDown">{{content}}</a></p>
      </div>         
     </div>
  </div>
</template>

<script>
  import Sms from 'ofcold-security-code'
  import { TopTips } from 'we-vue'

    export default {
        name: "Login",
        data() {
          return {
            content: '重新发送',
            totalTime: 60,
            userName: "",
            password: "",
            secondmsg: true,
            code: ''
          }
        },
        computed: {
          isUserNameExist: function() {
            return this.userName.length > 0
          },

          isPasswordExist: function() {
            return this.password.length > 0
          }
        },
        methods: {
          login() {
            this.$router.push("Login")
          },

          countDown () {
            this.content = this.totalTime + 's后重新发送' //这里解决60秒不见了的问题
            let clock = window.setInterval(() => {//setInterval定时器
              this.totalTime--
              this.content = this.totalTime + 's后重新发送'
              if (this.totalTime < 0) {     //当倒计时小于0时清除定时器
                window.clearInterval(clock)
                this.content = '重新发送'
                this.totalTime = 60
                }
            },1000)
            },

          verifyUserName() {
            if (this.userName.length > 11) {
              TopTips({ message: '请正确输入手机号', duration: 2000})
            } else if (this.userName.length == 0) {
              TopTips({ message: '手机号不能为空', duration: 2000})
            }
           }
        },
        components: {
          Sms
        }       
    }
</script>

<style>
  @import '../styles/main.css';
  @import '../styles/login.css';

    .ofcold__security-code-wrapper .ofcold__security-code-field{
      margin-right: 10px!important;
  }

  .ofcold__security-code-wrapper .ofcold__security-code-field .form-control{
      border: 1px solid #c7c7c7;
  }

  .ofcold__security-code-wrapper .ofcold__security-code-field:nth-child(3) {
      margin-right: 10px!important;
  }

</style>