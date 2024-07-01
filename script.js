"use strict";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const d = new Date();

// To get the current day
let today = days[d.getDay()];
document.querySelector("#currentDay").innerHTML = today;

// To get the current UTC time in milliseconds
function addZero(x, n) {
  while (x.toString().length < n) {
    x = "0" + x;
  }
  return x;
}
let hours = addZero(d.getUTCHours(), 2);
let minutes = addZero(d.getUTCMinutes(), 2);
let seconds = addZero(d.getUTCSeconds(), 2);
let timeInSeconds = hours + " : " + minutes + " : " + seconds;
document.getElementById("currentTime").innerHTML = timeInSeconds;
