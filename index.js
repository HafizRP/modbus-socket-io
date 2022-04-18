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
let retrying;

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
    io.emit("status", "connected");

    retrying = false;
    console.log("Connected");
    data();
  } catch (error) {
    retrying = true;
  }
};

function makeConnection() {
  socket.connect(options.port, options.host);
}

socket.on("close", async () => {
  setTimeout(() => {
    if (retrying) {
      console.log("Connection closed");
      console.log("Reconnecting...");
      io.emit("status", "reconnecting...");
    }
    setTimeout(makeConnection, 2000);
  }, 1000);
});

// Compile data and push it to frornt
async function data() {
  retrying = false;
  var inc = null;
  setInterval(async function () {
    try {
      client.writeSingleRegister(1 - 1, inc);
      client.readHoldingRegisters(1 - 1, 6).then(function (resp) {
        io.emit("data1", resp.response.body.values[0]);
        io.emit("data2", resp.response.body.values[1]);
        inc++;
        io.emit("status", "connected");
      });
    } catch (error) {}
  }, 2000);
}

socket.on("end", async () => {
  retrying = true;
  console.log("Connection ended");
});

process.on("uncaughtException", (err) => {
  retrying = true;
});

socket.connect(options);
connect();

server.listen(3000, () => {
  retrying = false;
  console.log("listening on *:3000");
});
