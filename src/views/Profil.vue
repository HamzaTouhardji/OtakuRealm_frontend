
<template>
  <div class="profil">
    <div v-if="formulaire" class="featured">
      <div class="featured-vertical">
        <div class="featured-horizontal">
          <div class="featured-content">
            <div class="form-box">
              <h1>Edit your profil</h1>
              <div class="text-box">
                <i class="fa fa-user" aria-hidden="true"></i>
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  v-model="$store.state.user.username"
                />
              </div>
               <div class="text-box">
                <i class="fa fa-user" aria-hidden="true"></i>
                <input
                  type="text"
                  placeholder="profil picture url"
                  name="url"
                  v-model="$store.state.user.photo_de_profil"
                />
              </div>
              <div class="text-box">
                <i class="fa fa-user" aria-hidden="true"></i>
                <input
                  type="number"
                  placeholder="Age"
                  name="Age"
                  v-model="$store.state.user.age"
                />
              </div>
              <div class="text-box">
                <i class="fa fa-user" aria-hidden="true"></i>
                <select
                  placeholder="Sex"
                  v-model="$store.state.user.sexe"
                >
                  <option selected value="M" v-if="'M' == $store.state.user.sexe">
                    Male
                  </option>
                  <option v-else value="M">Male</option>

                  <option selected value="F" v-if="'F' == $store.state.user.sexe">
                    Female
                  </option>
                  <option v-else value="F">Female</option>
                </select>
              </div>
              <div class="text-box">
                <i class="fa fa-user" aria-hidden="true"></i>
                <input
                  type="text"
                  placeholder="Bio"
                  name="bio"
                  v-model="$store.state.user.bio"
                />
              </div>

              <div class="buttons">
                 <div class="button-effect"><span  @click="editProfil">Save changes</span></div>
                 <div class="button-effect"><span  @click="formulaire = flase">Cancel</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="featured">
      <div class="featured-vertical">
        <div class="featured-horizontal">
          <div class="featured-content">
            <div class="featured-content-title">Profil</div>
            <span class="featured-content-synopsis">
              <img class="photo" v-bind:src="$store.state.user.photo_de_profil" alt="" />
              <p>{{ $store.state.user.bio }}</p>
              <p>Sex: {{ $store.state.user.sexe }}</p>
              <p>Age: {{ $store.state.user.age }}</p>
            </span>
            <div class="genres" :key="$store.state.userGenre">
              <div class="genre" v-for="item in $store.state.userGenre" :key="item.id">
                <label class="noselect" v-bind:for="item.id_genre.id">{{
                  item.id_genre.name
                }}</label>
              </div>
            </div>
            <div class="buttons">
              <router-link class="link" to="/recommandation">
               <div class="button-effect"><span @click="formulaire = false">Edit preferences</span></div>
               </router-link>
               <div class="button-effect"><span  @click="formulaire = true">Edit profil</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="featured-content">
      <div class="featured-content-title">Already reviewed</div>
    </div>
    <Carousel
      :settings="settings"
      :breakpoints="breakpoints"
      :key="$store.state.userAnime"
    >
      <Slide v-for="anime in $store.state.userAnimeRated" :key="anime">
        <div class="carousel__item">
          <a
            v-bind:href="'#/detailanime?id=' + anime.id_anime.id"
            draggable="false"
          >
            <img
              v-bind:src="anime.id_anime.URL"
              v-bind:alt="anime.id_anime.title"
              class="card-image"
              draggable="false"
            />
          </a>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
    <div class="featured-content">
      <div class="featured-content-title">Yet to be reviewed</div>
    </div>
    <Carousel
      :settings="settings"
      :breakpoints="breakpoints"
      :key="$store.state.userAnime"
    >
      <Slide v-for="anime in $store.state.userAnimeNotRated" :key="anime">
        <div class="carousel__item">
          <a
            v-bind:href="'#/detailanime?id=' + anime.id_anime.id"
            draggable="false"
          >
            <img
              v-bind:src="anime.id_anime.URL"
              v-bind:alt="anime.id_anime.title"
              class="card-image"
              draggable="false"
            />
          </a>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
    <div class="featured-content">
      <div class="featured-content-title">Recommendation</div>
    </div>
    <Carousel
      :settings="settings"
      :breakpoints="breakpoints"
      :key="updateR"
    >
      <Slide v-for="anime in $store.state.recommandation" :key="anime">
        <div class="carousel__item">
          <a
            v-bind:href="'#/detailanime?id=' + anime.id"
            draggable="false"
          >
            <img
              v-bind:src="anime.URL"
              v-bind:alt="anime.title"
              class="card-image"
              draggable="false"
            />
          </a>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>


