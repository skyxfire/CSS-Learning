<template>
  <div>
    <div class="content">
      <div class="title">
        <label>Hi<br>欢迎加入</label>
      </div>
        <!-- 手机号 begin-->
      <div  class="input">
        <div class="inputTitle">
          <label v-show="isUserNameExist">请输入手机号</label>
        </div>
        <span style="display: inline-block;position: relative;width: 100%;">
          <input type="phone" maxlength="13" @input="verifyUserName" v-model.trim="userName" placeholder="请输入手机号"/>
          <span class="weui-icon-clear" style="position: absolute;  right: 0; top: 50%; margin-top: -7px;" v-show="userName.length > 0" @click="resetUserName"></span>
        </span>
      </div>
        <!-- 手机号 end-->
        <!-- 密码 begin
      <div  class="input">
        <div class="inputTitle">
          <label v-show="isPasswordExist">密码</label>
        </div>
        <input type="password" v-model="password" placeholder="请输入密码"/>
      </div>
        密码 end-->
        <div align="center">
          <wv-button type="default" disabled v-show="isDisabled">下一步</wv-button>
          <wv-button type="primary" @click="toCodeVerify" v-show="isActive">下一步</wv-button>
          <p class="consentclause">点击下一步即代表同意<a href="#">《服务协议》</a></p>
        </div>         
     </div>
     <!-- <div class="changeLogin" @click="driverLogin">司机账号登录</div>   -->
      <div class="thirdNum">
        <span class="accountText">第三方账号登录</span>
        <ul>
          <li><i class="alipay-login"></i></li>
          <li><i class="wechat-login"></i></li>
        </ul>
      </div>
  </div>
</template>

<script>
  import { TopTips } from 'we-vue'

  export default {
    name: "SignUp",
    data() {
      return {
        isActive: false,
        isDisabled: true,
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
      toCodeVerify() {
        let reg = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/;
        let phone = this.userName.replace(/\s/g, '');
        if (!reg.test(phone)) {
          TopTips({ message: '请正确输入手机号', duration: 2000});
        } else {
          this.$router.push("CodeVerify");
        }
      },

      verifyUserName() {
        if (this.userName.length == 0 ) {
          this.isActive = false
          this.isDisabled = true
        } else {
          this.isActive = true
          this.isDisabled = false
        }
      },
      resetUserName() {
        this.userName = ""
      }
    },
    watch: {
      userName(newValue, oldValue) { // 监听
        this.userName = newValue.length > oldValue.length ? newValue.replace(/\s/g, '').replace(/(\d{3})(\d{0,4})(\d{0,4})/, '$1 $2 $3') : this.userName.trim()
      }
    }
  }
</script>

<style>
  @import '../styles/main.css';
  @import '../styles/login.css';
</style>
