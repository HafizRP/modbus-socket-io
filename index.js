// create a tcp modbus client
const Modbus = require("jsmodbus");
const net = require("net");
const { start } = require("repl");
const socket = new net.Socket();
const client = new Modbus.client.TCP(socket, 1);
const options = {
  host: "127.0.0.1",
  port: 502,
};
let retrying = false;


function connect() {
    try {
        console.log("Connected");
        data();
    } catch (error) { }
}

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
    }, 500);
  } catch (error) {}
});

async function data() {
  var inc = 0;
  setInterval(async function () {
    try {
      client.writeSingleRegister(1 - 1, inc);
      client.readHoldingRegisters(1 - 1, 5).then(function (resp) {
        console.log(resp.response.body.values);

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
