var fs = require('fs');
var whitespace;

fs.readFile(process.argv[2], function doneReading(err, fileContents) {
	whitespace = fileContents.toString().split('\n').length - 1
	console.log(whitespace);
})

