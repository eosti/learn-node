var path = require('path')
var fs = require('fs')

module.exports = function lsdir (dir, extention, callback) {
fs.readdir(dir, function (err, directory) {
	if (err) return callback(err)
	passBack = directory.filter(function (file) {
		return path.extname(file) == '.' + extention
	})
	callback(null, passBack)
})

}
