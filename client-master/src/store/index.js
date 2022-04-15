import Vue from "vue";
import Vuex from "vuex";
import io from "socket.io-client";

import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: {
      temp: null,
      press: null,
    },
    socket: io("localhost:3000", {
      transports: ["websocket", "polling", "flashsocket"],
    }),
  },
  mutations: {
    setTemp({ state, temp }) {
      state.data.temp = temp;
    },

    setPress({ state, press }) {
      state.data.press = press;
    },
  },
  actions: {
    getData({ commit, state }) {
      commit("setPress", state.socket.on("data1"));
    },
  },
  modules: {},
  getters: {
    user({ state }) {
      return state.data;
    },
  },
});
