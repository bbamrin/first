/*var express = require("express"),
    cors = require("cors");
var app = express();
app.use(cors());
app.get("/", function(request,response){
  response.send("Hello, Node.js!");
});
app.listen(7500);*/

var wss = require("ws").server;
var server = new wss({port:591});
var clients = new Set();
server.on("connection",function(socket){
  clients.add(socket);
  socket.on("message",function(message){
    for(var interlocutor of clients){
      interlocutor.send(message);
    }
  });
  socket.on("close",function(){
    clients.delete(socket);
  });
});
