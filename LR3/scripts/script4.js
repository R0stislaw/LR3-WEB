function miniGame(){
    const numberInput = document.getElementById("numberInput");
    var randomInteger = Math.floor(Math.random() * 11) - 5;
    console.log(randomInteger);
    if (randomInteger <= 0){
        alert("Ваша ставка не зіграла, ви програли");
    }
    else if (randomInteger <= 5 || randomInteger > 0){
        alert("Ваша ставка зіграла, ви виграли - " + numberInput.value*randomInteger);
    }
  }