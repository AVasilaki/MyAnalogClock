const minute = document.querySelector(".minute");
const minuteShadow = document.querySelector(".shadow-minute");
const hour = document.querySelector(".hour");
const hourShadow = document.querySelector(".shadow-hour");
console.log(minute, hour);

setInterval(() => {
  const currentTime = new Date();
  //   console.log(currentTime);
  const currentMinute = currentTime.getMinutes();
  const currentHour = currentTime.getHours();
  const rotateMinute = (360 / 60) * currentMinute + 55;
  const rotateShadowMinute = (360 / 60) * currentMinute + 57;
  const rotateHour = (360 / 60) * currentHour;
  console.log(rotateMinute);
  minute.style.transform = `rotate(${rotateMinute}deg)`;
  minuteShadow.style.transform = `rotate(${rotateShadowMinute}deg)`;
}, 60000);
