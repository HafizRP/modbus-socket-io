// create a tcp modbus client
const Modbus = require("jsmodbus");
const net = require("net");
const express = require("express");
const { start } = require("repl");
const socket = new net.Socket();
const client = new Modbus.client.TCP(socket, 1);
const options = {
  host: "127.0.0.1",
  port: 502,
};
let retrying = false;

const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// io.on("connection", function (socket) {
//   console.log(socket.id);
//   socket.on("SEND_MESSAGE", function (data) {
//     io.emit("MESSAGE", data);
//   });
// });

io.on("connection", (socket) => {
  console.log("A User Connected");

  socket.on("disconnect", () => {
    console.log("A User disconnected");
  });
});

const connect = () => {
  try {
    console.log("Connected");
    data();
  } catch (error) {}
};

function makeConnection() {
  socket.connect(options.port, options.host);
}

socket.on("close", async () => {
  try {
    setTimeout(async () => {
      console.log("Connection ended");
      if (!retrying) {
        retrying = true;
        console.log("Reconnecting...");
      }
      retrying = false;
      setTimeout(makeConnection, 1000);
      // Again
      start();

      // Every 3 sec
    }, 1000);
  } catch (error) {}
});

async function data() {
  var inc = null;
  setInterval(async function () {
    try {
      client.writeSingleRegister(1 - 1, inc);
      client.readHoldingRegisters(1 - 1, 5).then(function (resp) {
        io.emit("data1", resp.response.body.values[0]);
        io.emit('data2', resp.response.body.values[1])
        inc++;
      });
    } catch (error) {}
  }, 1000);
}

process.on("uncaughtException", (err) => {
  socket.on("end", async () => {
    console.log("Connection ended");
  });
});
socket.connect(options);
connect();

server.listen(3000, () => {
  console.log("listening on *:3000");
});
