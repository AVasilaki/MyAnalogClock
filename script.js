const minute = document.querySelector(".minute");
const minuteShadow = document.querySelector(".shadow-minute");
const hour = document.querySelector(".hour");
const hourShadow = document.querySelector(".shadow-hour");

const currentTime = new Date();

const currentMinute = currentTime.getMinutes();
const currentHour = currentTime.getHours();

const rotateMinute = (360 / 60) * currentMinute + 55;
const rotateShadowMinute = (360 / 60) * currentMinute + 57;
const rotateHour = (360 / 12) * currentHour - 85 + (360 / 12 / 60) * currentMinute;
const rotateShadowHour = (360 / 12) * currentHour - 87 + (360 / 12 / 60) * currentMinute;

minute.style.transform = `rotate(${rotateMinute}deg)`;
minuteShadow.style.transform = `rotate(${rotateShadowMinute}deg)`;
hour.style.transform = `rotate(${rotateHour}deg)`;
hourShadow.style.transform = `rotate(${rotateShadowHour}deg)`;

setInterval(() => {
  const currentTime = new Date();

  const currentMinute = currentTime.getMinutes();
  const currentHour = currentTime.getHours();

  const rotateMinute = (360 / 60) * currentMinute + 55;
  const rotateShadowMinute = (360 / 60) * currentMinute + 57;
  const rotateHour = (360 / 12) * currentHour - 85 + (360 / 12 / 60) * currentMinute;
  const rotateShadowHour = (360 / 12) * currentHour - 87 + (360 / 12 / 60) * currentMinute;
  console.log(rotateMinute);

  minute.style.transform = `rotate(${rotateMinute}deg)`;
  minuteShadow.style.transform = `rotate(${rotateShadowMinute}deg)`;
  hour.style.transform = `rotate(${rotateHour}deg)`;
  hourShadow.style.transform = `rotate(${rotateShadowHour}deg)`;
}, 60000);
