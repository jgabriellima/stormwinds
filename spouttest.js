var redis = require('redis');

var port = process.env.REDIS_PORT || null;
var host = process.env.REDIS_HOST || null;
var client = redis.createClient(port, host, {
    detect_buffers: true
});

var blpopQueue = function() {
    client.blpop('windsQueue1', 0, function(err, data) {
        console.log(data);
        try {
            if (data[1] === 'end') {
                process.exit();
            }
        } catch (e) {}
        blpopQueue();
    });
};
blpopQueue();
