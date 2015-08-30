var React = require('react');
var SignIn = require('./SignIn.jsx');
var Messages = require('./Messages.jsx');
var store = require('../store');

var MessagesApp = React.createClass({

  getStateFromStore: function() {
    return {
      messages: store.getMessages(),
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
    if (this.state.me.name !== undefined) {
      return (
        <Messages messages={this.state.messages}/>
      )
    }
    return (
      <h1 hidden></h1>
    )
  }

});

module.exports = MessagesApp;
