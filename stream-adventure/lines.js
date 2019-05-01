var through = require('through2')
var split = require('split')

var stream = through(write, end)

var index = 0

function write (buffer, _, next) {
    this.push((index % 2 == 1 ? (buffer.toString().toUpperCase()) : (buffer.toString().toLowerCase())) + '\n')
    index ++
    next()
}

function end (done) {
    done()
}

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout)
