Chat Challeng readme.md

This app is designed to help you learn JavaScript. You won't need a server running or anything, just use JSONP to send and recieve API data from a page saved on your computer.

To get started, create an HTML file on your computer, and include the following script tags:
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script src="http://codeclasschat.herokuapp.com/helpers.js"></script>

The helpers script introduces a JavaScript object named "helpers", which contains three functions.

	helpers.fetchNewMessages(callback)
	> This goes to the server to fetch new messages your client hasn't displayed yet. When it has retrieved them, it passes them to the callback you provided.

	helpers.renderMessage(messageText)
	> This takes the text of a message, transforms it into html, and renders that html to the screen.
	> Note: the function searches the page for a node with the class "messages", and puts results in there. If there isn't one already, it will be created for you.

	helpers.sendMessage(messageText)
	> This takes a string and sends it to the chat server
	> Note: you don't need to handle user input, you can just send messages via the console.

If you don't have rendering working yet, You check if your call worked by looking in the example client

Last, you'll want to set up polling of the helpers.fetchNewMessages() function, using setInterval().

Now go build a local chat client and start talking! If you like, you can check out this example of what you're going for.