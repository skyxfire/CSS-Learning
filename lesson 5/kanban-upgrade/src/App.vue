<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <CompactUpgrade/>
  </div>
</template>

<script>
import CompactUpgrade from './components/CompactUpgrade'
export default {
  name: 'App',
  components: {
    CompactUpgrade
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
