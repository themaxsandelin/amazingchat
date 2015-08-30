var React = require('react');
var SignIn = require('./SignIn.jsx');
var Users = require('./Users.jsx');
var store = require('../store');

var App = React.createClass({

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
    if (this.state.me.name === undefined) {
      return <SignIn/>;
    }

    return (
      <Users users={this.state.users}/>
    )
  }

});

module.exports = App;
