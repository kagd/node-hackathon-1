var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end("Hello, World");
});

server.listen(process.env.PORT || 8080, "0.0.0.0");