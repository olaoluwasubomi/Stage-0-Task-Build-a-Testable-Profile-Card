// script.js
const timeElement = document.getElementById("currentTime");

function updateTime() {
  timeElement.textContent = Date.now();
}

// Update immediately
updateTime();

// Optional: update every second (so time changes dynamically)
setInterval(updateTime, 1000);
