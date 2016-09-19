var url = require('url');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('docs'));
app.use(bodyParser.json());

var obj = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
console.log(obj.no1.title);

app.get('/getjson', function (req, res) {
  var objget = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
  res.json(objget.no1);
});


app.post('/save', function (req, res) {
  var textdata = req.body.inputdata;
  console.log(textdata);
  res.json(textdata);

  var data = {
    no1: {
      "title": obj.no1.title,
      "body": textdata
    }
  };
  fs.writeFile('data.json', JSON.stringify(data, null, '    '));
});

console.log('Listening 8080')
app.listen(8080);