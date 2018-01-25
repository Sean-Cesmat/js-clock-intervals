//var secondDeg = 6;
//var minuteDeg = 6;
//var hourDeg = 30;
var currentDate = new Date;

var secondDeg;
var secondHand = function(seconds){
  secondDeg = (seconds * 6) + 12;
};
var getSeconds = currentDate.getUTCSeconds();
secondHand(getSeconds);

setInterval(function() {
  document.getElementById('second').style.transform = "rotate(" + secondDeg + "deg)";
  if (secondDeg === 354){
    secondDeg = 0;
  } else {
    secondDeg = secondDeg + 6;
  }
  console.log(secondDeg);
}, 1000);

var minuteDeg;
var minuteHand = function(minutes) {
  minuteDeg = (minutes * 6);
  console.log(minuteDeg);
};
var getMinutes = currentDate.getUTCMinutes();
minuteHand(getMinutes);

setInterval(function() {

  document.getElementById('minute').style.transform = "rotate(" + minuteDeg +  "deg)";
  if (minuteDeg === 354) {
    minuteDeg = 0;
  } else {
    minuteDeg = minuteDeg + 6;
  }
}, 60000)

var hourDeg;
var hourHand = function(hour) {
  if (hour === 12) {
    hourDeg = 0;
  } else if (hour > 12) {
    hourDeg = (hour - 12) * 30;
  } else {
    hourDeg = (hour * 30);
  }
  console.log(currentDate.getHours());
}
var getHour = (currentDate.getHours());
hourHand(getHour);
setInterval(function() {
  document.getElementById('hour').style.transform = "rotate(" + hourDeg + "deg)";
  if (hourDeg === 330) {
    hourDeg = 0;
  } else {
    hourDeg = hourDeg + 30;
  }
}, 1000)

setTimeout(function() {
  document.getElementById('minute').style.transform = "rotate(" + minuteDeg +  "deg)";
  document.getElementById('hour').style.transform = "rotate(" + hourDeg + "deg)";
}, 1000);
