var dict = {}, area  = document.getElementById("txt");
var fs = require("fs");
fs.readFile("quotes.txt","utf-8",function(err,content){
  dict = content;
});
area.innerHTML = dict;
