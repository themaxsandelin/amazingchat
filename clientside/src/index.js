var React = require('react');
var UsersApp = require('./components/UsersApp.jsx');
var MessagesApp = require('./components/MessagesApp.jsx');
var SendMessagesApp = require('./components/SendMessagesApp.jsx');

React.render(React.createElement(UsersApp), document.getElementById('users-app'));
React.render(React.createElement(MessagesApp), document.getElementById('messages-app'));
React.render(React.createElement(SendMessagesApp), document.getElementById('send-messages-app'));
