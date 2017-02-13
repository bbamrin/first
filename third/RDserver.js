ws = require("ws").Server;
var data = " ";
var server = new ws({port: 7500});
var clients = new Set();
server.on("connection",function(socket){
  socket.send(data);
  clients.add(socket);
  socket.on("connection", function(message){
    data = message;
    for(var itr of clients){
      if(socket !== this){
        socket.send(data);
      }
    }
  });
  socket.on("close", function(){
    clients.delete(socket);
});
});
