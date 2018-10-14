var fs = require('fs');

var data = fs.readFileSync(process.argv[2]).toString();

var whiteSpace = data.split('\n');

console.log(whiteSpace.length - 1);
