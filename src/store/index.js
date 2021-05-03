import { createStore } from 'vuex'
//import {router} from "../main.js"
import router from '../router/index.js';



export default createStore({
  state: {
    authenticated: false,
    genre: [],
    animes: [],
    animesAllTime: [],
    animesSeason: [],
    animeYear: [],
    animeSearch: [],
    alert: "",
    loading: false,
    userToken:"",
    user:"",
    userAnime:[],
    userAnimeRated:[],
    userAnimeNotRated:[],
    userGenre:[],
    listeRecommadation:[],
    recommandation:[],
  },
  mutations: {
    AUTHENTIFICATION(state) {
      state.authenticated = !state.authenticated;
    },

    GETCOOKIE(state, cname){
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          state.userToken = c.substring(name.length, c.length);
        }
      }
    },

    SETINFOUSER(state, response){
      response.json().then((values) =>{
        state.user = values[0];
      });
    },
    SETANIMEUSER(state, response){
      response.json().then((values) =>{
        state.userAnime = values;
        state.userAnimeRated.length=0;
        state.userAnimeNotRated.length=0;
        for (let anime of state.userAnime){
          if(anime.score >= 0){
            state.userAnimeRated.push(anime)
          }
          else{
            state.userAnimeNotRated.push(anime)
          }
        }
      });
    },
    SETANIMEGENRE(state, response) {
      response.json().then((values) => {
        state.userGenre = values;
      });
    },
    SETGENRE(state, response) {
      response.json().then((values) => {
        state.genre = values;
      });
    },

    SETANIME(state, response) {
      response.json().then((values) => {
        state.animes = values;
      });
    },

    SETALERT(state, message) {
      state.alert = message
    },

    SETLOAD(state) {
      state.loading = !state.loading
    },

    SETANIMEALLTIME(state, response) {
      response.json().then((values) => {
        state.animesAllTime = values;
      });
    },

    SETANIMESEASON(state, response) {
      response.json().then((values) => {
        state.animesSeason = values;
      });
    },

    SETANIMEYEAR(state, response) {
      response.json().then((values) => {
        state.animeYear = values;
      });
    },

    SETANIMESEARCH(state, response) {
      response.json().then((values) => {
        state.animeSearch = values;
      });
    },

  },

  getters: {
    GETANIMESEARCH(state) {
      return state.animeSearch
    },
    GETTOKEN(state){
      return state.userToken
    }
  },

  actions: {
    async getToken(context, credentials) {
      context.commit('SETLOAD');
      context.commit('SETALERT', '')

      fetch("http://otakurealm.mooo.com/api/login/", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: credentials.username,
          password: credentials.password,
        }),
      })
        .then(
          function (response) {
            if (response.status === 200) {
              return response.json();
            } else {
              return null;
            }
          },
          function (err) {
            console.log("err", err);
          }
        )
        .then(
          function (response) {
            if (response == null) {
              context.commit('SETLOAD');
              context.commit('SETALERT', 'mdp ou username incorrect')
              return null;
            }
            if (response.token != undefined) {
              document.cookie = 'token = ' + response.token;
              context.commit('AUTHENTIFICATION');
              context.commit('GETCOOKIE',"token");
              if (context.state.authenticated == true) {
                router.push("/");
                context.commit('SETLOAD');
              }
            }
          }
        );

    },

    auth_logout(context) {
      context.commit('AUTHENTIFICATION');
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    },
    authenticated(context) {
      context.commit('AUTHENTIFICATION');
      context.commit('GETCOOKIE',"token");
    },
    load(context) {
      context.commit('SETLOAD');
    },

    async getGenre(context) {
      var response = await fetch('http://otakurealm.mooo.com/api/genre');
      context.commit("SETGENRE", response);
    },

    async getAnimes(context) {
      var response = await fetch('http://otakurealm.mooo.com/api/anime');
      context.commit("SETANIME", response);
    },
    async getAnimesTopAll(context) {
      var response = await fetch('http://otakurealm.mooo.com/api/anime_allTime');
      context.commit("SETANIMEALLTIME", response);
    },
    async getAnimesSeason(context) {
      var response = await fetch('http://otakurealm.mooo.com/api/anime_saison');
      context.commit("SETANIMESEASON", response);
    },
    async getAnimesYear(context) {
      var response = await fetch('http://otakurealm.mooo.com/api/anime_annee');
      context.commit("SETANIMEYEAR", response);
    },
    async getAnimeSearch(context, credentials) {
      var response = await fetch("http://otakurealm.mooo.com/api/recherche/?search=" + credentials)
      context.commit('SETANIMESEARCH', response);
    },
    async getInfoUser(context) {
      let headers = { "Content-Type": "application/json" };
      headers["Authorization"] = `Token ` + context.state.userToken;
      var response = await fetch(
        "http://otakurealm.mooo.com/api/info_utilisateur/",
        { headers }
      );
      context.commit('SETINFOUSER', response);
    },
    async getAnimeUser(context) {
      let headers = { "Content-Type": "application/json" };
      headers["Authorization"] = `Token ` + context.state.userToken;
      var response = await fetch(
        "http://otakurealm.mooo.com/api/anime/utilisateur",
        { headers }
      );
      context.commit('SETANIMEUSER', response);
    },
    async getGenreUser(context) {
      let headers = { "Content-Type": "application/json" };
      headers["Authorization"] = `Token ` + context.state.userToken;
      var response = await fetch(
        "http://otakurealm.mooo.com/api/genre/utilisateur",
        { headers }
      );
      context.commit('SETANIMEGENRE', response);
    },
  },

  modules: {
  }
})
