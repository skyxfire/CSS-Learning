<template>
  <div class="animation-demo">
    <div style="height: 90px;position: relative;">
      <transition name="fade">
        <div class="animation-div" v-show="isShowing" v-bind:class="{'my-animation' : isShowing}"></div>
      </transition>
    </div>
    <button @click="startAnimation">Animation</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isShowing : false
    }
  },
  methods: {
    startAnimation() {
      this.isShowing = !this.isShowing;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .animation-div {
    height: 50px;
    width: 200px;
    border-radius: 25px;
    background: cornflowerblue;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .my-animation {
    animation: fade-in .5s;
  }
  .fade-enter-active {
    animation: fade-in .5s;
  }
  .fade-leave-active {
    animation: fade-in .5s reverse;
  }

  @keyframes fade-in {
    0% {
      height: 0;
      width: 0;
      border-radius: 0;
    }
    50% {
      height: 50px;
      width: 50px;
      border-radius: 25px;
    }
    100% {
      height: 50px;
      width: 200px;
      border-radius: 25px;
    }
  }

  .animation-demo  button {
    margin: 10px 20px;
  }
</style>
