var React = require('react');
var SignIn = require('./SignIn.jsx');
var SendMessage = require('./SendMessage.jsx');
var Users = require('./Users.jsx');
var store = require('../store');

var SendMessagesApp = React.createClass({

  getStateFromStore: function() {
    return {
      users: store.getUsers(),
      me: store.getMe()
    }
  },

  componentDidMount: function() {
    store.on('change', function() {
      this.setState(this.getStateFromStore());
    }.bind(this))
  },

  getInitialState: function() {
    return this.getStateFromStore();
  },

  render: function() {
    return <SendMessage/>;
  }

});

module.exports = SendMessagesApp;
