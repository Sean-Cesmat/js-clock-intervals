var secondHand = document.getElementById('second');
var minuteHand = document.getElementById('minute');
var hourHand = document.getElementById('hour');
var seconds;
var minutes;
var hours;


var updateTime = function() {
  var now = new Date();
  seconds = now.getSeconds();
  minutes = now.getMinutes();
  hours = now.getHours();
  secondHand.style.transform = "rotate(" + (seconds * 6) + "deg)";
  minuteHand.style.transform = "rotate(" + (minutes * 6) + "deg)";
  if (hours > 12) {
    hours -= 12;
  }
  hourHand.style.transform = "rotate(" + (hours * 30) + "deg)";
  // console.log(seconds);
  // console.log(minutes);
  // console.log(hours);
}


setInterval(updateTime,1000);
