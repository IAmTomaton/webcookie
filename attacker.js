const http = require('http');

const server = new http.Server(function(req, res){
    console.log ( req.headers );
});


server.listen(1338, '127.0.0.1');
