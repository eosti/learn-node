var http = require('http')
var url = require('url')

var server = http.createServer(function (request, response) {
	if(request.method !== "GET") return response.end("Send a get!")

	var parsedUrl = url.parse(request.url, true)
	var date = new Date(parsedUrl.query.iso)
	var action = parsedUrl.pathname
	
	response.writeHead(200, { 'Content-Type': 'application/json' })

	if(action == '/api/parsetime'){
		var time = JSON.stringify({
			"hour": date.getHours(),
			"minute": date.getMinutes(), 
			"second": date.getSeconds(),
		})
		return response.end(time)
	}

	if(action == '/api/unixtime'){
		return response.end(JSON.stringify({ 
			"unixtime": date.getTime(),
		}))
	}

	response.writeHead(404)
	response.end()

})

server.listen(process.argv[2])
