var ws = new WebSocket("ws://localhost:7500");
var s;
tinyMCE.init({
  selector: "div",
  plugins: ["fullscreen"],
  setup: function(editor) {
    editor.on("init", function(){
      setTimeout(function() {
        editor.execCommand("mceFullScreen");
      }, 0);
    });
    ws.onmessage = function(message) {
      document.activeElement.blur();
      editor.setContent(message.data);
      s = message.data;
      console.log(s);
    };

    function sendDocument() {
      ws.send(editor.getContent());

      editor.on("keyup", sendDocument);
      editor.on("change",sendDocument);
    }
  }
});
