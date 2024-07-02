
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const wkday = new Date();
let day = weekday[wkday.getUTCDay()];
document.getElementById("day").innerHTML = day;



const time = new Time();
document.getElementById("time").innerHTML = time;