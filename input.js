const {
  MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY,
  MOVEMENTS,
  MESSAGES,
  GOODGAME,
  NICE,
} = require("./constants");

let connection;

const handleUserInput = (key) => {
  switch (key) {
    case "\u0003":
      process.exit();
    // case (MOVEMENTS[key]? key : false):
    //   connection.write(`Move: ${MOVEMENTS[key]}`);
    // break;
    case MOVE_UP_KEY:
      connection.write(`Move: ${MOVEMENTS[key]}`);
      break;
    case MOVE_DOWN_KEY:
      connection.write(`Move: ${MOVEMENTS[key]}`);
      break;
    case MOVE_LEFT_KEY:
      connection.write(`Move: ${MOVEMENTS[key]}`);
      break;
    case MOVE_RIGHT_KEY:
      connection.write(`Move: ${MOVEMENTS[key]}`);
      break;
    case GOODGAME:
      connection.write(`Say: ${MESSAGES[key]}`);
      break;
    case NICE:
      connection.write(`Say: ${MESSAGES[key]}`);
      break;
    default:
      connection.write(`Say: Invalid key`);
      break;
  }
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };
