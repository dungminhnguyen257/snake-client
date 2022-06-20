const {
  MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY,
} = require("./constants");

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = (key) => {
    switch (key) {
      case "\u0003":
        process.exit();
      case MOVE_UP_KEY:
        connection.write("Move: up");
        break;
      case MOVE_DOWN_KEY:
        connection.write("Move: down");
        break;
      case MOVE_LEFT_KEY:
        connection.write("Move: left");
        break;
      case MOVE_RIGHT_KEY:
        connection.write("Move: right");
        break;
      case "q":
        connection.write("Say: GG");
        break;
      case "e":
        connection.write("Say: Nice");
        break;
    }
  };

  stdin.on("data", handleUserInput);
  return stdin;
};
// setupInput();

module.exports = { setupInput };
