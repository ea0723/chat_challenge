var global = (function(){return this;}());
var host = "local_msg_srv.txt";
  //for testing from my local machine

  var since = 0;

  global.helpers = {

    sendMessage: function(message) {
      console.log('sending message...');
      $.ajax("http://" + host + "/messages/create", {
        dataType: "jsonp",
        data: {text: message}
      });
    },
	
	$(document).ready(function(){});

	var global = function () {
	    return this;
	};

	/*
	// The elements in my form
	document.getElementById(id),
	chatForm = document.id('chatForm'),
	    result = document.id('result'),
	    message = document.id('message');
	    console.log(message);
  
	  //for posting message to a local file
	  $('.button').click(function(element){
	    $('#chatForm').submit(function().append() {
	      $.ajax({
	        url:  "/Users/ea0723/Documents/projects/Chat_Challenge/local_msg_srv.txt", 
	        data: {text: message},
	        type: "POST",
	        success: function(data, textStatus, jqXHR) {
	          console.log("Message posted!");
	          console.log(data);
	        },
	        error: function(jqXHR, textStatus, errorThrown){
	          console.log("error");
	          console.log(textStatus);
	        }
	      });
	    });
	  });
	  */

    renderMessage: function(text) {
      console.log('rendering message...', text);
      var $messages = $('.messages').length ? $('.messages') : $('<ol class="messages"/>').appendTo(document.body);
      $('<li class="message"/>').html($('<span class="text"/>').text(text)).prependTo($messages);
    },

    // Goes to the server to get all undisplayed messages and passes each one to the rendering helper
    fetchNewMessages: function(callback) {
      console.log('fetching messages...');
      $.ajax("http://" + host + "/messages", {
        dataType: "jsonp",
        data: {since: since},
        success: function (result) {
          // Update the value of the `since` variable so we don't get
          // the same messages back again in the future.
          result.messages.length && (since = result.messages[result.messages.length - 1].time);
          var messageTexts = [];
          $.each(result.messages, function(which, message){
            messageTexts.push(message.text);
          });
          callback(messageTexts);
        }
      });
    },
  };

});
