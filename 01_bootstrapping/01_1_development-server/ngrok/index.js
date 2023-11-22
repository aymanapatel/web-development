
const http = require('http')

// Listening on PORT 80
http.createServer( (req, res) => {

	console.log("Request" , req);
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.write('Hello ngrok! ');

	console.log("Hello bash ngrok");
	res.end();
}).listen(80);
