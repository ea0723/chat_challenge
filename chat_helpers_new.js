function getRender() {
            helpers.fetchNewMessages(function (messages) {
              $.each(messages, function (i, message) {
                helpers.renderMessage(message);
              });
            });
		};








	// The elements in my form
	document.getElementById(id),
	var chatForm = document.id('chatForm'),
	var result = document.id('result'),
  

          // Poll the server for new messages.
          setInterval(function () {
            helpers.fetchNewMessages(function (messages) {
              $.each(messages, function (i, message) {
                helpers.renderMessage(message);
              });
            });
          }, 2000);

        });
    



      renderMessage: function(text) {
        console.log('rendering message...', text);
  	  $('.messages').prepend(text) {
        var $messages = $('.messages').length ? $('.messages') : $('<ol class="messages"/>').appendTo(document.body);
        $('<li class="message"/>').html($('<span class="text"/>').text(result.messages.time +": " + text)).prependTo($messages);
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
