var dict = {};
var fs = require("fs");
fs.readFile("quotes.txt","utf-8",function(err,content){
  dict = content;
});
var express = require("express"),
    cors = require("cors");
var app = express();


dict.quote = "qwerty";
dict.tag = 7;
var json = JSON.stringify(dict);
app.use(cors());
app.get("/", function(request, response) {
  response.send(dict);

});
app.listen(7500);
