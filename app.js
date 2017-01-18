//app.js
var http=require('http');
var modThree = require('./modThree.js');
var result = modThree.modThree_0(100, 1000000);

http.createServer(function(req,res){
  res.writeHead(200);

  res.write(modThree.modThree_1(result));


  res.end();
}).listen(5000);
