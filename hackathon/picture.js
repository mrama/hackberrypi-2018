var http = require('http');
var fs = require('fs');
var path = require('path');
//var pick_stream = require('./pick_stream');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var i = 0;
    setInterval(() => {
        var filename = path.resolve(__dirname, "image-" + i.toString() + ",jpg");
        fs.readFile(filename, function(err, data) {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                return res.end("404 Not Found");
            }
            res.write(data);
        });
        i++;
        if(i == 5)
            i = 0;
    }, 1000);
}).listen(8080);
