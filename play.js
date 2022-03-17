const net = require('net');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // host IP address
    port: '50541'
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  // receive incoming data and log it to console
  conn.on('data', (data) => {
    console.log(data.toString())
  });
  return conn;
};

console.log("Connecting ...");

snakeNum = 1;
snakes = {};

for (let i = 0; i < snakeNum; i++) {
  snakes[i] = connect()
}