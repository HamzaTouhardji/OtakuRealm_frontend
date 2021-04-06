
<template>
  <div class="home">
    <Carousel>
      <Slide v-for="slide in 10" :key="slide">
        <div class="featured">
          <div class="featured-vertical">
            <div class="featured-horizontal">
              <div class="featured-content">
                <div class="featured-content-title">Kimestsu no Yaiba</div>
                <span class="featured-content-synopsis">
                  Ever since the death of his father, the burden of supporting
                  the family has fallen upon Tanjirou Kamado's shoulders. Though
                  living impoverished on a remote mountain, the Kamado family
                  are able to enjoy a relatively peaceful and happy life. One
                  day, Tanjirou decides to go down to the local village to make
                  a little money selling charcoal. On his way back, night falls,
                  forcing Tanjirou to take shelter in the house of a strange
                  man, who warns him of the existence of flesh-eating demons
                  that lurk in the woods at night. When he finally arrives back
                  home the next day, he is met with a horrifying sight—his whole
                  family has been slaughtered. Worse still, the sole survivor is
                  his sister Nezuko, who has been turned into a bloodthirsty
                  demon. Consumed by rage and hatred, Tanjirou swears to avenge
                  his family and stay by his only remaining sibling. Alongside
                  the mysterious group calling themselves the Demon Slayer
                  Corps, Tanjirou will do whatever it takes to slay the demons
                  and protect the remnants of his beloved sister's humanity.
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
    <!--  <Carousel :settings="settings" :breakpoints="breakpoints">
          <Slide>
            <div class="carousel__item"><img src="https://cdn.myanimelist.net/images/anime/1000/110531.jpg?s=3df5ebb6800604dc04c6a6187dd7161b" alt="Shingeki no Kyojin: The Final Season" class="card-image, carousel__item"></div>
          </Slide>
          <Slide>
            <div class="carousel__item"><img src="https://cdn.myanimelist.net/images/anime/1132/110666.jpg?s=a5a23105e2245e9f5ea0499be2fce9a8" alt="Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season Part 2" class="card-image, carousel__item"></div>
          </Slide>
          <Slide>
            <div class="carousel__item"><img src="https://cdn.myanimelist.net/images/anime/1255/110636.jpg?s=2b6005aafc62e746b64d224e60a5a8b4" alt="Yuru Camp△ Season 2" class="card-image, carousel__item"></div>
          </Slide>
          <Slide>
            <div class="carousel__item"><img src="https://cdn.myanimelist.net/images/anime/1171/109222.jpg?s=f5508bab9e7d610a28f12d1828a6ee79" alt="Jujutsu Kaisen (TV)" class="card-image, carousel__item"></div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel> -->
    <div class="featured-content">
      <div class="featured-content-title">Airing Animes</div>
    </div>
    <Carousel :settings="settings" :breakpoints="breakpoints" :key="update">
      <Slide v-for="anime in animes" :key="anime.id">
        <div class="carousel__item">
          <a v-bind:href="'#/detailanime?id='+ anime.id" draggable="false">
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
      <div class="featured-content-title">Top Anime</div>
    </div>
    <Carousel :settings="settings" :breakpoints="breakpoints" :key="update">
      <Slide v-for="anime in animes" :key="anime.id">
        <div class="carousel__item">
          <a v-bind:href="'#/detailanime?id='+ anime.id" draggable="false">
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
      <div class="featured-content-title">Airing Animes</div>
    </div>
    <Carousel :settings="settings" :breakpoints="breakpoints">
      <Slide v-for="slide in images" :key="slide">
        <div class="carousel__item">
          <img
            v-bind:src="slide.URL"
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
    <div class="featured-content">
      <div class="featured-content-title">Airing Animes</div>
    </div>
    <Carousel :settings="settings" :breakpoints="breakpoints">
      <Slide v-for="slide in images" :key="slide">
        <div class="carousel__item">
          <img
            v-bind:src="slide.URL"
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
    animes: [],
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
    images: [
      {
        URL:
          "https://cdn.myanimelist.net/images/anime/1000/110531.jpg?s=3df5ebb6800604dc04c6a6187dd7161b",
        alt: "Shingeki no Kyojin: The Final Season",
      },
      {
        URL:
          "https://cdn.myanimelist.net/images/anime/1132/110666.jpg?s=a5a23105e2245e9f5ea0499be2fce9a8",
        alt: "Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season Part 2",
      },
      {
        URL:
          "https://cdn.myanimelist.net/images/anime/1255/110636.jpg?s=2b6005aafc62e746b64d224e60a5a8b4",
        alt: "Yuru Camp△ Season 2",
      },
      {
        URL:
          "https://cdn.myanimelist.net/images/anime/1171/109222.jpg?s=f5508bab9e7d610a28f12d1828a6ee79",
        alt: "Jujutsu Kaisen (TV)",
      },
      {
        URL:
          "https://cdn.myanimelist.net/images/anime/1791/110336.jpg?s=6afe0e38492f034cbd6f1b13d782e52f",
        alt: "Horimiya",
      },
      {
        URL:
          "https://cdn.myanimelist.net/images/anime/1259/110227.jpg?s=08c77f58ab974a8fc36af5e2eac9040a",
        alt: "Holo no Graffiti",
      },
      {
        URL: "",
        alt: "",
      },
      {
        URL: "",
        alt: "",
      },
      {
        URL: "",
        alt: "",
      },
      {
        URL: "",
        alt: "",
      },
      {
        URL: "",
        alt: "",
      },
      {
        URL: "",
        alt: "",
      },
    ],
  }),
    async created() {
    //Simple GET request using axios
    //axios.get("http://otakurealm.mooo.com/api/recommandation").then(response => this.lesAnimes = response.data[0].title);
    await this.getAnimes();
  },
  methods: {
    async getAnimes(){
      var response = await fetch('http://otakurealm.mooo.com/api/anime');
      this.animes = await response.json();
      this.update+=1;
    },
  }
});
</script>
<style scoped>
.featured {
  height: calc(70vh);
  background-size: cover;
  background-position: center;
  background-image: url(https://pbs.twimg.com/media/EVP0f8iUwAIjf4w?format=jpg&name=4096x4096);
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
