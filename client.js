const net = require("net");
const { IP, PORT, USER } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on("connect", () => {
    console.log("you ded cuz you idled");
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  conn.on("connect", () => {
    conn.write(`Name: ${USER}`);
  });

  //interpret incoming data as text
  conn.setEncoding("utf-8");
  return conn;
};
module.exports = { connect };
