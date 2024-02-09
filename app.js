var countInterval;
var timeLeft = prompt("enter time in seconds") 

function start() {
  countInterval = setInterval(updateCountdown, 1000);
}

function stop() {
  clearInterval(countInterval);
}

function updateCountdown() {
  var minutes = Math.floor(timeLeft / 60);
  var seconds = timeLeft % 60;

  var timeString = formatTime(minutes) + ":" + formatTime(seconds);
  document.getElementById("timer").textContent = timeString;

  if (timeLeft === 0) {
    clearInterval(countInterval);
    alert("Countdown finished!");
  }

  timeLeft--;
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
