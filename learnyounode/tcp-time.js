var net = require('net')

var server = net.createServer(function (socket) {
	date = new Date()
	var day = date.getFullYear() + '-'
	var day = day + ((date.getMonth().toString().length == 1)? '' + (date.getMonth() + 1) : (date.getMonth() + 1))
	var day = day + '-' + ((date.getDate().toString().length == 1)? '0' + date.getDate() : date.getDate())
	var time = ((date.getHours().toString().length == 1)? '0' + date.getHours() : date.getHours()) + ':' + ((date.getMinutes().toString().length == 1)? '0' + date.getMinutes() : date.getMinutes())
	socket.write(day + ' ' + time)
	socket.end('\n')
})

server.listen(process.argv[2])
