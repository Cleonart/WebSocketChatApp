
// make connection
var socket = io.connect("http://localhost:4000");

var message = document.getElementById('message');
	handle  = document.getElementById('handle'),
	send    = document.getElementById('send'),
	output  = document.getElementById('message-box');

send.addEventListener('click', function(){

	var user    = handle.value;
	var pesan   = message.value;

	if(user == ""){
		alert("Nama pengguna harus diisi");
	}

	else if(pesan == ""){
		alert("Pesan harus diisi");
	}

	else if(user != "" && pesan != ""){

		socket.emit("chat", {
			message: message.value,
			handle: handle.value
		})

	}
	
	message.value = "";
});


socket.on('chat', function(data){

	var constructor = "<div class='chat-bubble'><p class='title'>" + data.handle + "</p><p>" + data.message + "</p></div>";
	output.innerHTML += constructor
	
	var objDiv = document.getElementById("message-box");
	objDiv.scrollTop = objDiv.scrollHeight;
});