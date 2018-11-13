<template>
  <div>
    <div class="span logo">
      <img src="../assets/logo.png" width="30%" />
      <p class="title">看板</p>
    </div>
    <div class="explain">
      <p style="margin-bottom: 20px;font-family: Helvetica,serif;">iOS企业版</p>
      <a class="button" href="itms-services://?action=download-manifest&url=https://www.wanglijie.cn/kanban/manifest.plist"><i></i><span>Download</span></a>
    </div>
    <!--<div class="waveWrapper waveAnimation">
      <div class="waveWrapperInner bgTop">
        <div class="wave waveTop" style="background-image: url('../assets/background01.png')"></div>
      </div>
      <div class="waveWrapperInner bgMiddle">
        <div class="wave waveMiddle" style="background-image: url('../assets/background02.png')"></div>
      </div>
      <div class="waveWrapperInner bgBottom">
        <div class="wave waveBottom" style="background-image: url('../assets/background01.png')"></div>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  body{
    /*background-image: -webkit-linear-gradient(to bottom, #009 0%, #009 59% ,#FFF 60%,  #FFF 100%);*/
    /*background-image: linear-gradient(to bottom, #009 0%, #009 59% ,#FFF 60%, #FFF 100%);*/
    /*background-image: -o-linear-gradient(to bottom, #009 0%, #009 59% ,#FFF 60%, #FFF 100%);*/
    background: #009;
  }

  * {
    margin: 0;
    padding:0;
  }

  .logo{
    margin: 50px auto;
    width: 100%;
    text-align: center;
  }

  .title {
    font-family: arial,"Hiragino Sans GB","Microsoft Yahei","微软雅黑","宋体",Tahoma,Arial,Helvetica,STHeiti,serif;
    font-size: 20px;
    color: #FFF;
  }

  .explain{
    width: 100%;
    text-align: center;
    background: #ffffff;
    position: absolute;
    bottom: 0;
    padding: 25% 0 27% 0;
    color: #999;
  }

  a {
    text-decoration: none;
  }

  .explain a{
    display: inline-block;
    margin-top: 10px;
    padding: 10px 0;
    width: 60%;
    background-color: #000099;
    color: #FFF;
    font-size: 16px;
    border-radius: 40px;
    box-shadow:0px 5px 10px 3px rgba(0, 0, 153, 0.3);
  }

  .explain a i{
    background: url("../assets/ios_icon.png") no-repeat;
    background-size: 100%;
    display: inline-block;
    width: 16px;
    height: 18px;
    vertical-align: middle;
  }

  .explain a span{
    vertical-align: middle;
    padding-left:5px;
  }


  @keyframes move_wave {
    0% {
      transform: translateX(0) translateZ(0) scaleY(1)
    }
    50% {
      transform: translateX(-25%) translateZ(0) scaleY(0.55)
    }
    100% {
      transform: translateX(-50%) translateZ(0) scaleY(1)
    }
  }
  .waveWrapper {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 40%;
    top: 0;
    margin: auto;
  }
  .waveWrapperInner {
    position: absolute;
    width: 100%;
    overflow: hidden;
    height: 100%;
    bottom: -1px;
  }
  .bgTop {
    z-index: 15;
    opacity: 0.5;
  }
  .bgMiddle {
    z-index: 10;
    opacity: 0.75;
  }
  .bgBottom {
    z-index: 5;
  }
  .wave {
    position: absolute;
    left: 0;
    width: 200%;
    height: 100%;
    background: repeat no-repeat 0 bottom;
    transform-origin: center bottom;
  }
  .waveTop {
    background-size: 90% 100px;
  }
  .waveAnimation .waveTop {
    animation: move-wave 3s;
    -webkit-animation: move-wave 3s;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
  }
  .waveMiddle {
    background-size: 90% 120px;
  }
  .waveAnimation .waveMiddle {
    -webkit-animation: move_wave 15s linear infinite;
    -o-animation: move_wave 15s linear infinite;
    animation: move_wave 15s linear infinite;
  }
  .waveBottom {
    background-size: 90% 100px;
  }
  .waveAnimation .waveBottom {
    /*animation: move_wave 15s linear infinite;*/
    /*-webkit-animation: move-wave 15s linear infinite;*/
    -webkit-animation: move_wave 15s linear infinite;
    -o-animation: move_wave 15s linear infinite;
    animation: move_wave 15s linear infinite;
  }
</style>
