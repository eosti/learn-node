var http = require('http')
var bl = require('bl')

var res = []
var count = 0

getHttp = function getHttp(index) {
	http.get(process.argv[index + 2], function(response) {
		response.pipe(bl(function (err, data) {
			if (err) return console.error(err)
			res[index] = data.toString()
			count++

			if(count == 3) {
				res.forEach(function (print) {
					console.log(print)
				})
			}
		}))
	})
}

getHttp(0)
getHttp(1)
getHttp(2)
