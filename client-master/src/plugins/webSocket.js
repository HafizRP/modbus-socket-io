import io from "socket.io-client";

let socket = io("http://localhost:3000");

export function getTemp() {
  return (store) => {
    socket.on("data1", (data) => {
      try {
        console.log("Data Temperature");
        store.dispatch("setTemp", data);

        store.dispatch("getTemp");
      } catch (error) {}
    });
  };
}

export function getPress() {
  return (store) => {
    socket.on("data2", (data) => {
      console.log("Data Pressure");
      store.dispatch("getPress");
      store.dispatch("setPress", data);
    });
  };
}
