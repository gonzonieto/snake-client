const net = require('net');
const {IP, PORT, ENCODING} = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,   // host IP
    port: PORT, // host port
  });

  // interpret incoming data as text
  conn.setEncoding(ENCODING);

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