<template>
  <div>
    <div class="content">
      <div class="title">
        <label>Hi<br>请登录</label>
      </div>
      <!-- 手机号 begin-->
      <div  class="input">
        <div class="inputTitle">
          <label v-show="isUserNameExist">请输入手机号</label>
        </div>
        <span style="display: inline-block;position: relative;width: 100%;">
          <input type="phone" maxlength="13" @input="verifyUserNameAndPassword" v-model.trim="userName" placeholder="请输入手机号"/>
          <span class="weui-icon-clear" style="position: absolute;  right: 0; top: 50%; margin-top: -7px;" v-show="userName.length > 0" @click="resetUserName"></span>
        </span>
      </div>
      <div class="input">
        <div class="inputTitle">
          <label v-show="isPasswordExist">请输入密码</label>
        </div>
        <span style="display: inline-block;position: relative;width: 100%;">
          <input type="password" @input="verifyUserNameAndPassword" v-model="password" placeholder="请输入密码"/>
          <span class="weui-icon-clear" style="position: absolute;  right: 0; top: 50%; margin-top: -7px;" v-show="password.length > 0" @click="resetPassword"></span>
        </span>
      </div>
      <div>
        <div align="center">
          <wv-button type="default" disabled v-show="isDisabled">下一步</wv-button>
          <wv-button type="primary" @click="toCodeVerify" v-show="!isDisabled">下一步</wv-button>
        </div>
      </div>
      <div class="signInSupport">
        <ul>
          <li @click="toForgotPassword">忘记密码</li>
          <li @click="toSignUp">注册账号</li>
        </ul>
      </div>
    </div>
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
  import { TopTips } from 'we-vue';
  export default {
    name: "SignIn",
    data() {
      return {
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

      toForgotPassword() {
        this.$router.push("ResetPasswordStep1");
      },

      toSignUp() {
        this.$router.push("SignUp");
      },

      verifyUserNameAndPassword() {
        this.isDisabled = this.userName.length === 0 || this.password.length === 0;
      },
      resetUserName() {
        this.userName = ""
      },
      resetPassword() {
        this.password = ""
      }
    },
    watch: {
      userName(newValue, oldValue) { // 监听
        this.userName = newValue.length > oldValue.length ? newValue.replace(/\s/g, '').replace(/(\d{3})(\d{0,4})(\d{0,4})/, '$1 $2 $3') : this.userName.trim()
      }
    }
  }
</script>

<style scoped>
  @import '../styles/main.css';
  @import '../styles/login.css';
</style>
