const http = require('http');
const fs = require('fs');
const url = require('url');

// render a simple index.html page with file system module!
http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    // toggle between pages!
    let fileName = "." + q.pathname;
    if (fileName == './') {
        fileName = './index.html';
    }
    fs.readFile(fileName, (err, page) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 page not found");
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(page);
            return res.end();
        }
    });

}).listen(8080);