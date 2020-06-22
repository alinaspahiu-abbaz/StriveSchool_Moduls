const http = require('http');
const handler = require('./library/handlers') //importing the file

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World! This is Spartaaaaaaa!');
});

server.listen(port, hostname, () => {
  console.log(`Serverrrr!!! runninggggg at http://${hostname}:${port}/`);
});