const IP = "localhost";
const PORT = 50541;

const MOVE_UP_KEY = "w";
const MOVE_DOWN_KEY = "s";
const MOVE_LEFT_KEY = "a";
const MOVE_RIGHT_KEY = "d";

const MOVEMENTS = {
  [MOVE_UP_KEY]: "up",
  [MOVE_DOWN_KEY]: "down",
  [MOVE_LEFT_KEY]: "left",
  [MOVE_RIGHT_KEY]: "right",
};

const GOODGAME = "q";
const NICE = "e";
const MESSAGES = {
  [GOODGAME]: "GG",
  [NICE]: "Nice",
};

const USER = "BNG";

module.exports = {
  IP,
  PORT,
  MOVEMENTS,
  USER,
  MESSAGES,
  MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY,
  GOODGAME,
  NICE,
};
