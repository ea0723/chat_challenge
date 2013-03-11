$(document).ready(function(){
    $(".button").click(function (e) { //click submit button to initiate send message
		e.preventdefault //prevent the page clearing everything each time a message is sent
      helpers.sendMessage($('.newMessage').val()); //helper js that pulls textarea text
      $('.newMessage').val(""); //returns textarea value to blank after submit
    });
			
	function fetch(){ //create a named function for easier reading of setInterval code
        helpers.fetchNewMessages(function (messages) { //helper js pulls new msgs from srv
          $.each(messages, function (i, message) { //
            helpers.renderMessage(message);}); //renders new messages fetched from srv onto pg
		});
	};
		
	function warning(){ //insert a message into results - to make setInterval easier to read
		$('.messages').prepend('<li>Clearing message history in 5 Seconds</li>');
	};
		
	function clear(){ //empty the 'results' section (removes history every 30 seconds)
		$('.messages').empty();
	};
		
	setInterval(fetch, 5000); //adjust fetch timing
	setInterval(warning, 55000) //adjust warning timing
	setInterval(clear, 60000); //adjust clear timing
		
});