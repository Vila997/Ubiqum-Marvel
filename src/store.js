import Vue from "vue";
import Vuex from "vuex";
import { auth } from "@/firebase";
import router from "@/router";
import { userInfo } from "os";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usuario: {},
    name: "Albert",
    comics: [],
    url:
      "https://gateway.marvel.com:443/v1/public/comics?startYear=2010&orderBy=title&limit=18&ts=1&apikey=3ad7e6764a07767e22d32a10db24c0ea&hash=fc6b7efca50d03892ad086b1d19151ad"
  },

  mutations: {
    nuevoUsuario(state, payload) {
      state.usuario = payload;
    },
    setComics(state, data) {
      state.comics = data;
    }
  },
  actions: {
    setUsuario({ commit }, user) {
      const usuario = {
        nombre: user.displayname,
        email: user.email,
        uid: user.uid,
        foto: user.photoURL
      };
      commit("nuevoUsuario", usuario);
    },
    cerrarSesion({ commit }) {
      auth.signOut();
      commit("nuevoUsuario", null);
      router.push({ name: "login" });
    },

    getComics(context) {
      fetch(context.state.url)
        .then(json => json.json())
        .then(data => context.commit("setComics", data.data.results));
    }
  },
  getters: {
    dameComics(state) {
      return state.comics;
    }
  }
});
