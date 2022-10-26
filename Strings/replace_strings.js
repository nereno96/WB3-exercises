"use strict"

let message = "Our corporate offices are located in Dallas";
let newMessage = message.replace("Dallas", "Austin");
console.log(newMessage);


let newMessage2 = message.replace(/DALLAS/i, "Austin");