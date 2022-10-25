"use strict"

function parseAndDisplayName(name){
let pos = name.indexOf(" ");
let firstName = name.substring(0, pos);
let lastName = name.substring(pos);

console.log("Name: " + name);
console.log("First name: " + firstName);
console.log("Last name: " + lastName);
console.log("");
}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");


