const {connect} = require('./client');

// establishes a connection with the game server

console.log("Connecting ...");

snakeNum = 1;
snakes = {};

for (let i = 0; i < snakeNum; i++) {
  snakes[i] = connect()
}