const {ENCODING, KEYS} = require("./constants");
let connection;

const setupInput = (conn) => {
  connection = conn;
  const write = connection.write;

  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    }

    const move = {
      up: () => write(KEYS.UP.cmd),
      down: () => write(KEYS.DOWN.cmd),
      left: () => write(KEYS.LEFT.cmd),
      right: () => write(KEYS.RIGHT.cmd),
    };

    if (key === KEYS.UP) move.up();
    if (key === KEYS.LEFT) move.left();
    if (key === KEYS.DOWN) move.down();
    if (key === KEYS.RIGHT) move.right();

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