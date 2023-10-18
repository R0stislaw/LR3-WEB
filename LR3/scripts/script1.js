function timeformat(value){
    if (value<10){
      return "0" + value
    }
    else{
      return value
    }
  }
  function time() {
    var time = new Date();
    clock.value = timeformat(time.getHours()) + ":" + timeformat(time.getMinutes()) + ":" + timeformat(time.getSeconds())
    setTimeout("time()", 1000);
    }
  time();