function displayMailingLabel(name, address, city, state, zip) {
    console.log(name);
    console.log(address);
    console.log(city + ",  " + state + " " + zip);
}

let name = "Stacy Preston";
let address = "1845 South Union Ave.";
let city = "Bangor";
let state = "Maine";
let zip = "04403";

displayMailingLabel(name, address, city, state, zip);
displayMailingLabel("Legolas", "100", "Middle", "Earth", "00000");

//..........................

function addNumbers(num1, num2) {
    let sum = num1 + num2;
    console.log(num1 + " + " + num2 + " = " + sum);
}

let num1 = 20;
let num2 = 1738;

addNumbers(num1, num2);
addNumbers(8, 12);

//..........................

function displayReceipt(totalDue, amountPaid) {
    let changeDue = amountPaid - totalDue;
    console.log("Total Due: $" + totalDue);
    console.log("Amount Paid: $" + amountPaid);
    console.log("")
    if (amountPaid > totalDue) {
    console.log("Change Due: $" + changeDue);
    }
    else if (amountPaid < totalDue) {
        console.log("Amount still owed: $" + -(changeDue));
    }
}

    let totalDue = 14;
    let amountPaid = 20;

    displayReceipt(totalDue, amountPaid);
    displayReceipt(20, 20);
    displayReceipt(20, 14);