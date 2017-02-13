var b = document.getElementById("b");
$("#request").on("click", function(){
    var request = $.get("http://localhost:7500/");
    request.done(function(data){
      b.innerHTML = data;
      
        //console.log(data);

    });
});
request.fail(function(jqXHR, textStatus, errorThrown){
    //console.log(textStatus,errorThrown);

});
