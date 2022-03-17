const {connect} = require('./client');
const {setupInput} = require('./input');

console.log("Connecting ...");

const snakes = {};
const snakeNum = 1;

for (let i = 0; i < snakeNum; i++) {
  snakes[i] = {
    client: connect(),
    input: setupInput()
  };
}