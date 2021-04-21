
<template>
  <div class="home">
    <Carousel :key="update2">
      <Slide v-for="slide in animesHead" :key="slide">
        <div class="featured" v-bind:style =" { 'background-image': 'url('+slide.URL+')'}">
          <div class="featured-vertical">
            <div class="featured-horizontal">
              <div class="featured-content">
                <div class="featured-content-title">{{slide.title}}</div>
                <span class="featured-content-synopsis">
                  {{slide.synopsis}}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
    <div class="featured-content">
      <div class="featured-content-title">Top all time</div>
    </div>
    <Carousel :settings="settings" :breakpoints="breakpoints" :key="$store.state.animesAllTime">
      <Slide v-for="anime in $store.state.animesAllTime" :key="anime.id">
        <div class="carousel__item">
          <a v-bind:href="'#/detailanime?id=' + anime.id" draggable="false">
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
    <div class="featured-content">
      <div class="featured-content-title">Top Anime Spring 2021</div>
    </div>
    <Carousel :settings="settings" :breakpoints="breakpoints" :key="$store.state.animesSeason">
      <Slide v-for="anime in $store.state.animesSeason" :key="anime.id">
        <div class="carousel__item">
          <a v-bind:href="'#/detailanime?id=' + anime.id" draggable="false">
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
    <div class="featured-content">
      <div class="featured-content-title">Top Anime 2021</div>
    </div>
    <Carousel :settings="settings" :breakpoints="breakpoints" :key="$store.state.animeYear">
      <Slide v-for="anime in $store.state.animeYear" :key="anime.id">
        <div class="carousel__item">
          <a v-bind:href="'#/detailanime?id=' + anime.id" draggable="false">
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
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Home",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data: () => ({
    update: 0,
    update2: 0,
    animes: [],
    animesHead: [],
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
        itemsToShow: 8,
        snapAlign: "start",
      },
    },
  }),
  async created() {
    //Simple GET request using axios
    //axios.get("http://otakurealm.mooo.com/api/recommandation").then(response => this.lesAnimes = response.data[0].title);
      await this.getAnimesHead();
  },
  methods: {
    
    async getAnimesHead() {
      var response = await fetch("http://otakurealm.mooo.com/api/anime/1");
      this.animesHead.push(await response.json());
      response = await fetch("http://otakurealm.mooo.com/api/anime/20");
      this.animesHead.push(await response.json());
      response = await fetch("http://otakurealm.mooo.com/api/anime/21");
      this.animesHead.push(await response.json());
      this.update2 +=1;
    },
  },
  beforeCreate() {
    this.$store.dispatch("getAnimes");
    this.$store.dispatch("getAnimesTopAll");
    this.$store.dispatch("getAnimesSeason");
    this.$store.dispatch("getAnimesYear");
  },
});
</script>
<style scoped>
.featured {
  height: calc(70vh);
  /*background-size: cover;*/
  background-position: center;
  /*background-image: url(https://pbs.twimg.com/media/EVP0f8iUwAIjf4w?format=jpg&name=4096x4096);*/
}

.featured-content {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 3vw;
  max-width: 40vw;
}

.featured-vertical {
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);
}

.featured-horizontal {
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111 10%, transparent 70%);
}

.featured-content-title {
  font-size: 32px;
  color: #ececec;
  font-weight: bold;
  margin-bottom: 12px;
  letter-spacing: 1.2px;
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
