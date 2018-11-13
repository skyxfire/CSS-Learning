<template>
  <div style="">
    <div class="content" >
      看板
    </div>
    <div class="banner-hidden">
      <div class="banner-background-01"></div>
      <div class="banner-background-02"></div>
    </div>
  </div>
</template>

<script>

    export default {
        name: "HomePage",
        data() {
          return {
            userName: "",
            password: "",
            secondmsg: true,
            code: '' 
          }
        },
        methods: {
        },
        components: {
        }       
    }
</script>

<style>

body,html{
  background: #000099;
}
.content{
  color: #ffffff;
  text-align: center;
}
.banner-hidden{
 overflow: hidden;
 height:100px;
}
.banner-background-01 {
    width: 400%;
    height: 85px;
    background: url(../assets/background01.png) repeat-x;
    _background: url(../assets/background01.png) repeat-x;
    position: absolute;
    top: 371px;
    left: -236px;
    z-index: 999;
    animation: wave1 25s linear .4s infinite normal;
    -moz-animation: wave1 25s linear .4s infinite normal;
    -webkit-animation: wave1 25s linear .4s infinite normal;
    -o-animation: wave1 25s linear .4s infinite normal;
}

.banner-background-02 {
    width: 400%;
    height: 100px;
    background: url(../assets/background02.png) repeat-x;
    _background: 0 0;
    position: absolute;
    top: 356px;
    left: 0;
    z-index: 998;
    animation: wave2 60s linear .4s infinite normal;
    -moz-animation: wave2 60s linear .4s infinite normal;
    -webkit-animation: wave2 60s linear .4s infinite normal;
    -o-animation: wave2 60s linear .4s infinite normal;
}

@-webkit-keyframes wave1 {
    from {
        left: -236px
    }

    to {
        left: -1233px
    }
}

@-moz-keyframes wave1 {
    from {
        left: -236px
    }

    to {
        left: -1233px
    }
}

@-o-keyframes wave1 {
    from {
        left: -236px
    }

    to {
        left: -1233px
    }
}

@keyframes wave1 {
    from {
        left: -236px
    }

    to {
        left: -1233px
    }
}

@-webkit-keyframes wave2 {
    from {
        left: 0
    }

    to {
        left: -1009px
    }
}

@-moz-keyframes wave2 {
    from {
        left: 0
    }

    to {
        left: -1009px
    }
}

@-o-keyframes wave2 {
    from {
        left: 0
    }

    to {
        left: -1009px
    }
}

@keyframes wave2 {
    from {
        left: 0
    }

    to {
        left: -1009px
    }
}
</style>