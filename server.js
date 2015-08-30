var http = require('http');
var fs = require('fs');

require('./lib/buildClientAssets');

var server = http.createServer(function(request, response) {
  switch(request.url) {
    case "/":
    case "/index.html":
      response.writeHead(200, {
        contentType: "text/html"
      });
      fs.readFile('./index.html', function(err, data){
        if(err) throw err;
        response.end(data);
      });
      break;
    case "/app.js": 
      response.writeHead(200, {
        contentType: "application/x-javascript"
      });
      fs.createReadStream('./clientside/dist/app.js').pipe(response);
      break;
    case "/reset.css":
      response.writeHead(200, {
        contentType: "text/css"
      });
      fs.createReadStream('./resources/css/reset.css').pipe(response);
      break;
    case "/main.css":
      response.writeHead(200, {
        contentType: "text/css"
      });
      fs.createReadStream('./resources/css/main.css').pipe(response);
      break;
    case "/jquery.js":
      response.writeHead(200, {
        contentType: "text/javascript"
      });
      fs.createReadStream('./resources/js/jquery.js').pipe(response);
      break;
    case "/tap.js":
      response.writeHead(200, {
        contentType: "text/javascript"
      });
      fs.createReadStream('./resources/js/tap.js').pipe(response);
      break;
    case "/script.js":
      response.writeHead(200, {
        contentType: "text/javascript"
      });
      fs.createReadStream('./resources/js/script.js').pipe(response);
      break;
  }

});

server.listen(8000);

var _users = {};

var io = require('./lib/websockets')(server);

io.on('connection', function(socket) {

  _users[socket.id] = {
    id: socket.id
  }

  socket.emit('users', _users);

  socket.on("user-name", function(name){
    _users[socket.id].name = name;
    io.emit("user", _users[socket.id]);
  });

  socket.on("send-message", function(message){
    message.timestamp = +new Date();
    io.emit("message", message);
  });

  socket.on("disconnect", function(){
    delete _users[socket.id];
    io.emit("user-offline", socket.id);
  });


})
