import io from "socket.io-client";
import store from "../store";

let socket = io("http://localhost:3000");

export function getTemp() {
  return (store) => {
    socket.on("data1", (data) => {
      try {
        console.log("Data Temperature");
        store.dispatch("getTemp").then(() => {
          store.dispatch("setTemp", data);
        });
      } catch (error) {}
    });
  };
}

export function getPress() {
  return (store) => {
    socket.on("data2", (data) => {
      console.log("Data Pressure");
      store
        .dispatch("getPress")
        .then(() => {
          store.dispatch("setPress", data);
        })
        .catch((err) => {});
    });
  };
}
