var React = require('react');
var actions = require('../actions');
var store = require('../store');
var guid = require('guid');

var SendMessage = React.createClass({
  sendMessage: function(e) {
    var text = this.refs.message.getDOMNode().value;
    var me = store.getMe();
    var id = guid.create().value;
    var message = {
      "id" : id,
      "message" : text,
      "user" : {
        "id" : me.id,
        "name" : me.name,
        "bubble" : me.bubble
      }
    };
    actions.sendMessage(message);
    document.getElementById("message").value = "";
  },

  render: function() {
    return (
      <div className="sendMessageWrap">
        <input ref="message" id="message" placeholder="Meddelande" />
        <div className="sendSeperator"></div>
        <div className="sendButton" id="sendMessage" onClick={this.sendMessage}></div>
      </div>
    )
  }
});

module.exports = SendMessage;
