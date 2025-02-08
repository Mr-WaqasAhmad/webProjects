const sun = document.getElementById('sunDiv');
const moon = document.getElementById('moonDiv');
const changerDiv = document.getElementById('dayToNight_nightToDay');
let time = new Date().getHours();
if (time >= 6 && time < 19) {
  sun.style.opacity = 1;
} else {
  sun.style.opacity = 0;
}

//  moon & sun changing
if (time >= 19 || time < 6) {
  moon.style.opacity = 1
  changerDiv.style.opacity = 1
} else {
  moon.style.opacity = 0
  changerDiv.style.opacity = 0
}

setInterval(() => {
  document.getElementById("watchDiv").innerText = new Date().toLocaleTimeString()
}, 500)