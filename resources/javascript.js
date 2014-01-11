// Your Javascript will go here!
$(document).ready(function() {
	function replaceName() {
		var myNewName = window.prompt('Your name?');
		// document.getElementById('user-name').innerHTML = myNewName;
		$("#user-name").html(myNewName);
		$("#user-name").css({color: "blue"});
	}

	function clickEvent() {
		$('#copyright').click(function(){
			$(this).css({'color': 'green', 'font-size': '20px' });
		});
	}

	$('#user-name').click(replaceName);

	$('.section').hover(
		function(){ $(this).css({ 'background-color': 'rgba(0,255,0,0.1)' }); },
		function(){ $(this).css({ 'background-color': 'rgba(0,0,255,0.1)' }); }
		);

	// replaceName();
	clickEvent();
});