var socket = require('socket.io-client')("localhost:8000")
var store = require('./store');

socket.on('connect', function() {
  store.receiveId(socket.id)
  console.log("Connected to server with id: " + socket.id);
});

socket.on("users", function(users){
	store.receiveUsers(users);
});

socket.on("user", function(user){
	store.receiveUser(user);
});

socket.on("message", function(message){
	store.storeMessage(message);
});

socket.on("user-offline", function(userID){
	store.setUserOffline(userID);
});

socket.on("disconnect", function(){
	store.setUserOffline(socket.id);
});

module.exports = socket;
