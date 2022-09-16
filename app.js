const currentDate = new Date();

const currentMonth = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[currentMonth.getMonth()];

function dateAndYear() {
  document.getElementById("time").innerHTML = currentDate.getHours() + " : ";
  document.getElementById("time").innerHTML += currentDate.getMinutes();
  document.getElementById("date").innerHTML += currentDate.getDate() + " - ";
  document.getElementById("date").innerHTML += month + " - ";
  document.getElementById("date").innerHTML += currentDate.getFullYear();
}

dateAndYear();
