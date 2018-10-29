<template>
  <div class="content">
    <div class="title">
      <label>绑定账号</label>
    </div>
    <div>
      <div  class="input">
        <div class="inputTitle">
          <label v-show="isUserNameExist">手机号</label>
        </div>
        <input type="text" v-model="userName" placeholder="请输入手机号"/>
      </div>
      <div  class="input">
        <div class="inputTitle">
          <label v-show="isPasswordExist">密码</label>
        </div>
        <input type="password" v-model="password" placeholder="请输入密码"/>
      </div>
      <div>
        <button type="button" class="bindButton">绑定</button>
      </div>
      <div @click="userLogin">返回用户名密码登录</div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "DriverLogin",
        data() {
          return {
            userName: "",
            password: "",
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
          userLogin() {
            this.$router.push("Login")
          }
        }
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

  .input .inputTitle {
    height: 16px;
  }

  .input input {
    color: #303133;
    margin: 12px 0;
    line-height: 22px;
    width: 100%;
    font-size: 16px;
    outline: 0;
    border-width: 0;
  }

  .bindButton {
    margin-top: 58px;
    height: 40px;
    width: 100%;
    background-color: #000099;
    color: #FFF;
    font-size: 16px;
    border-radius: 4px;
    outline: 0;
  }

</style>
