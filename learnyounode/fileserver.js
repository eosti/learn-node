var fs = require('fs')
var http = require('http')

var file = fs.createReadStream(process.argv[3])

var server = http.createServer(function (request, response) {
	response.writeHead(200, { 'content-type': 'text/plain' })
	file.pipe(response)
})

server.listen(process.argv[2])
