var React = require('react');
var User = require('./User.jsx');

var Users = React.createClass({

  render: function() {
    return (
      <div id="users">
        {this.props.users.reverse().map(function(user) {
          return <User user={user} />
        })}

      </div>
    )
  }
})

module.exports = Users
