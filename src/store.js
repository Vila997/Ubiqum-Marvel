import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "Albert",
    comics: [],
    url:
      "https://gateway.marvel.com:443/v1/public/comics?startYear=2010&orderBy=title&limit=18&ts=1&apikey=3ad7e6764a07767e22d32a10db24c0ea&hash=fc6b7efca50d03892ad086b1d19151ad"
  },

  mutations: {
    setComics(state, data) {
      state.comics = data;
    }
  },
  actions: {
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
