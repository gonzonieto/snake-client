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

  // on connection
  conn.on('connect', () => {
    console.log("Connection successfully established!");
    conn.write("Name: GAN");
    // for (let i = 0; i < 150; i++) {
    //   setTimeout(move.up, i * delay);
    // }
  });

  // receive incoming data and log it to console
  conn.on('data', (data) => {
    console.log(data.toString());
  });
  return conn;
};

module.exports = {connect};