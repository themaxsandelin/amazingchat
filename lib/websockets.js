var chalk = require('chalk');
var http = require('http');

var run = function(server) {
  if(server instanceof http.Server === false) {
    throw new Error("The argument was not a valid server");
  }

  var io = require('socket.io').listen(server);

  io.sockets.on('connection', function(socket) {
    console.log(chalk.green("New socket connection: ") + socket.id);

    socket.on('disconnect', function() {
      console.log(chalk.yellow("Closed socket connection: ") + socket.id);
    });
  });

  console.log(chalk.green("Web socket server initialized"));

  return io;
}


module.exports = run;
