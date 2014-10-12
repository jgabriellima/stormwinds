var redis = require('redis');
var fs = require('fs');
var readline = require('readline');
var stream = require('stream');
/**/
var port = process.env.REDIS_PORT || null;
var host = process.env.REDIS_HOST || null;
var client = redis.createClient(port, host, {
    detect_buffers: true
});
/**/
var instream = fs.createReadStream('/home/stark/1996_Hirlam_Winds/199601_Hirlam_Winds.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);
/**/
rl.on('line', function(line) {
    // process line here
    client.rpush('windsQueue1', line);
});
/**/
rl.on('close', function() {
    // do something on finish here
    client.rpush('windsQueue1', 'end');
    process.exit();
});
