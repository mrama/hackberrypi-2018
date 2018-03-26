var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

fs.readFile(path.resolve(__dirname, "index.html"), function(err, data) {
    if (err) {
        throw err;
    }
    indexPage = data;
});

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(indexPage);
    res.end();
}).listen(3000);
