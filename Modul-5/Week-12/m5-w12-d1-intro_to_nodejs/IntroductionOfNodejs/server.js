const http = require('http');
const {parse} = require('url');
const { response } = require('express');
const handler = require('./library/handlers') //importing the file

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
 const parsedUrl = parse(req.url, true)
console.log(req.url)
console.log(parsedUrl)

switch(parsedUrl.pathname){
  case '/': //here e definojm pathin.
    res.end("Main page!")
    break
  case '/about':
    res.end("About page!")
    break
  case '/users':
    handler(req, res)
}
});

server.listen(port, hostname, () => {
  console.log(`Serverrrr!!! runninggggg at http://${hostname}:${port}/`);
});