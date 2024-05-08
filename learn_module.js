
var http = require('http');




http.createServer(function (req, res) {
    const name = req.url.split("=")
    console.log(name[1])
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<h1>${name[1]}</h1>`);
}).listen(8080);
