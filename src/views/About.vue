<template>
  <div class="about">
    <div class="card-body">Liste des animes: {{ lesAnimes }}</div>

    <form @submit.prevent="submitForm">
      <div class="form-group row">
        <input type="text" class="" placeholder="title" v-model="anime.title">
        <input type="text" class="" placeholder="season" v-model="anime.season">
        <input type="text" class="" placeholder="score" v-model="anime.score">
        <input type="text" class="" placeholder="production_studio" v-model="anime.production_studio">
        <input type="text" class="" placeholder="number_of_episodes" v-model="anime.number_of_episodes">
        <input type="text" class="" placeholder="episode_duration" v-model="anime.episode_duration">
        <input type="text" class="" placeholder="synopsis" v-model="anime.synopsis">
        <input type="text" class="" placeholder="rating" v-model="anime.rating">
        <input type="text" class="" placeholder="URL" v-model="anime.URL">
        <button>Valider</button>
      </div>
    </form><hr>
    <div class="search-box">
      <input class="search-txt" id="search" type="text" name="" placeholder="type to search" value="" @keyup="getValue()">
      <button class="search-btn">
        <i class="fas fa-search"></i>
      </button>
    </div>
    <table class="table">
      <thead>
        <th>title</th>
        <th>season</th>
        <th>score</th>
        <th>production_studio</th>
        <th>number_of_episodes</th>
        <th>episode_duration</th>
        <th>synopsis</th>
        <th>rating</th>
        <th>URL</th>
      </thead>
      <tbody>
        <tr v-for="anime in $store.state.animeSearch" :key="anime.id" @dblclick="$data.anime = anime">
          <td> {{ anime.title }} </td>
          <td> {{ anime.season }} </td>
          <td> {{ anime.score }} </td>
          <td> {{ anime.production_studio }} </td>
          <td> {{ anime.number_of_episodes }} </td>
          <td> {{ anime.episode_duration }} </td>
          <td> {{ anime.synopsis }} </td>
          <td> {{ anime.rating }} </td>
          <td> {{ anime.URL }} </td>
          <td>
            <button @click="deleteAnime(anime)">
              Supprimer
            </button>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>

//import axios from 'axios';

export default {
  name: "anime-list",
  data() {
    return {
      anime: {},
      animes: [],
      lesAnimes: null,
      
    }
  },
  
  methods: {
      async getValue(){
      let value=document.getElementById('search').value;
      if(value.length>4)
      {
        await this.$store.dispatch('getAnimeSearch',value);
        
       /*
       var response = await  fetch("http://otakurealm.mooo.com/api/recherche/?search="+value)
       response.json().then((values) => {
         this.animes=values; 
       })*/
      }
    }
  }
}
</script>

<style scoped>
@import "https://use.fontawesome.com/releases/v5.15.3/css/all.css";
  .about{
    color: white;
    margin: 2%;
  }

  .search-btn{
    color: white;
    float: right;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgb(78, 74, 74);
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .search-txt{
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: white;
    font-size: 16px;
    transition: 0.4s;
    line-height: 40px;
    width: 200px;

  }

  .search-box{
    
    width: 300px;
    background: rgb(78, 74, 74);
    height: 40px;
    border-radius: 40px;
    padding: 10px;
  }


  th, td {
    border: 1px solid white;
    width: 200px;
    text-align: center;
  }
</style>