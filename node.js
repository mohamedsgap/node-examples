console.log("Hello, Mohamed!");


// create  a simple server with node!!
const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // handle the url module
    const que = url.parse(req.url, true).query;
    const myBirthdate = que.year;
    res.end('My Birthdate is:' + myBirthdate);
    res.end('Hello, Mohamed! you are a Rockstar :)');
}).listen(8080);


// from node docs

const https = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = https.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});