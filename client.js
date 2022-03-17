const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243', // host IP address
    port: '50541'
  });

  const delay = 50;

  const move = {
    up: () => conn.write("Move: up"),
    down: () => conn.write("Move: down"),
    left: () => conn.write("Move: left"),
    right: () => conn.write("Move: right")
  };

  // interpret incoming data as text
  conn.setEncoding('utf8');

  const steps = 40;

  // on connection
  conn.on('connect', () => {
    console.log("Connection successfully established!");
    conn.write("Name: GAN");
    // snake square dance
    // for (let i = 0; i < steps; i++) {
    //   if (i < steps * 0.25) {
    //     setTimeout(move.up, i * delay);
    //   }
    //   if (i >= steps * 0.25 && i < steps * 0.5) {
    //     setTimeout(move.right, i * delay);
    //   }
    //   if (i >= steps * 0.5 && i < steps * 0.75) {
    //     setTimeout(move.down, i * delay);
    //   }
    //   if (i >= steps * 0.75 && i < steps) {
    //     setTimeout(move.left, i * delay);
    //   }
    // }
  });

  // receive incoming data and log it to console
  conn.on('data', (data) => {
    console.log(data.toString());
  });
  return conn;
};

module.exports = {connect};