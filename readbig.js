var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('/home/stark/1996_Hirlam_Winds/199601_Hirlam_Winds.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);

rl.on('line', function(line) {
    // process line here
    console.log(line);
});

rl.on('close', function() {
    // do something on finish here
});
