function main() {
  clips += parseInt(prompt("clips: "));
  funds += parseInt(prompt("funds: "));
  trust += parseInt(prompt("trust: "));
  unsoldClips += parseInt(prompt("unsold clips: "));
  setInterval(() => {
    document.getElementsByTagName("button")[22].click();
    document.getElementsByTagName("button")[16].click();
    document.getElementsByTagName("button")[21].click();
  }, 100);
  window.onkeydown = function(e) {
    for (var i in document.getElementsByTagName("button")) {
      if (document.getElementsByTagName("button")[i].innerText.startsWith(e.key)) {
        document.getElementsByTagName("button")[i].click();
      }
    }
  }
}
