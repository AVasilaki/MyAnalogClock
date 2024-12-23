const minute = document.querySelector(".minute");
const minuteShadow = document.querySelector(".shadow-minute");
const hour = document.querySelector(".hour");
const hourShadow = document.querySelector(".shadow-hour");
const day = document.querySelector(".date-day");
const date = document.querySelector(".date");
const month = document.querySelector(".date-month");
const yer = document.querySelector(".date-year");

const arrDays = ["неділя", "понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота"];
const arrMonth = [
  "січня",
  "лютого",
  "березня",
  "квітня",
  "травня",
  "червня",
  "липня",
  "серпня",
  "вересня",
  "жовтня",
  "листопада",
  "грудня",
];

const currentTime = new Date();

const currentMinute = currentTime.getMinutes();
const currentHour = currentTime.getHours();
const currentDay = arrDays[currentTime.getDay()];
const currentDate = currentTime.getDate();
const currentMonth = arrMonth[currentTime.getMonth()];
const currentYear = currentTime.getFullYear();

day.textContent = currentDay;
date.textContent = currentDate;
month.textContent = currentMonth;
yer.textContent = currentYear;

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

  const currentDay = arrDays[currentTime.getDay()];
  const currentDate = currentTime.getDate();
  const currentMonth = arrMonth[currentTime.getMonth()];
  const currentYear = currentTime.getFullYear();

  day.textContent = currentDay;
  date.textContent = currentDate;
  month.textContent = currentMonth;
  yer.textContent = currentYear;

  minute.style.transform = `rotate(${rotateMinute}deg)`;
  minuteShadow.style.transform = `rotate(${rotateShadowMinute}deg)`;
  hour.style.transform = `rotate(${rotateHour}deg)`;
  hourShadow.style.transform = `rotate(${rotateShadowHour}deg)`;
}, 60000);
