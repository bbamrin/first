var first = document.getElementById("first"),
    last = document.getElementById("last"),
    parsedJSON,
    dat,
    counter;

var request = $.get("http://localhost:7500/records");
request.done(function(data){
  console.log(data);
  console.log("success");
  parsedJSON = JSON.parse(data);
  dat = data;
  first.innerHTML = parsedJSON.name;
  last.innerHTML = parsedJSON.Lname;

request.fail(function(jqXHR,textStatus,errorThrown){
  console.log(textStatus, errorThrown);
  console.log("x");
});
});
