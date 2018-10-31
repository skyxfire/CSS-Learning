<template>
  <div>
    <div class="content">
      <div class="title" align="center">
        <label>激活您的账号<p class="text15">一条包含验证码的手机短信已发送至<b class="text24">137 **** **23</b>请在此处输入验证码：</p></label>
      </div>
       <!-- 验证码 begin-->
      <Sms v-model="code"></Sms>
      <!-- 验证码 end-->
      <div align="center">
        <wv-button type="primary" @click="verifySuccess">确定</wv-button>
       
        <p class="consentclause">没有收到手机短信?<a @click="countDown">{{content}}</a></p>
      </div>         
     </div>
  </div>
</template>

<script>
  import Sms from 'ofcold-security-code'
  import { Toast } from 'we-vue'

    export default {
        name: "Login",
        data() {
          return {
            content: '重新发送',
            totalTime: 60,
            isCounting: false,
            userName: "",
            password: "",
            secondmsg: true,
            code: '' 
          }
        },
        created() {
          this.countDown()
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
            if (this.isCounting == true) { return }
            this.isCounting = true
            this.content = this.totalTime + 's' //这里解决60秒不见了的问题
            let clock = window.setInterval(() => {//setInterval定时器
              this.totalTime--
              this.content = this.totalTime + 's'
              if (this.totalTime < 0) {     //当倒计时小于0时清除定时器
                window.clearInterval(clock)
                this.content = '重新发送'
                this.totalTime = 60
                this.isCounting = false
                }
            },1000)
            },

          verifySuccess() {
              Toast.success({ message: '激活成功', duration: 2000})     
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