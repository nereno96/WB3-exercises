function getSocSecTax(grossPay) {
    let tax = grossPay * .062;
    return tax;
}

function getMedicareTax(grossPay) {
    let tax = grossPay * .0145;
    return tax;
}

function getFederalTax(grossPay, withholdingCode) {
    if (withholdingCode == 0) {
        let tax = grossPay * .23;
        return tax;
    }
    else if (withholdingCode == 1) {
        let tax = grossPay * .21;
        return tax;
    }
    else if (withholdingCode == 2) {
        let tax = grossPay * .195;
        return tax;
    }
    else if (withholdingCode == 3) {
        let tax = grossPay * .185;
        return tax;
    }
    else if (withholdingCode >= 4) {
        let tax = grossPay * (.18 - (.005 * (withholdingCode - 4)));
        return tax;
    }
}



let ss1 = getSocSecTax(750);
let m1 = getMedicareTax(750);
let f1 = getFederalTax(750, 0);

console.log(ss1);
console.log(m1);
console.log(f1);
console.log("")

let ss2 = getSocSecTax(1550);
let m2 = getMedicareTax(1550);
let f2 = getFederalTax(1550, 2);

console.log(ss2);
console.log(m2);
console.log(f1);
console.log("")

let ss3 = getSocSecTax(1100);
let m3 = getMedicareTax(1100);
let f3 = getFederalTax(1100, 6);

console.log(ss3);
console.log(m3);
console.log(f3);