<template>
  <Header/>
  <router-view></router-view>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components:{
    Header
  },
  mounted() {
    if (localStorage.token) {
      this.$store.dispatch('authenticated');
    }
  }

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  margin:0px;
}

body{
  margin:0px;
  background: #111;
}
</style>
