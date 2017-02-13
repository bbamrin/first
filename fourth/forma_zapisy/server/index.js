var express = require("express"),
    bodyParser = require("body-parser"),
    mongoClient = require("mongodb").MongoClient,
    url = "mongodb://localhost/Log_n_Pass",
    database,
    jsonDB,
    cors = require("cors"),
    counter = 1;

var app =  express();
app.use(cors());
app.use(express.static("../server"));
var urlEP = bodyParser.urlencoded({ extended: false});
app.post("/enroll", urlEP, function(request, response){
  mongoClient.connect(url, function(err, db){
    database = db.collection("Log_n_Pass");
    database.insert({name:request.body.firstName, Lname:request.body.lastName},function(err,result){
      console.log(result);
      if(err){
        console.log(err.stack);
      }
    });
  });

  });
    response.redirect("/records.html");
  });
  app.get("/records", function(request,response){
    database.find().toArray(function(err,documents){

      console.log(documents[counter]);
      jsonDB = JSON.stringify(documents[counter]);
      console.log("jsonDB");
      counter += 1;

    });
    response.send(jsonDB);
  });



app.listen(7500);
