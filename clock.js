var secondDeg = 6;
setInterval(function() {
  document.getElementById('second').style.transform = "rotate(" + secondDeg + "deg)";
  if (secondDeg === 354){
    secondDeg = 0;
  } else {
    secondDeg = secondDeg + 6;
  }
  console.log(secondDeg);
}, 1000);

var minuteDeg = 6;
setInterval(function() {
  document.getElementById('minute').style.transform = "rotate(" + minuteDeg +  "deg)";
  if (minuteDeg === 354) {
    minuteDeg = 0;
  } else {
    minuteDeg = minuteDeg + 6;
  }
}, 60000)

var hourDeg = 30;
setInterval(function() {
  document.getElementById('hour').style.transform = "rotate(" + hourDeg + "deg)";
  if (hourDeg === 330) {
    hourDeg = 0;
  } else {
    hourDeg = hourDeg + 30;
  }
}, 3600000)
