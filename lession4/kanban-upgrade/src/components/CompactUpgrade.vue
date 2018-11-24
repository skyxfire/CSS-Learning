<template>
  <div class="HolyGrail">
    <div class="HolyGrail-Left">
      <div class="logo">
        <img src="../assets/logo.png"/>
        <p class="heading">联合利华 看板</p>
      </div>
      <div class="svg-box">
        <svg class="editorial" viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0
                        58-18 88-18s
                        58 18 88 18
                        58-18 88-18
                        58 18 88 18
                        v44h-352z">
            </path>
          </defs>
          <g class="parallax">
            <use xlink:href="#gentle-wave" x="50" y="0" fill="rgba(255,255,255,.5)"></use>
            <use xlink:href="#gentle-wave" x="50" y="3" fill="rgba(255,255,255,.5)"></use>
            <use xlink:href="#gentle-wave" x="50" y="6" fill="rgba(255,255,255,.5)"></use>
          </g>
        </svg>
      </div>
    </div>
    <div class="HolyGrail-Right">
      <div class="spinner" v-show="isDownloading">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
      <div class="subContent">
        <p>{{downloadContent}}</p>
        <a class="downloadBtn" @click="pressedDownload" v-show="!isDownloading" :href="downloadUrl"><i></i><span>Download</span></a>
        <p style="margin-top: 2em;"v-show="isDownloading">请点击Home键查看App下载情况</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CompactUpgrade",
    data() {
      return {
        isDownloading: false,
      }
    },
    computed: {
      downloadUrl() {
        return "itms-services://?action=download-manifest&url=https://www.wanglijie.cn/kanban/manifest.plist";
      },
      downloadContent: function () {
        return "iOS企业版";
      }
    },
    methods: {
      pressedDownload() {
        this.isDownloading = true;
      }
    }
  }
</script>

<style>
  @import "../styles/wave.css";
  @import "../styles/doubleBounce.css";

  * {
    padding: 0 0;
    margin: 0 0;
  }

  .HolyGrail-Left {
    position: relative;
  }

  .HolyGrail-Left .svg-box {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .HolyGrail .logo {
    /*top: 50%;*/
    transform: translateY(50%);
    -webkit-transform: translateY(50%);
  }

  .HolyGrail-Left img {
    width: 30%;
  }

  .HolyGrail .heading {
    color: white;
  }

  .HolyGrail-Right {
    position: relative;
  }

  .HolyGrail-Right .spinner {
    position: absolute;
    bottom: 5em;
    left: 0;
    right: 0;
  }

  .HolyGrail-Right .subContent {
    transform: translateY(50%);
  }

  .HolyGrail-Right p, .HolyGrail-Right a {

    font-family: sans-serif;
    font-weight: 500;
    font-size: 1.2em;
  }

  .HolyGrail-Right p {
    color: #009;
  }

  .HolyGrail-Right a {
    color: white;

    padding: 0.5em;
    background: #009;
    display: block;
    margin: 2em 3em;
    border-radius: 1.3em;
    text-decoration: none;
  }

  .HolyGrail-Right a i {
    background: url(../assets/ios_icon.png) no-repeat;
    background-size: 100%;
    height: 24px;
    width: 17px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.3em;
  }

  .HolyGrail {
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .HolyGrail-Left {
    flex: 1 1 320px;
    background: #009;
  }

  .HolyGrail-Right {
    flex: 1 1 220px;
  }

  @media (min-width: 568px) {
    .HolyGrail {
      flex-direction: row;
    }
  }

</style>
