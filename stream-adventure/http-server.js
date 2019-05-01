var http = require('http')
var through = require('through2')

var server = http.createServer(function (request, response) {
    request.pipe(through(function (buffer, _, next) {
        if (request.method !== 'POST') response.end("Invalid method");
        this.push(buffer.toString().toUpperCase());
        next();
    })).pipe(response);
});

server.listen(process.argv[2]);


