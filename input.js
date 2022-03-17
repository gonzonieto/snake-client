const {ENCODING, KEYS, MSGS} = require("./constants");
let connection;

const setupInput = (conn) => {
  connection = conn;

  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    }

    const move = {
      up: () => connection.write("Move: up"),
      down: () => connection.write("Move: down"),
      left: () => connection.write("Move: left"),
      right: () => connection.write("Move: right")
    };

    if (key === KEYS.UP) move.up();
    if (key === KEYS.LEFT) move.left();
    if (key === KEYS.DOWN) move.down();
    if (key === KEYS.RIGHT) move.right();

    if (MSGS[key]) connection.write(MSGS[key]);

  };

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding(ENCODING);
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput};