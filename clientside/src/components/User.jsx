var React = require('react');
var socket = require('../websocket.js');
var User = React.createClass({

  render: function() {
  	console.log(this.props.user);
  	var itemClasses = "userOuter";
  	if (this.props.user.id === socket.id) {
  		itemClasses += " me";
  	} else {
  		itemClasses += " notMe";
  	}
  	var listStyle = {
  		background: this.props.user.bubble.color
  	};
    return (
    	<div className={itemClasses}>
	    	<div className="userInner" style={listStyle}>
	    		{this.props.user.name}
	    	</div>
    	</div>
    )
  }
})

module.exports = User;
