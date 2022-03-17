const {ENCODING} = require("./constants");
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

    if (key === 'w') move.up();
    if (key === 'a') move.left();
    if (key === 's') move.down();
    if (key === 'd') move.right();

    if (key === 'h') connection.write("Say: Help me!!! :(");
    if (key === 'i') connection.write("Say: Stuck in snek factry");
    if (key === 'm') connection.write("Say: me so hungwy :(");
    if (key === 'n') connection.write("Say: AWW YEE SNAX 4 SNEK!");
    if (key === ',') connection.write("Say: where is füd?");
    if (key === 'j') connection.write("Say: !!!!!");

  };

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding(ENCODING);
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput};