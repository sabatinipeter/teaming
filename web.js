var express = require('express');
var app = express();
var path    = require("path");

app.use('/', express.static(__dirname + '/public/'))

app.get('/', function (req, res) {
     res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(process.env.PORT || 5000, function() {
  console.log('Example app listening on port 5000!');
});
