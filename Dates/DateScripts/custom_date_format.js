let date = new Date();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
"October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = date.getDate();
let month = months[date.getMonth()];
let year = date.getFullYear();
let dayOfWeek = days[date.getDay()];

console.log(day + "-" + month + "-" + year + " (" + dayOfWeek + ")");