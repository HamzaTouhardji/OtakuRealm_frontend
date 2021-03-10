<template>
  <div class="about card text-center m-3">
    <div class="card-body">Liste des animes: {{ lesAnimes }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "anime-list",
  data() {
    return {
      lesAnimes: null
    };
  },
  created() {
    // Simple GET request using axios
    axios.get("http://otakurealm.mooo.com/api/recommandation").then(response => this.lesAnimes = response.data[0].title);
  }
};
</script>

<style scoped>
 .about {
   color: white;
 }
</style>