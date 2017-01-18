//app.js
var http=require('http');
var modThree = require('./modThree.js');
var result = modThree.modThree_0(a.toString().trim());

http.createServer(function(req,res){
  res.writeHead(200);


  var stdin = process.openStdin();

  stdin.addListener("data", function(d) {;
  	var result = modThree.modThree_0(d.toString().trim());
  	console.log(modThree.modThree_1(result));
})

  res.end();
}).listen(5000);
