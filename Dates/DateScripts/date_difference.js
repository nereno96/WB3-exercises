let startDate = "July 11, 2022"; 
let endDate = "November 11, 2022";

let msec_per_day = 1000 * 60 * 60 * 24;

let elapsedMilliseconds = Date.parse(endDate) - Date.parse(startDate);

let dayDiff = elapsedMilliseconds / msec_per_day;

let numDays = Math.round(dayDiff);

console.log("The number of days between " + startDate + " and " + endDate + " is " + dayDiff);