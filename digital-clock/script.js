let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let ampm = document.getElementById("ampm");

let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");

let hr_dot = document.querySelector(".hr_dot");
let min_dot = document.querySelector(".min_dot");
let sec_dot = document.querySelector(".sec_dot");

// reload the page every second
setInterval(function () {
  let date = new Date();
  let h = formatTime(date.getHours() % 12);
  let m = formatTime(date.getMinutes());
  let s = formatTime(date.getSeconds());
  // get the hours, minutes, seconds and am/pm
  hours.innerHTML =
    formatTime(date.getHours() % 12 || 12) + "<br><span>Hours</span>";
  minutes.innerHTML = m + "<br><span>Minutes</span>";
  seconds.innerHTML = s + "<br><span>Seconds</span>";
  ampm.innerHTML = date.getHours() >= 12 ? "PM" : "AM";

  hh.style.strokeDashoffset = toCircle(h, 12);
  mm.style.strokeDashoffset = toCircle(m, 60);
  ss.style.strokeDashoffset = toCircle(s, 60);

  hr_dot.style.transform = "rotate(" + toDotPosition(h, 12) + "deg)";
  min_dot.style.transform = "rotate(" + toDotPosition(m, 60) + "deg)";
  sec_dot.style.transform = "rotate(" + toDotPosition(s, 60) + "deg)";
}, 1000);

// format the time in 00
function formatTime(time) {
  if (time < 10) {
    return "0" + time;
  } else {
    return time;
  }
}

function toCircle(quantity, base) {
  return 440 - (440 * quantity) / base;
}

function toDotPosition(quantity, base) {
  return (360 * quantity) / base;
}
