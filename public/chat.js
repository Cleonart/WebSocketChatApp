
// make connection
var socket = io.connect("http://localhost:4000");

var message = document.getElementById('message');
	handle  = document.getElementById('handle'),
	send    = document.getElementById('send'),
	output  = document.getElementById('message-box');

send.addEventListener('click', function(){
	socket.emit("chat", {
		message: message.value,
		handle: handle.value
	})
	message.value = "";
});


socket.on('chat', function(data){
	output.innerHTML += '<p>' + data.message + "</p>"
});