var http = require('http');
var fs = require("fs");
var port = process.env.PORT || 80
 
http.createServer(function(request, response) {
	
	fs.readFile("index.html", function(err, data){
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write(data);
	response.end();
	});
	
}).listen(port);