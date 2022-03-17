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
  };

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput};