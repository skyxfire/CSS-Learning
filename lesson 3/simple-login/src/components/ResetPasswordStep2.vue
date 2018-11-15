<template>
  <div>
    <div class="content">
      <div class="title">
        <label>找回您的密码</label>
      </div>
      <div class="subtitle">
        <ol>
          <li class="finished">账号验证</li>
          <li class="selected">验证码</li>
          <li>设置新密码</li>
        </ol>
      </div>
      <Sms class="resetPasswordSms" @input="verifyCodeChanged" v-model="code"></Sms>
      <div align="center">
        <wv-button type="default" disabled v-show="isDisabled">下一步</wv-button>
        <wv-button type="primary" @click="toResetPasswordStep2" v-show="!isDisabled">下一步</wv-button>
        <p class="consentclause">没有收到手机短信?<a @click="countDown">{{content}}</a></p>
      </div>
    </div>
  </div>
</template>

<script>
  import Sms from 'ofcold-security-code';
  import { Toast } from 'we-vue';
  export default {
    name: "ResetPasswordStep2",
    data() {
      return {
        content: '重新发送',
        totalTime: 60,
        isCounting: false,
        isDisabled: true,
        userName: "",
        password: "",
        secondmsg: true,
        code: ''
      }
    },
    methods: {
      verifyCodeChanged() {
        this.isDisabled = !(this.code.length === 6);
      },
      toResetPasswordStep2() {
        this.$router.push("ResetPasswordStep3")
      },
      countDown () {
        if (this.isCounting === true) { return }
        this.isCounting = true;
        this.content = this.totalTime + 's'; //这里解决60秒不见了的问题
        let clock = window.setInterval(() => {//setInterval定时器
          this.totalTime--;
          this.content = this.totalTime + 's';
          if (this.totalTime < 0) {     //当倒计时小于0时清除定时器
            window.clearInterval(clock);
            this.content = '重新发送';
            this.totalTime = 60;
            this.isCounting = false;
          }
        },1000)
      },
    },
    components: {
      Sms
    }
  }
</script>

<style>
  @import '../styles/main.css';
  @import '../styles/login.css';
  @import "../styles/security-code.css";

  .resetPasswordSms {
    margin-top: 50px;
  }

</style>
