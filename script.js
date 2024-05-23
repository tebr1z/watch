const sec = document.querySelector("#second");
const min = document.querySelector("#minute");
const hours = document.querySelector("#hour");
const deg = 6;
function watch() {
  let hour = new Date().getHours() * 30;
  let minute = new Date().getMinutes() * deg;
  let second = new Date().getSeconds() * deg;

  hours.style.transform = `rotate(${hour + minute / 12}deg)`;
  min.style.transform = `rotate(${minute}deg)`;
  sec.style.transform = `rotate(${second}deg)`;
}

setInterval(watch, 1000);

function playTickSound() {
  const tickSound = document.getElementById("tick-sound");
  tickSound.currentTime = 0;
  tickSound.play();
}
setInterval(playTickSound, 2000);
