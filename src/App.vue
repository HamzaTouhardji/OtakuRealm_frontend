<template>
<HeaderSection/>
<Menu/>
</template>

<script>
import HeaderSection from './components/Header.vue'
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    HeaderSection,
    Menu
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;

  
}
</style>
