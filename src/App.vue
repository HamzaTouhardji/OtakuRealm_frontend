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
  methods:{
    getCookie: function(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }

  },
  mounted() {    
      if(this.getCookie('token')!="")
        this.$store.dispatch('authenticated');
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
