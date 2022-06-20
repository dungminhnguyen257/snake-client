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
      case "w":
        connection.write("Move: up");
        break;
      case "s":
        connection.write("Move: down");
        break;
      case "a":
        connection.write("Move: left");
        break;
      case "d":
        connection.write("Move: right");
        break;
    }
  };
  stdin.on("data", handleUserInput);
  return stdin;
};
// setupInput();

module.exports = { setupInput };
