$(document).ready(function(){
	
	var animationRunning = false;
	var usersHidden = false;

	$("#sendMessage").append(
		'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 30 30" style="enable-background:new 0 0 30 30;" xml:space="preserve"><defs></defs><rect class="noFill" width="30" height="30"/><g><polygon class="whiteFill" points="16.4,21.5 13.2,18.4 19.6,10.4 11.7,16.8 8.5,13.7 21.5,8.5 "/><polygon class="whiteFill" points="12.8,19.7 10.2,21 10.4,17.4 "/></g></svg>'
	);

	function showUsers () {
		animationRunning = true;
		usersHidden = false;
		$("#usersContainer").show();
		setTimeout(function(){
			$("#usersContainer").removeClass("push");
			$("#chatContainer").addClass("push");
			setTimeout(function(){
				animationRunning = false;
			}, 420);
		}, 20);
	}

	function hideUsers () {
		animationRunning = true;
		usersHidden = true;
		$("#usersContainer").addClass("push");
		$("#chatContainer").removeClass("push");
		setTimeout(function(){
			$("#usersContainer").hide();
			animationRunning = false;
		}, 420);
	}

	$("#signInButton").on({
		tap: function () {
			if (!animationRunning) {
				hideUsers();
				$("#username").blur();
				setTimeout(function(){
					$("#showChat").show();
					$("#message").focus();
				}, 420);
			}
		},
		click: function () {
			if (!animationRunning) {
				hideUsers();
				$("#username").blur();
				setTimeout(function(){
					$("#showChat").show();
					$("#message").focus();
				}, 420);
			}	
		}
	});

	$("#showUsers").on({
		tap: function () {
			if (!animationRunning) {
				showUsers();
			}
		}
	});

	$("#showChat").on({
		tap: function () {
			if (!animationRunning) {
				hideUsers();
			}
		}
	});

	$("#message").keypress(function(e){
		if (e.charCode === 13) {
			$("#sendMessage").click();
		}
	});

	$("#username").keypress(function(e){
		if (e.charCode === 13) {
			$("#signInButton").click();
		}
	});

	$("#sendMessage").on({
		tap: function () {
			$("#messages-app").scrollTop();
		},
		click: function () {
			$("#messages-app").scrollTop();
		}
	});
		
});