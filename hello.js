
var http = require('http');
var request = require('request');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Travis!\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');

var options = {
    method: 'GET',
    url: 'http://127.0.0.1:1337',
    headers: {
        'User-Agent': 'node-request',
        'Content-Type': 'text/plain'
    },
    timeout: 1000
};

request(options, function (err, res, body) {
    if (err) {
        console.log('request fail!');
        return;
    }
    console.log('request success');
    console.log(body);
    process.exit();
});

