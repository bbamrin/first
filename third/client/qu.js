var Qarea = document.getElementById("Qarea");
var bt = document.getElementById("bt");
var res = {};
bt.addEventListener("click",function(){
  var rqs = new XMLHttpRequest();
  rqs.open("GET","http://localhost:7500/");
  rqs.onreadystatechange = function(){
    if(this.readyState == this.DONE ){
      console.log("done");
      if(this.status != 200){
        console.log("err: " + this.status);
      }else{
        res = JSON.parse(this.responseText);
        console.log(res);
        Qarea.innerHTML = res.quote;
        document.title = res.tag;

      }
    }
  };
  rqs.send();
  });
