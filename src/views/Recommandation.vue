<template>
  <div class="Recommandation">
    <div class="featured">
      <div class="featured-vertical">
        <div class="featured-horizontal">
          <div class="featured-content">
            <div class="checkbox">
              <h2>Renseignez vos genres favoris</h2>
              <div class="genres">
                <div
                  class="genre"
                  v-for="item in $store.state.genre"
                  :key="item.id"
                >
                  <input
                    class="check-input"
                    type="checkbox"
                    v-bind:id="item.id"
                    v-bind:value="item.id"
                    v-model="selected"
                  />
                  <label class="noselect" v-bind:for="item.id">{{
                    item.name
                  }}</label>
                </div>
              </div>

              <span>selected : {{ selected }} </span>
              <input
                class="btn"
                type="button"
                name=""
                value="Genres"
                @click="genres"
              />
            </div>
            <div class="checkbox">
              <h2>Renseignez vos animes</h2>
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
                  <th>number_of_episodes</th>
                  <th>episode_duration</th>
                  <th>note</th>
                </thead>
                <tbody v-for="anime in $store.state.animeSearch" :key="anime.id">
                  <input
                    class="check-input"
                    type="checkbox"
                    v-bind:id="1000 + anime.id"
                    v-bind:value="anime.id"
                    v-model="selectedAnime"
                    @click="animes(anime.id)"
                  />
                  <tr>
                    <td>
                      <label class="noselect" v-bind:for="1000 + anime.id">{{
                        anime.title
                      }}</label>
                    </td>
                    <td>
                      <label class="noselect" v-bind:for="1000 + anime.id">{{
                        anime.season
                      }}</label>
                    </td>
                    <td>
                      <label class="noselect" v-bind:for="1000 + anime.id">{{
                        anime.number_of_episodes
                      }}</label>
                    </td>
                    <td>
                      <label class="noselect" v-bind:for="1000 + anime.id">{{
                        anime.episode_duration
                      }}</label>
                    </td>
                    <td>
                      <select v-bind:id="anime.id-1000" v-if="selectedAnime.includes(anime.id)" @change="changeNote(anime.id-1000)">
                        <option value = -1>---</option>
                        <option selected value = 0 v-if="0 == score(anime.id)">0</option>
                        <option value = 0 v-else>0</option>
                        <option selected value = 1 v-if="1 == score(anime.id)">1</option>
                        <option value = 1 v-else>1</option>
                        <option selected value = 2 v-if="2 == score(anime.id)">2</option>
                        <option value = 2 v-else>2</option>
                        <option selected value = 3 v-if="3 == score(anime.id)">3</option>
                        <option value = 3 v-else>3</option>
                        <option selected value = 4 v-if="4 == score(anime.id)">4</option>
                        <option value = 4 v-else>4</option>
                        <option selected value = 5 v-if="5 == score(anime.id)">5</option>
                        <option value = 5 v-else>5</option>
                        <option selected value = 6 v-if="6 == score(anime.id)">6</option>
                        <option value = 6 v-else>6</option>
                        <option selected value = 7 v-if="7 == score(anime.id)">7</option>
                        <option value = 7 v-else>7</option>
                        <option selected value = 8 v-if="8 == score(anime.id)">8</option>
                        <option value = 8 v-else>8</option>
                        <option selected value = 9 v-if="9 == score(anime.id)">9</option>
                        <option value = 9 v-else>9</option>
                        <option selected value = 10 v-if="10 == score(anime.id)">10</option>
                        <option value = 10 v-else>10</option>
                        
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
              <span>selected : {{ selectedAnime }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommandation",
  data: function () {
    return {
      selected: [],
      selectedAnime: [],
      selectedAnimeScore: [{}],
      userGenre: [],
      userAnime: [],
    };
  },
  methods: {
    getCookie: function (cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
    async getGenreUser() {
      let headers = { "Content-Type": "application/json" };
      console.log(this.getCookie("token"));
      headers["Authorization"] = `Token ` + this.getCookie("token");
      var response = await fetch(
        "http://otakurealm.mooo.com/api/genre/utilisateur",
        { headers }
      );
      this.userGenre = await response.json();
      let Igenre = [[]];
      for (Igenre of this.userGenre) {
        this.selected.push(Igenre.id_genre.id);
      }
    },

    async getAnimeUser() {
      let headers = { "Content-Type": "application/json" };
      console.log(this.getCookie("token"));
      headers["Authorization"] = `Token ` + this.getCookie("token");
      var response = await fetch(
        "http://otakurealm.mooo.com/api/anime/utilisateur",
        { headers }
      );
      this.userAnime = await response.json();
      console.log(this.userAnime);
      let Ianime = [[]];
      for (Ianime of this.userAnime) {
        console.log(Ianime);
        this.selectedAnime.push(Ianime.id_anime.id);
        let animeObject = { id : Ianime.id_anime.id, score :Ianime.score};
        console.log(animeObject);
        this.selectedAnimeScore.push(animeObject);
      }
    },

    async getValue(){
      let value=document.getElementById('search').value;
      console.log(value);
      if(value.length>4)
      {
        console.log("appel");
        await this.$store.dispatch('getAnimeSearch',value);
        console.log("getAnimeSearch fini");

      }
    },

    score:function(value){
      if(this.selectedAnimeScore.find(object => object.id === value))
        { console.log("trouve")       
          return(this.selectedAnimeScore.find(object => object.id === value).score)
        }      
      else
        { console.log("pas trouve")       
          return -1
        }    },

    genres: function () {
      let genreTest = [];
      for (let idgenre of this.selected) {
        let test = { id: idgenre };
        genreTest.push(test);
      }

      let headers = { "Content-Type": "application/json" };
      console.log(this.getCookie("token"));
      headers["Authorization"] = `Token ` + this.getCookie("token");

      fetch("http://otakurealm.mooo.com/api/genre/utilisateur", {
        method: "PUT",

        headers,

        body: JSON.stringify({
          genres: genreTest,
        }),
      }).then(
        function (response) {
          if (response.status === 200) {
            return response.json();
          } else {
            console.log("erreur requete");
            return null;
          }
        },
        function (err) {
          console.log("err", err);
        }
      );
    },

    animes: function (value) {
      console.log(value);
      let method;
      if(this.selectedAnime.includes(value)){
        method= "DELETE";
      }
      else{
        method= "POST"
      }

      let headers = { "Content-Type": "application/json" };
      console.log(this.getCookie("token"));
      headers["Authorization"] = `Token ` + this.getCookie("token");

      fetch("http://otakurealm.mooo.com/api/anime/utilisateur", {
        method,

        headers,

        body: JSON.stringify({
          id_anime: value, 
          score: -1, 
          description: "------"
        }),
      }).then(
        function (response) {
          if (response.status === 200) {
            return response.json();
          } else {
            console.log("erreur requete");
            return null;
          }
        },
        function (err) {
          console.log("err", err);
        }
      );
    },

    changeNote: function (value) {
      console.log(value);
      var note = document.getElementById(value).value;
      console.log(note);

      let headers = { "Content-Type": "application/json" };
      console.log(this.getCookie("token"));
      headers["Authorization"] = `Token ` + this.getCookie("token");

      fetch("http://otakurealm.mooo.com/api/anime/utilisateur", {
        method: "put",

        headers,

        body: JSON.stringify({
          id_anime: value+1000, 
          score: note, 
        }),
      }).then(
        function (response) {
          if (response.status === 200) {
            return response.json();
          } else {
            console.log("erreur requete");
            return null;
          }
        },
        function (err) {
          console.log("err", err);
        }
      );
    },
  },

  mounted() {
    this.$store.dispatch("getGenre");
    this.$store.dispatch("getAnimes");
  },
  async created() {
    await this.getGenreUser();
    await this.getAnimeUser();
  },
};
</script>

<style scoped>
.genres {
  display: flex;
  flex-wrap: wrap;
}

.genre {
  margin: 0.5rem 0.2rem;
}

.featured {
  background-size: cover;
  background-position: center;
  background-image: url(https://images3.alphacoders.com/144/thumb-1920-144565.jpg);
}

.featured-vertical {
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);
}

.featured-horizontal {
  width: inherit;
  height: inherit;
  /*background: linear-gradient(to right, #111 10%, transparent 70%);*/
}

.btn {
  background: none;
  border: none;
  color: rgb(131, 131, 131);
  padding: 5px;
  font-size: 18px;
  cursor: pointer;
  margin-left: 50%;
  transform: translate(-50%);
}

.form {
  padding-top: 100px;
}

.checkbox {
  padding-top: 100px;
  width: 45%;
  margin-left: 5%;
  color: white;
}

.checkbox h2 {
  border-bottom: 6px solid #d42525;
  margin-bottom: 50px;
  padding: 13px 0px;
}

.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.check-input:checked + label {
  background-color: #d42525;
  border-color: #e02040;
}

.check-input:checked + tr {
  background-color: #d42525;
  border-color: #e02040;
}

.check-input + label {
  color: white;
  border: 0.1rem solid white;
  border-radius: 0.5rem;
  padding: 0.3rem 0.5rem;
  cursor: pointer;
}

.check-input {
  display: none;
}

input {
  margin: 1%;
}
th,
td {
  border: 1px solid white;
  width: 200px;
  text-align: center;
}
</style>
