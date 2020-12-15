<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Home from '@/components/home'
export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-user-select: none; 
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
