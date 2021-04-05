import { createStore } from 'vuex'
//import {router} from "../main.js"
import router from '../router/index.js';



export default createStore({
  state: {
    authenticated: false,
    token: localStorage.getItem('user-token') || ''
  },
  mutations: {
    AUTHENTIFICATION(state) {
      state.authenticated =!state.authenticated;
    },
    AUTH_SUCCESS: (state, token) => {
      state.token = token
    },

    AUTH_LOGOUT: (state) => {
      state.token = ""
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

              const token = response.token;
              localStorage.setItem('user-token', token)
              context.commit('AUTH_SUCCESS', token);
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
          localStorage.removeItem('user-token')
          context.commit('AUTH_LOGOUT');
          context.commit('AUTHENTIFICATION');
          document.cookie = 'token = ';
          
          

  }

  },
  modules: {
  }
})
