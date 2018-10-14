var lsmod = require('./lsmod.js')
var path = require('path')
var fs = require('fs')

lsmod(process.argv[2], process.argv[3], callback)

function callback(err, message){
	if (err){
		console.error(err)
	} else { 
		message.forEach(function (file) {
			console.log(file)
			})
	}
}
