import Vue from "vue";
import Vuex from "vuex";
import io from "socket.io-client";
import { getTemp, getPress } from "../plugins/webSocket";

let socket = io("http://localhost:3000");

Vue.use(Vuex);

export default new Vuex.Store({
  // plugins: [getTemp(), getPress()],
  state: {
    data: {
      temp: null,
      press: null,
    },
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
    getTemp() {
      // socket.on("data1", (data) => {
      //   try {
      //     console.log("Temperature");
      //     dispatch("setTemp", data);
      //   } catch (error) {
      //     console.log("error");
      //   }
      // });
    },

    getPress() {},

    press({ dispatch }, hehe) {
      socket.on("data", (data) => {
        try {
          console.log(data);
          dispatch("setTemp", data[0]);
          dispatch("setPress", data[1]);
        } catch (error) {}
      });
    },

    setTemp({ commit }, temp) {
      commit("setTemp", temp);
      console.log("Temperature");
    },

    setPress({ commit }, press) {
      commit("setPress", press);
      console.log("Pressure");
    },
  },
  getters: {
    reaktor: function (state) {
      return state.data;
    },
  },
});
