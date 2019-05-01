var concat = require('concat-stream');

process.stdin.pipe(concat(function (msg) {
    msg = msg.toString();
    var rev = "";
    for(i = 0; i <= msg.length; i++) {
        rev += msg.charAt(msg.length - i);
    }

    process.stdout.write(rev);

}));


