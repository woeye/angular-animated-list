var connect = require('connect'),
    http = require('http');

var app = connect()
    .use(connect.static('public'/*, { maxAge: 60000 }*/));

app.listen(8000);
console.log("Started HTTP server on port 8000");