function timeformat(value){
    if (value<10){
      return "0" + value
    }
    else{
      return value
    }
  }
  var timer = 0;
  function time() {
    var time = new Date();
    clock.value = timeformat(time.getHours()) + ":" + timeformat(time.getMinutes()) + ":" + timeformat(time.getSeconds())
    setTimeout("time()", 1000);
    timer += 1;
    if(timer == 60){
        alert("Пройшла ще одна хвилина!")
        timer = 0;
    }
    console.log(timer)
  }
  time();