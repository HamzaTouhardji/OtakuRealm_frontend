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
        <tr v-for="anime in animes" :key="anime.id" @dblclick="$data.anime = anime">
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
      lesAnimes: null
    }
  },
  async created() {
    //Simple GET request using axios
    //axios.get("http://otakurealm.mooo.com/api/recommandation").then(response => this.lesAnimes = response.data[0].title);
    await this.getAnimes();
  },
  methods: {
    submitForm(){
      if (this.anime.id === undefined) {
        this.createAnime();
      } else {
        this.editAnime();
      }
    },

    async getAnimes(){
      var response = await fetch('http://0.0.0.0:8000/api/recommandation');
      this.animes = await response.json();
    },
    async createAnime(){
      await this.getAnimes();
      await fetch('http://0.0.0.0:8000/api/recommandation', {
        method: 'post',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(this.anime)
      });
      await this.getAnimes();
    },
    async editAnime(){
      await this.getAnimes();
      await fetch(`http://0.0.0.0:8000/api/recommandation/${this.anime.id}`, {
        method: 'put',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(this.anime)
      });
      await this.getAnimes();
      this.anime = {};
    },
    async deleteAnime(anime){
      await this.getAnimes();
      await fetch(`http://0.0.0.0:8000/api/recommandation/${anime.id}`, {
        method: 'delete',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(this.anime)
      });
      await this.getAnimes();
    }
  }
}
</script>

<style scoped>
  .about{
    color: white;
    margin: 2%;
  }
  input {
    margin: 1%;
  }
  th, td {
    border: 1px solid white;
    width: 200px;
    text-align: center;
  }
</style>