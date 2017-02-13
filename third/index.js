
var express = require("express"),
    cors = require("cors");

var app = express();
app.use(cors());
app.get("/", function(request,response){
  response.redirect("index.html");
});
app.listen(7500);

/*var wss = require("ws").Server;
var server = new wss({port:591});
var clients = new Set();
server.on("connection",function(socket){
  console.log("connect");
  clients.add(socket);
  socket.on("message",function(message){
    console.log("message!");
    for(var interlocutor of clients){
      interlocutor.send(message);
    }
  });
  socket.on("close",function(){
    clients.delete(socket);
  });
});*/
