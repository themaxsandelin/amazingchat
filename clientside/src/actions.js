var socket = require('./websocket');

module.exports = {

  signIn: function(name) {
    socket.emit("user-name", name);
  },

  sendMessage: function (message) {
  	socket.emit("send-message", message);
  }

}
