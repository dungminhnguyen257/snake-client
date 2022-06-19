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
    // conn.write("Move: up");
    // conn.write("Move: up");
    // conn.write("Move: up");
    // const move = setInterval(() => {
    //   conn.write("Move: up");
    // }, 500);
    // setTimeout(() => {
    //   clearInterval(move);
    // }, 5000);
  });

  //interpret incoming data as text
  conn.setEncoding("utf-8");
  return conn;
};
module.exports = { connect };
