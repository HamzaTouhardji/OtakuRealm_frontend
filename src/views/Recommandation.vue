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
              <input class="btn" type="button" name="" value="Genres" @click="genres" />
            </div>
            <div class="checkbox">
              <h2>Renseignez vos animes</h2>
              <table class="table">
                <thead>
                  <th>title</th>
                  <th>season</th>
                  <th>number_of_episodes</th>
                  <th>episode_duration</th>
                </thead>
                <tbody v-for="anime in $store.state.animes" :key="anime.id">
                  <input
                    class="check-input"
                    type="checkbox"
                    v-bind:id="1000 + anime.id"
                    v-bind:value="anime.id"
                    v-model="selectedAnime"
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
      animes: [],
      userGenre:[],
    };
  },
  methods: {
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
    },
    async getGenreUser(){
   
      let headers = {"Content-Type": "application/json"};
      console.log(this.getCookie('token'));
      headers["Authorization"] = `Token ` + this.getCookie('token');
      var response = await fetch('http://otakurealm.mooo.com/api/genre/utilisateur',{headers})
      this.userGenre = await response.json();
      console.log(this.userGenre);
      let Igenre = [[]];
      for (Igenre of this.userGenre){
        console.log(Igenre.id_genre.id);
        this.selected.push(Igenre.id_genre.id);
      }
    },

    genres: function () {
      let genreTest =[];
      for (let idgenre of this.selected){
        let test = {"id":idgenre};
        console.log("test");
        console.log(test);
        genreTest.push(test);
      }
        console.log(
        JSON.stringify({
          genres: genreTest,
        })
      );
      let headers = {"Content-Type": "application/json"};
      console.log(this.getCookie('token'));
      headers["Authorization"] = `Token ` + this.getCookie('token');

      fetch("http://otakurealm.mooo.com/api/genre/utilisateur", {
          method: 'PUT',

          headers,

          body: JSON.stringify({
            genres: genreTest,
          }),
        })
        .then(
            function (response) {
              if (response.status === 200) {
                console.log(response);
                return response.json();
              } else {
                console.log("erreur requete");
                console.log(response);
                return null;
              }
            },
            function (err) {
              console.log("err", err);
            }
          )
    }
  },

  mounted() {
    this.$store.dispatch("getGenre");
    this.$store.dispatch("getAnimes");
  },
  async created() {
    await this.getGenreUser();
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
