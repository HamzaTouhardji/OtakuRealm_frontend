
<template>
  <div class="profil">


        <div class="featured">
          <div class="featured-vertical">
            <div class="featured-horizontal">
              <div class="featured-content">
                <div class="featured-content-title">{{anime.title}}</div>
                <div class="featured-content-anime">
                <span class="featured-content-synopsis">
                  <img class="photo" v-bind:src="anime.URL" v-bind:alt="anime.title">
                </span>
                <span class="featured-content-details">
                  <p>Season : {{anime.season}}</p>
                  <p>Number of episodes : {{anime.number_of_episodes}}</p>
                  <p>Episode duration : {{anime.episode_duration}}</p>
                  <p>Number of season : {{anime.season}}</p>
                  <p>Rating : {{anime.rating}}/10</p>
                </span>
                
                </div>
                <div
                  class="genre"
                  
                >
                <input
                    class="check-input"
                    type="checkbox"
                    v-bind:id="anime.id"
                    v-bind:value="anime.id"
                    v-model="selectedAnime"
                    @click="animes(anime.id)"
                  />
                <label class="noselect ajoutAnime" v-bind:for="anime.id">
                    Ajout à la watchlist
                  </label>
                  <select class="noselect ajoutAnime" v-bind:id="anime.id-1000" v-if="selectedAnime.includes(anime.id)" @change="changeNote(anime.id-1000)">
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
                </div>
              </div>
            </div>
          </div>
        </div>



    <div class="featured-content">
      <div class="featured-content-title">Synopsis</div>
      <span class="featured-content-synopsis">
      <p>{{anime.synopsis}}</p>
      </span>
    </div>
  </div>
</template>


<script>
export default ({
  name: "Home",
  data: () => ({
    anime: {},
    selectedAnime: [],
    selectedAnimeScore: [{}],
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: "center",
      },
      // 850px and up
      850: {
        itemsToShow: 5,
        snapAlign: "center",
      },
      // 1024 and up
      1250: {
        itemsToShow: 5,
        snapAlign: "start",
      },
    },
  }),
    async created() {
    //Simple GET request using axios
    //axios.get("http://otakurealm.mooo.com/api/recommandation").then(response => this.lesAnimes = response.data[0].title);
    await this.getAnimes();
    await this.getAnimeUser();
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
    async getAnimes(){
      var id = this.$route.query.id
      var response = await fetch('http://otakurealm.mooo.com/api/anime/'+id)
      this.anime = await response.json();
    },
    async getAnimeUser() {
      let headers = { "Content-Type": "application/json" };
      headers["Authorization"] = `Token ` + this.getCookie("token");
      var response = await fetch(
        "http://otakurealm.mooo.com/api/anime/utilisateur",
        { headers }
      );
      this.userAnime = await response.json();
      let Ianime = [[]];
      for (Ianime of this.userAnime) {
        this.selectedAnime.push(Ianime.id_anime.id);
        let animeObject = { id : Ianime.id_anime.id, score :Ianime.score};
        this.selectedAnimeScore.push(animeObject);
      }
    },
    animes: function (value) {
      let method;
      if(this.selectedAnime.includes(value)){
        method= "DELETE";
      }
      else{
        method= "POST"
      }

      let headers = { "Content-Type": "application/json" };
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
      var note = document.getElementById(value).value;

      let headers = { "Content-Type": "application/json" };
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
    score:function(value){
      if(this.selectedAnimeScore.find(object => object.id === value))
          return(this.selectedAnimeScore.find(object => object.id === value).score)
      else
          return -1   },
  }
});


</script>
<style scoped>

.profil {
  background-color: rgba(128, 128, 128, 0.021);
  margin : auto;
  width : 70%;
  margin-top: 5vw;
  margin-bottom: 5vw;
  padding-bottom: 5vw;
  border : 1px solid;
  border-color: rgba(255, 255, 255, 0.096);
  border-radius: 30px;
  box-shadow: 5px 5px 50px rgba(255, 255, 255, 0.096);
}

.photo {
  border-radius: 10%;
}
.featured {
  height: calc(70vh);
  background-size: cover;
  background-position: center;
  background-image: url(https://www.lartetcreation.net/Files/125948/Img/01/marbre-gris-argent-fond-noir-zoom.jpg);
  border-radius: 30px;
}

.featured-content {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5vw;
  max-width: 40vw;
  border-radius: 30px;
}

.featured-content-anime {
  display: flex;
}

.featured-vertical {
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 0%, transparent 90%);
  border-radius: 30px;
}

.featured-horizontal {
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111 50%, transparent 70%);
  border-radius: 30px;
}

.featured-content-title {
  font-size: 32px;
  color: #ececec;
  font-weight: bold;
  margin-bottom: 12px;
  letter-spacing: 1.2px;
  margin: 1vw;
}

.featured-content-synopsis {
  overflow: hidden;
  color: #ececec;
  display: -webkit-box;
  font-size: 16px;
  margin-bottom: 24px;
  -webkit-line-clamp: 12;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1; 
}

.featured-content-details {
  overflow: hidden;
  color: #ececec;
  display: -webkit-box;
  font-size: 16px;
  margin-bottom: 24px;
  -webkit-line-clamp: 12;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 2; 
}

.carousel__item {
  min-height: 200px;
  width: 200px;
  height: 15.5vw;
  color: var(--carousel-color-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-image {
  background-size: cover;
  min-height: 200px;
  width: 11vw;
  height: 15.5vw;
  border-radius: 8px;
}

.carousel__slide {
  padding: 10px;
  width: 10%;
}

.carousel {
  width: 95%;
  margin: auto;
}

.featured {
  width: 100%;
}

.featured-content-synopsis {
  text-align: left;
}

.carousel__next {
  background: none;
}

.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.genre {
  margin: 0.5rem 0.2rem;
}

.check-input {
  display: none;
}

.ajoutAnime {
  color: white;
  border: 0.1rem solid white;
  border-radius: 0.5rem;
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  margin: 1%;
  background-color: transparent;
}

.check-input:checked + label {
  background-color: #d42525;
  border-color: #e02040;
}

option {
  background-color: #111;
}
@media (max-width: 767px) {
  .featured {
    height: calc(100vh - 60px);
  }
}
</style>
