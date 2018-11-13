<template>
  <div class="HolyGrail">
    <div class="HolyGrail-body">
      <main class="HolyGrail-content" style="background-color: #009">
        <div class="span logo">
          <img src="../assets/logo.png" width="30%" />
          <p class="title">联合利华 看板</p>
        </div>

      </main>
      <div class="HolyGrail-control explain" style="background-color: white">
        <div class="spinner" v-show="isDownloading">
          <div class="double-bounce1">
          </div>
          <div class="double-bounce2">
          </div>
        </div>
        <p style="margin: 40px auto;font-family: Helvetica,serif;">{{downloadContent}}</p>
        <a class="button" @click="pressedDownload" v-show="!isDownloading && isAndroid" :href="downloadUrl"><i class="androidIcon"></i><span>Download</span></a>
        <a class="button" @click="pressedDownload" v-show="!isDownloading && !isAndroid" :href="downloadUrl"><i class="iOSIcon"></i><span>Download</span></a>
        <p v-show="isDownloading">请点击Home键查看App下载情况</p>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "LandscapeDownload",
    data() {
      return {
        isDownloading: false,
        isAndroid: false
      }
    },
    computed: {

      downloadUrl() {
        if (this.isAndroid) {
          return "";
        } else {
          return "itms-services://?action=download-manifest&url=https://www.wanglijie.cn/kanban/manifest.plist";
        }
      },
      downloadContent: function () {
        if (this.isAndroid) {
          return "Android企业版";
        } else {
          return "iOS企业版";
        }
      }
    },
    methods: {
      pressedDownload() {
        this.isDownloading = true;
      }
    },
    created() {
      let ua = navigator.userAgent.toLowerCase();
      return  isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;
    }
  }

</script>

<style scoped>

  .spinner {
    width: 60px;
    height: 60px;

    position: relative;
    margin: 0 auto;
  }

  .disabled {
    pointer-events: none;
  }

  .double-bounce1, .double-bounce2  {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: cornflowerblue;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;

    -webkit-animation: sk-bounce 3.0s infinite ease-in-out;
    animation: sk-bounce 3.0s infinite ease-in-out;
  }

  .double-bounce2 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  @-webkit-keyframes sk-bounce {
    0%, 100% { -webkit-transform: scale(0.5) }
    50% { -webkit-transform: scale(2.0) }
  }

  @keyframes sk-bounce {
    0%, 100% {
      transform: scale(0.5);
      -webkit-transform: scale(0.5);
    } 50% {
        transform: scale(2.0);
        -webkit-transform: scale(2.0);
      }
  }

  .span {
    margin: 10vh auto;
    color: white;
  }

  a {
    text-decoration: none;
  }

  .explain {
    margin-top: 10vh;
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

  /*.explain a i {
    background: url("../assets/Android.png");
    background-size: 100%;
    display: inline-block;
    width: 16px;
    !*height: 18px;*!
    vertical-align: middle;
  }*/
  .androidIcon {
    background: url("../assets/Android.png") no-repeat;
    background-size: 100%;
    display: inline-block;
    width: 18px;
    height: 18px;
    vertical-align: middle;
  }

  .iOSIcon {
    background: url("../assets/ios_icon.png") no-repeat;
    background-size: 100%;
    display: inline-block;
    width: 16px;
    height: 18px;
    vertical-align: middle;
  }

  .explain a span{
    vertical-align: middle;
    padding-left:8px;
  }

  .HolyGrail,
  .HolyGrail-body {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  .HolyGrail-content {

  }
  .HolyGrail-control {
    order: 1;
  }

  @media (min-width: 568px) {

    .span {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      color: #FFF;
      margin: auto;
    }

    .explain {
      margin-top: 20vh;
    }

    .HolyGrail-body {
      flex-direction: row;
      flex: 1;
    }
    .HolyGrail-content {
      flex: 1;
    }
    .HolyGrail-control {
      /* 12em is the width of the columns */
      flex: 0 0 16em;
    }
  }
</style>
