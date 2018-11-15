<template>
  <div>
    <div class="content">
      <div class="title">
        <label>找回您的密码</label>
      </div>
      <div class="subtitle">
        <ol>
          <li class="selected">账号验证</li>
          <li>验证码</li>
          <li>设置新密码</li>
        </ol>
      </div>
      <div  class="input">
        <div class="inputTitle">
          <label v-show="isUserNameExist">请输入手机号</label>
        </div>
        <span style="display: inline-block;position: relative;width: 100%;">
          <input type="phone" maxlength="13" @input="userNameChanged" v-model.trim="phoneNumber" placeholder="请输入手机号"/>
          <span class="weui-icon-clear" style="position: absolute;  right: 0; top: 50%; margin-top: -7px;" v-show="isUserNameExist" @click="resetUserName"></span>
        </span>
      </div>
      <div align="center">
        <wv-button type="default" disabled v-show="isDisabled">下一步</wv-button>
        <wv-button type="primary" @click="toResetPasswordStep2" v-show="!isDisabled">下一步</wv-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { TopTips,Button } from 'we-vue';

  export default {
    name: "ResetPasswordStep1",
    data() {
      return {
        isDisabled: true,
        phoneNumber: "",
      }
    },
    computed: {
      isUserNameExist() {
        return this.phoneNumber.length > 0
      },
      userNameChanged() {
        this.isDisabled = (this.phoneNumber.length === 0);
      },
    },
    methods: {
      toResetPasswordStep2() {
        this.$router.push("ResetPasswordStep2")
      },
      resetUserName() {
        this.phoneNumber = ""
      },
    },
    watch: {
      phoneNumber(newValue, oldValue) { // 监听
        this.phoneNumber = newValue.length > oldValue.length ? newValue.replace(/\s/g, '').replace(/(\d{3})(\d{0,4})(\d{0,4})/, '$1 $2 $3') : this.phoneNumber.trim()
      }
    }
  }
</script>

<style scoped>
  @import '../styles/main.css';
  @import '../styles/login.css';
</style>
