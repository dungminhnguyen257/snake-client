const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  conn.on("connect", () => {
    console.log("you ded cuz you idled");
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });
  conn.on("connect", () => {
    conn.write("Name: BNG");
  });
  //interpret incoming data as text
  conn.setEncoding("utf-8");
  return conn;
};
module.exports = { connect };
