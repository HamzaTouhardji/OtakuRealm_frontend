import { createStore } from 'vuex'
//import {router} from "../main.js"
import router from '../router/index.js';



export default createStore({
  state: {
    authenticated: false,
    genre: [],
    animes:[],
    animesAllTime:[]
  },
  mutations: {
    AUTHENTIFICATION(state) {
      state.authenticated =!state.authenticated;
    },

    SETGENRE(state,response){
      response.json().then((values) => {
      state.genre=values;
      console.log(values);
      });
    },

    SETANIME(state,response){
      response.json().then((values) => {
      state.animes=values;
      console.log(values);
      });
    },

    SETANIMEALLTIME(state,response){
      response.json().then((values) => {
      state.animesAllTime=values;
      console.log(values);
      });
    },

  },
  actions: {
    getToken(context, credentials) {
      console.log(JSON.stringify({
        username: credentials.username,
        password: credentials.password,
      }));
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
              console.log('status ok!');
              return response.json();
            } else {
              console.log("erreur requete");
              return null;
            }
          },
          function (err) {
            console.log("err", err);
          }
        )
        .then(
          function (response) {
            console.log('connexion...');
            if (response == null) {
              return null;
            }
            if (response.token != undefined) {
              console.log(response.token); // faire la session et tout
              document.cookie = 'token = ' + response.token;

              context.commit('AUTHENTIFICATION');
              
              if (context.state.authenticated == true) {
                router.push("/");
              }
            } else {
              console.log("erreur connexion (mauvais mdp ou mail)");
            }
          }
        );
    },

    auth_logout(context){
          context.commit('AUTHENTIFICATION');
          document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    },
    authenticated(context){
      context.commit('AUTHENTIFICATION');
    },

    async getGenre(context) {
      var response = await fetch('http://otakurealm.mooo.com/api/genre');
      context.commit("SETGENRE",response);
    },

    async getAnimes(context){
      var response = await fetch('http://otakurealm.mooo.com/api/anime');
      context.commit("SETANIME",response);
      response = await fetch('http://otakurealm.mooo.com/api/anime_allTime');
      context.commit("SETANIMEALLTIME",response);
    },
  },
 
  modules: {
  }
})
