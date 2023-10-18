const sentence = "SUUUIIIIIIIIIIII";
const output = document.getElementById("output");
function writeEffect(text, delay) {
  var index = 0;
  setInterval(function () {
    if (index < text.length) {
      output.innerHTML += text.charAt(index);
      index++;
    }
  }, delay);
}
writeEffect(sentence, 200);
