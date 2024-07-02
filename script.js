// currentDay
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const wkday = new Date();
let day = weekday[wkday.getUTCDay()];
document.getElementById("day").innerHTML = day;


// currentTimeUTC
const currentTime = new Date();
document.getElementById("time").innerHTML = currentTime.getHours() + ":" + currentTime.getMinutes();
