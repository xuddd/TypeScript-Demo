<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld/> -->
    <DroneList></DroneList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import DroneList from './components/DroneList.vue';

@Component({
  components: {
    HelloWorld,
    DroneList,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  font-family: '微软雅黑';
  height: 100%;
  overflow: hidden;
  color: #fff;
  /* background: url('../images/bg.jpg') no-repeat; */
  background-size: cover;
  width: 1920px;
}

p{
  font: small;
  text-align: left;
  line-height: 20px;
  margin: 0px;
}
img{
  border: none;
}
</style>
