const client = require("./client");
const { setupInput } = require("./input");
console.log("Connecting...");
const connection = client.connect();
setupInput(connection);
