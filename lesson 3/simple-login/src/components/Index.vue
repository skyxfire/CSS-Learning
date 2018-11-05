<template>
  <div>
    <div class="content">
      <input type="number" @input="verifyUserName" placeholder="输入关键字搜索"/>    
     </div>
     <ul>
          <li><img src="assets/banner01.png"></li>
          <li><img src="assets/banner02.png"></li>
          <li><img src="assets/banner01.png"></li>
          <li><img src="assets/banner02.png"></li>
        </ul>
  </div>
</template>

<script>
  import { Toast } from 'we-vue'

    export default {
        name: "Login",
        data() {
          return {
            userName: "",
            password: "",
            secondmsg: true,
            code: '' 
          }
        },
        methods: {
          login() {
            this.$router.push("Login")
          },
          verifySuccess() {
              Toast.success({ message: '绑定成功', duration: 2000})     
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