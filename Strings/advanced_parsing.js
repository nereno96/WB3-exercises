"use strict"

function parseAndDisplayName(name){
    name = name.trim();
    if (name.indexOf(" ") >= 0 && name.indexOf(" ") == name.lastIndexOf(" ")) {
        let pos = name.indexOf(" ");
        let firstName = name.substring(0, pos);
        let lastName = name.substring(pos + 1);

        console.log("Name: " + name);
        console.log("First name: " + firstName);
        console.log("Last name: " + lastName);
        console.log("");
    } 
    else if (name.indexOf(" ") == -1) {
        console.log("Only name: " + name);
        console.log("");
    }
    else if (name.indexOf(" ") >= 0 && name.indexOf(" ") != name.lastIndexOf(" ")) {
        let pos1 = name.indexOf(" ");
        let pos2 = name.lastIndexOf(" ");
        let firstName = name.substring(0, pos1);
        let middleName = name.substring(pos1 + 1, pos2);
        let lastName = name.substring(pos2 + 1);

        console.log("Name: " + name);
        console.log("First name: " + firstName);
        console.log("Middle name: " + middleName);
        console.log("Last name: " + lastName);
        console.log("");
    }
}

parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");