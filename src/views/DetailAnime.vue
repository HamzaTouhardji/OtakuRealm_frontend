
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
  },
  methods: {
    async getAnimes(){
      var id = this.$route.query.id
      var response = await fetch('http://otakurealm.mooo.com/api/anime/'+id)
      this.anime = await response.json();
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

@media (max-width: 767px) {
  .featured {
    height: calc(100vh - 60px);
  }
}
</style>
