"use strict"

let name = "Tiara Edwards";


let pos = name.indexOf(" ");
let firstName = name.substring(0, pos);
let lastName = name.substring(pos);

console.log("Name: " + name);
console.log("First name: " + firstName);
console.log("Last name: " + lastName);
