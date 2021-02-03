var countDownDate = new Date("Feb 28, 2021 00:00:00").getTime();

var x = setInterval(function(){

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Display the result in the element with id="demo"
  document.getElementById("countdowntime").innerHTML = days + " Days " + hours + " Hrs "
  + minutes + " Min " + seconds + " Sec ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdowntime").innerHTML = "EXPIRED";
  }
}, 1000);