<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Profil",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    formulaire: false,
    updateR: 0,
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
  beforeCreate(){
      this.$store.dispatch("getInfoUser");
      this.$store.dispatch("getAnimeUser");
      this.$store.dispatch("getGenreUser");
  },
  async created() {
    await this.getRecommandationUser();
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
    async getRecommandationUser() {
      let headers = { "Content-Type": "application/json" };

      headers["Authorization"] = `Token ` + this.getCookie("token");
      var response = await fetch(
        "http://otakurealm.mooo.com/api/recommandation/",
        { headers }
      );
      this.$store.state.listeRecommadation = await response.json();
      this.getAnimes()
    },
    async getAnimes(){
      for (var recomm of this.$store.state.listeRecommadation){
      var response = await fetch('http://otakurealm.mooo.com/api/anime/'+recomm.id_anime)
      this.$store.state.recommandation.push(await response.json()) ;
      }
      this.updateR+=1
    },
    editProfil: function () {
      let headers = { "Content-Type": "application/json" };

      headers["Authorization"] = `Token ` + this.getCookie("token");

      fetch("http://otakurealm.mooo.com/api/info_utilisateur/", {
        method: "PUT",
        headers,
        body: JSON.stringify(this.$store.state.user),
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
      this.formulaire = false;
    },
  },
});
</script>
<style scoped lang="scss">
option {
  background-color: #111;
  color: white;
}

.buttons {
  display: flex;
}

.form-box {
  width: 280px;

  color: white;
}

.form-box h1 {
  font-size: 32px;
  border-bottom: 6px solid #1e1e33;
  margin-bottom: 50px;
  padding: 13px 0px;
}
.link {
  width: 100%;
  text-decoration: none;
}
.text-box {
  width: 100%;
  overflow: hidden;
  font-size: 20px;
  padding: 8px 0;
  margin: 8px 0;
  border-bottom: 1px solid #1e1e33;
}

.text-box i {
  width: 26px;
  float: left;
  text-align: center;
}

.text-box input,
select {
  border: none;
  outline: none;
  background: none;
  color: white;
  font-size: 18px;
  width: 80%;
  float: left;
  margin: 0 10px;
}

.btn {
  width: 100%;
  background: none;
  border: 2px solid #1e1e33;
  color: white;
  padding: 5px;
  font-size: 18px;
  cursor: pointer;
  margin: 12px 0;
}
.profil {
  background-color: rgba(128, 128, 128, 0.021);
  margin: auto;
  width: 70%;
  margin-top: 5vw;
  margin-bottom: 5vw;
  padding-bottom: 5vw;
  border: 1px solid;
  border-color: rgba(255, 255, 255, 0.096);
  border-radius: 30px;
  box-shadow: 5px 5px 50px rgba(255, 255, 255, 0.096);
}

.photo {
  width: 10vw;
  border-radius: 100%;
}
.featured {
  background-size: cover;
  background-position: center;
  background-image: url(https://pbs.twimg.com/media/EqQ82EIXIAAmbmc?format=jpg);
  border-radius: 30px;
}

.featured-content {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5vw;
  max-width: 25vw;
  border-radius: 30px;
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
  padding-top: 1vw;
  padding-bottom: 1vw;
}

.featured-content-synopsis {
  overflow: hidden;
  color: #ececec;
  /* display: -webkit-box; */
  font-size: 16px;
  margin-bottom: 24px;
  -webkit-line-clamp: 12;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
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
.genres {
  display: flex;
  flex-wrap: wrap;
}
.genre {
  margin: 0.5rem 0.2rem;
}

.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

label {
  color: white;
  border: 0.1rem solid white;
  border-radius: 0.5rem;
  padding: 0.3rem 0.5rem;
}

.menu-link {
  margin-left: 16px;
  text-decoration: none;
  color: #9e9e9e;
  transition: 300ms ease-in-out;
}

.menu-link:hover {
  color: #fd9330;
}
@media (max-width: 767px) {
  .featured {
    height: calc(100vh - 60px);
  }
}

.button-effect {
    width: 95%;
    height: 32px;
    position: relative;
    background: #c03a6d00;
    margin-bottom: 25px;
    border-radius: 32px;
    border: solid 2px;
    border-color: #1e1e33;
    text-align: center;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    span {
      
      display: block;
      line-height: 30px;
      font-family: "Montserrat", sans-serif;
      font-size: 18px;
      font-weight: semibold;
    }
    

      color: #ffffff;
      &:hover {
        opacity: 1;
        box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.863),
          6px 6px 10px rgba(0, 0, 0, 0.2);
      }
      &:active {
        opacity: 1;
        box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5),
          inset 8px 8px 16px rgba(0, 0, 0, 0.1);
        color: #ffffff;
      }
    
  }
</style>
