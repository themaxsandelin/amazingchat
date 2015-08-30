var React = require('react');
var actions = require('../actions');

var SignIn = React.createClass({
  signIn: function(e) {
    var username = this.refs.name.getDOMNode().value;
    setTimeout(function(){
      actions.signIn(username);
    }, 420);
  },

  render: function() {
    return (
      <div className="centerLogin">
        <input ref="name" id="username" placeholder="Username"/>
        <div className="button" id="signInButton" onClick={this.signIn}>Sign in</div>
      </div>
    )
  }
});

module.exports = SignIn;
