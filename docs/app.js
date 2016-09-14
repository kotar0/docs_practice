var url = require('url');
var express = require('express');

var app = express();

app.get('/',function (request, response) {
  response.sendFile(__dirname + '/index.html');

})

app.use(express.static('css'));

app.listen(8080);
