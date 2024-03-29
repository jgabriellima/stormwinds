var walk = require('walk');
var files = [];

// Walker options
var walker = walk.walk('/home/stark/1996_Hirlam_Winds/', {
    followLinks: false
});

walker.on('file', function(root, stat, next) {
    // Add this file to the list of files
    files.push(root + '/' + stat.name);
    next();
});

walker.on('end', function() {
    console.log(files);
});
