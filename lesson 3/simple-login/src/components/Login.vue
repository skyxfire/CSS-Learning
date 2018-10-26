<template>
  <div class="content">
    <div class="title">
      <label>绑定账号</label>
    </div>
    <div>
      <div  class="input">
        <div>
          <label>手机号</label>
        </div>
        <input type="text" placeholder="请输入手机号"/>
      </div>
      <div  class="input">
        <div>
          <label>密码</label>
        </div>
        <input type="password" placeholder="请输入密码"/>
      </div>
      <div>
        <button type="button" class="bindButton">绑定</button>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
  .content {
    margin: 60px 30px 4px 30px;
    text-align: left;
  }

  .title {
    font-size: 24px;
    color: #303133;
  }

  .input {
    border-bottom: 1px solid rgba(235,238,245,1);
    margin-top: 26px;
  }

  .input label {
    color: #C0C4CC;
    font-size: 12px;
  }

  .input input {
    color: #303133;
    margin: 12px 0;
    line-height: 22px;
    width: 100%;
    font-size: 16px;
  }

  .bindButton {
    margin-top: 58px;
    height: 40px;
    width: 100%;
    background-color: #000099;
    color: #FFF;
    font-size: 16px;
    border-radius: 4px;
  }

</style>
