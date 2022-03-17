const {connect} = require('./client');
const {setupInput} = require('./input');

console.log("Connecting ...");

const snake = connect();
setupInput(snake);