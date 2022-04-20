import Vue from "vue";
import Vuex from "vuex";
import io from "socket.io-client";
// import { getTemp, getPress } from "../plugins/webSocket";

let socket = io("http://localhost:3000");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    reaktor: {
      temp: null,
      press: null,
      status: false,
    },
  },
  mutations: {
    setTemp(state, temp) {
      state.reaktor.temp = temp;
    },

    setPress(state, press) {
      state.reaktor.press = press;
    },

    setStatus(state, status) {
      state.reaktor.status = status;
    },
  },
  actions: {
    press({ dispatch }) {
      socket.on("data", (data) => {
        try {
          console.log();
          dispatch("setTemp", data[0]);
          dispatch("setPress", data[1]);
          dispatch("setStatus", true);
        } catch (error) {
          console.log(error);
        }
      });
    },

    status({ dispatch }) {
      socket.on("status", (data) => {
        try {
          if ("reconnecting..." == data) {
            dispatch("setStatus", false);
          } else {
            dispatch("setStatus", true);
          }
        } catch (error) {}
      });
    },

    setTemp({ commit }, temp) {
      commit("setTemp", temp);
    },

    setPress({ commit }, press) {
      commit("setPress", press);
    },

    setStatus({ commit }, status) {
      commit("setStatus", status);
    },
  },
  getters: {
    reaktor: function (state) {
      return state.reaktor;
    },
  },
});
