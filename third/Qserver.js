var dict, index,min = 0,struct = {},Jstruct, max;
var fs = require("fs");
function SizeOfArr(arr){
  var counter = 0;
  for(word in arr)
  {
    counter += 1;
  }
  return counter;
}
fs.readFile("quotes.txt","utf-8",function(err,content){
  dict = content.split("\n");
  max = SizeOfArr(dict);
});
  var express = require("express"),
      cors = require("cors");
  var app = express();
  app.use(cors());
  app.get("/", function(request, response) {
    index = Math.floor(Math.random() * (max - min)) + min;
    struct.text = dict[index];
    struct.number = index;
    console.log(index);
    Jstruct = JSON.stringify(struct);
    response.send(Jstruct);
  });
  app.listen(7500);
