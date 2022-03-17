const IP = '165.227.47.243'; // host IP
const PORT = '50541';        // host port
const ENCODING = "utf8";



const KEYS = {
  UP: {key: 'w', cmd: "Move: up"},
  DOWN: {key: 's', cmd: "Move: down"},
  LEFT: {key: 'a', cmd: "Move: left"},
  RIGHT: {key: 'd', cmd: "Move: right"},
};

module.exports = {
  IP,
  PORT,
  ENCODING,
  KEYS,
};