const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243', // host IP address
    port: '50541'
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  // on connection
  conn.on('connect', () => {
    console.log("Connection successfully established!");
    conn.write("Name: GAN");
  });

  // receive incoming data and log it to console
  conn.on('data', (data) => {
    console.log(data.toString());
  });
  return conn;
};

module.exports = {connect};