function main() {
  clips += parseInt(prompt("clips: "));
  funds += parseInt(prompt("funds: "));
  trust += parseInt(prompt("trust: "));
  unsoldClips += parseInt(prompt("unsold clips: "));
  var done = false;
  window.buttons = ["Make Paperclip"];
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
    for (var e in window.buttons) {
      for (var i in document.getElementsByTagName("button")) {
        if (document.getElementsByTagName("button")[i].innerText.startsWith(window.buttons[e])) {
          document.getElementsByTagName("button")[i].click();
        }
      }
    }
  }, 100);
  window.onkeydown = function(e) {
    if (e.key === "a") {
      window.buttons.push(prompt("press button: "));
    }
  };
}
