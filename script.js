const sec = document.querySelector("#second");
const min = document.querySelector("#minute");
const hours = document.querySelector("#hour");
const deg = 6; //6 derce: 1 satin tam bir kruqu 360 dercecedi 360 / 60 = 6
function watch() {
  let hour = new Date().getHours() * 30;
  let minute = new Date().getMinutes() * deg;
  let second = new Date().getSeconds() * deg;

  hours.style.transform = `rotate(${hour + minute / 12}deg)`; //12 satliq`da her saat 30 derce doner (360/12)
  min.style.transform = `rotate(${minute}deg)`; // deqiqede 6 derece doner
  sec.style.transform = `rotate(${second}deg)`;// saniyede 6 derece doner
}

setInterval(watch, 1000);
//ses effekti her saniyede tik tak ses ucun
function playTickSound() {
  const tickSound = document.getElementById("tick-sound");
  tickSound.currentTime = 0;
  tickSound.play();
}
setInterval(playTickSound, 2000);
