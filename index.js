
var http = require('http');
var fs = require('fs');
var stream = fs.createReadStream('1.txt', {encoding: 'utf8'});

readableStream.on('data', function(chunk) {
    data+=chunk;
});

readableStream.on('end', function() {
    console.log(data);
});
server.listen(3000);
console.log('server running on port number 3000')
