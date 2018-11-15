<template>
  <div>
    <div class="content">
      <div class="title">
        <label>找回您的密码</label>
      </div>
      <div class="subtitle">
        <ol>
          <li class="finished">账号验证</li>
          <li class="finished">验证码</li>
          <li class="selected">设置新密码</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ResetPasswordStep3"
    }
</script>

<style scoped>
  @import '../styles/main.css';
  @import '../styles/login.css';
</style>
