var React = require('react');
var socket = require('../websocket');
var Message = React.createClass({
    render: function() {
    	var bubbleStyle = {
    		background: this.props.message.user.bubble.color
    	};
    	var messageClasses = "messageWrap";
    	if (this.props.message.user.id === socket.id) {
    		messageClasses += " me";
    	} else {
    		messageClasses += " notMe";
    	}
    	return (
    		<div className="messageOuter">
  			<div className={messageClasses}>
  				<div className="userBubble" style={bubbleStyle}>{this.props.message.user.bubble.letter}</div>
  				<div className="messageTextOuter">
            <div className="messageArrow"></div>
            <div className="messageTextInner">{this.props.message.message}</div>
  				</div>
  			</div>
  		</div>
  	)
  }
})

module.exports = Message;