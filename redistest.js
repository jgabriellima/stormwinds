var redis = require('redis');

var port = process.env.REDIS_PORT || null;
var host = process.env.REDIS_HOST || null;
var client = redis.createClient(port, host, {
    detect_buffers: true
});

client.rpush('dataQueue', 'A string of data')
client.rpush('dataQueue', 'A string of data1')
client.rpush('dataQueue', 'A string of data2')
client.rpush('dataQueue', 'A string of data3')
client.rpush('dataQueue', 'A string of data4')
client.rpush('dataQueue', 'A string of data5')
client.rpush('dataQueue', 'A string of data6')
client.rpush('dataQueue', 'A string of data7')

// client.lpop('dataQueue', function(error, data) {
//     if (error) {
//         console.error('There has been an error:', error);
//     }
//     console.log('We have retrieved data from the front of the queue:', data);
// });

// var blpopQueue = function() {
//     client.blpop('dataQueue', 0, function(err, data) {
//         console.log('We have retrieved the data from the front of the queue:', data);
//         blpopQueue();
//     });
// };
// blpopQueue();
