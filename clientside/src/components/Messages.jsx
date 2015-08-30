var React = require('react');
var Message = require('./Message.jsx');

var Messages = React.createClass({

  render: function() {
    return (
      <div id="messages">
        {this.props.messages.reverse().map(function(message) {
          return <Message message={message} />
        })}

      </div>
    )
  }
})

module.exports = Messages