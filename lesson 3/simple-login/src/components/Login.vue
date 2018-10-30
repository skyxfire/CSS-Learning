<template>
  <div>
    <div class="content">
      <div class="title">
        <label>Hi<br>欢迎加入</label>
      </div>
      <Sms v-model="code"></Sms>
        <!-- 手机号 begin-->
      <div  class="input">
        <div class="inputTitle">
          <label v-show="isUserNameExist">手机号</label>
        </div>
        <input type="number" @input="verifyUserName" v-model="userName" placeholder="请输入手机号"/>
      </div>
        <!-- 手机号 end-->
        <!-- 密码 begin-->
      <div  class="input">
        <div class="inputTitle">
          <label v-show="isPasswordExist">密码</label>
        </div>
        <input type="password" @input="verifyPassword" v-model="password" placeholder="请输入密码"/>
      </div>
        <!-- 密码 end-->
        <div align="center">
          <button type="button" class="bindButton" >登录</button>
        </div>         
     </div>
     <!-- <div class="changeLogin" @click="driverLogin">司机账号登录</div>   -->
    
     <div class="changeLogin">第三方账号登录</div>  
  </div>
</template>

<script>
  import Sms from 'ofcold-security-code'
  import { TopTips } from 'we-vue'

    export default {
        name: "Login",
        data() {
          return {
            userName: "",
            password: "",
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
          driverLogin() {
            this.$router.push("DriverLogin")
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
  .content {
      margin: 60px 30px;
      text-align: left;
    }

  .title {
    font-size: 24px;
    color: #303133;
  }

  .input {
    border-bottom: 1px solid #f0f0f0;
    margin-top: 26px;
  }

  .input label {
    color: #C7C7CC;
    font-size: 12px;
  }

  .input .inputTitle {
    height: 18px;
  }

  .input input {
    color: #1d1d26;
    margin: 12px 0;
    line-height: 22px;
    width: 100%;
    font-size: 18px;
    outline: 0;
    border-width: 0;
  }

  .bindButton {
    margin-top: 58px;
    padding: 10px 0;
    width: 80%;
    background-color: #FF7F41;
    color: #FFF;
    font-size: 16px;
    border-radius: 20px;
    outline: 0;
    border:0;
  }

  .bindButton:hover {
    background-color: #E67339;
  }

  .changeLogin {
    position: absolute;
    bottom:30px;
    width: 100%;
    color: #FF7F41;
    font-size: 12px;
  }
  
  .changeLogin {
    position: absolute;
    bottom:30px;
    width: 100%;
    color: #FF7F41;
    font-size: 12px;
    background-color: #FFF;
  }

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