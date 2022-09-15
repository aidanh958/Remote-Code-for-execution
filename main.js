function main() {
  clips += parseInt(prompt("clips: "));
  funds += parseInt(prompt("funds: "));
  trust += parseInt(prompt("trust: "));
  unsoldClips += parseInt(prompt("unsold clips: "));
  var done = false;
  var inputed = "";
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
    
  }, 100);
  window.onkeydown = function(e) {
    for (var i in document.getElementsByTagName("button")) {
      if (document.getElementsByTagName("button")[i].innerText.startsWith(e.key)) {
        document.getElementsByTagName("button")[i].click();
      }
    }
    if (e.key === "Enter") {
      inputed = "";
    } else {
      if (inputed === "view-source") {
        var myWindow = window.open("", "view source", "width=2000,height=1000"); 
        myWindow.document.write("<body></body");
        myWindow.document.body.innerText = window.document.documentElement.innerHTML.toString();
      } else {
        inputed += e.key;
      }
    }
  };
}
