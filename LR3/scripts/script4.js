var myButton = document.getElementById("myButton");

function miniGame() {
  const numberInput = document.getElementById("numberInput");
  if (numberInput.value >= 1) {
    var randomInteger = Math.floor(Math.random() * 11) - 5;
    console.log(randomInteger);
    if (randomInteger <= 0) {
      alert("Ваша ставка не зіграла, ви програли");
    } else if (randomInteger <= 5 || randomInteger > 0) {
      alert(
        "Ваша ставка зіграла, ви виграли " + numberInput.value * randomInteger
      );
    }
    myButton.disabled = false;
  }else{
    alert("Некоректна сума ставки")
    myButton.disabled = false;
  }
}
myButton.addEventListener("click", function () {
  myButton.disabled = true;
  setTimeout(miniGame, 2000);
});
