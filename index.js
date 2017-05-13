var express    = require('express');
var app        = express();
var db         = require('./db');
var kC         = require('./KegiatanController');


app.get('/', function (req, res) { kC.index(req,res, db); })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})