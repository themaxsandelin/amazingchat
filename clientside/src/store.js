var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');

var socket = require('./websocket');

var _messages = {};
var _users = {};
var _me = {};
var _id;
var _colors = ["#69b977", "#e36661", "#f277cc", "#76cad3", "#dd6bda", "#e5b14a", "#e2de4b", "#626ce8"];

var store = _.extend({

  receiveId: function(id) {
    _id = id;
  },

  receiveUsers: function(users) {
    _users = users;
    store.emit("change");
  },

  receiveUser: function(user) {
    var color = _colors[Math.floor(Math.random()*_colors.length)];
    var letter = user.name.substring(0,1).toUpperCase();
    _users[user.id] = {
      "id" : user.id,
      "name" : user.name,
      "bubble" : {
        "color" : color,
        "letter" : letter
      }
    };

    if (_id == user.id) {
      _users[user.id].me = true;
      _me = _users[user.id];
    }
    store.emit("change");
  },

  storeMessage: function (message) {
    _messages[message.id] = message;
    store.emit("change");
  },

  getMe: function() {
    return _me;
  },

  setUserOffline: function(userId) {
    _users[userId].offline = true;
    store.emit("change");
  },

  getMessages: function () {
    return Object.keys(_messages).map(function(key){
      return _messages[key];
    }).sort(function(a, b){
      return b.timestamp - a.timestamp;
    });
  },

  getUsers: function() {
    var userDict = _users;
    var users = [];
    Object.keys(userDict).forEach(function(key){
      if (userDict[key].name && userDict[key].offline === undefined) {
        users.push(userDict[key]);
      }
    });
    return users;
  }

}, EventEmitter.prototype);

module.exports = window.store = store;