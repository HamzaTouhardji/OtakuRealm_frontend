
<template>
  <div class="profil">


        <div class="featured">
          <div class="featured-vertical">
            <div class="featured-horizontal">
              <div class="featured-content">
                <div class="featured-content-title">Profil</div>
                <span class="featured-content-synopsis">
                  <img class="photo" v-bind:src="userInfo[0].photo_de_profil">
                  <p>{{userInfo[0].bio}}</p>
                  <p>Sex: {{userInfo[0].sexe}}</p>
                  <p>Age: {{userInfo[0].age}}</p>
                </span>
              </div>
            </div>
          </div>
        </div>



    <div class="featured-content">
      <div class="featured-content-title">Watchlist</div>
    </div>
    <Carousel :settings="settings" :breakpoints="breakpoints" :key="$store.state.animes">
      <Slide v-for="slide in $store.state.animes" :key="slide">
        <div class="carousel__item">
          <img
            v-bind:src="slide.src"
            v-bind:alt="slide.alt"
            class="card-image"
            draggable="false"
          />
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
    userInfo:[{}],
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
    images: [
      {
        src:
          "https://cdn.myanimelist.net/images/anime/1000/110531.jpg?s=3df5ebb6800604dc04c6a6187dd7161b",
        alt: "Shingeki no Kyojin: The Final Season",
      },
      {
        src:
          "https://cdn.myanimelist.net/images/anime/1132/110666.jpg?s=a5a23105e2245e9f5ea0499be2fce9a8",
        alt: "Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season Part 2",
      },
      {
        src:
          "https://cdn.myanimelist.net/images/anime/1255/110636.jpg?s=2b6005aafc62e746b64d224e60a5a8b4",
        alt: "Yuru Camp△ Season 2",
      },
      {
        src:
          "https://cdn.myanimelist.net/images/anime/1171/109222.jpg?s=f5508bab9e7d610a28f12d1828a6ee79",
        alt: "Jujutsu Kaisen (TV)",
      },
      {
        src:
          "https://cdn.myanimelist.net/images/anime/1791/110336.jpg?s=6afe0e38492f034cbd6f1b13d782e52f",
        alt: "Horimiya",
      },
      {
        src:
          "https://cdn.myanimelist.net/images/anime/1259/110227.jpg?s=08c77f58ab974a8fc36af5e2eac9040a",
        alt: "Holo no Graffiti",
      },
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
    ],
  }),
  async created() {
    //Simple GET request using axios
    //axios.get("http://otakurealm.mooo.com/api/recommandation").then(response => this.lesAnimes = response.data[0].title);
    await this.getInfoUser();
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
    async getInfoUser(){
   
      let headers = {"Content-Type": "application/json"};
      console.log(this.getCookie('token'));
      headers["Authorization"] = `Token ` + this.getCookie('token');
      var response = await fetch('http://otakurealm.mooo.com/api/info_utilisateur/',{headers})
      this.userInfo = await response.json();
      console.log(this.userInfo)
    },
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
  border-radius: 100%;
}
.featured {
  height: calc(70vh);
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
  max-width: 40vw;
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

@media (max-width: 767px) {
  .featured {
    height: calc(100vh - 60px);
  }
}
</style>
