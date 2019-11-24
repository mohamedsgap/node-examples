const http = require('http');
const fs = require('fs');

// render a simple index.html page with file system module!
http.createServer((req, res) => {
    fs.readFile('index.html', (err, page) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(page);
        res.end();
    });

}).listen(8080);