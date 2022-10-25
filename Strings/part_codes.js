"use strict"
function getSupplier(code) {
    code = code.trim();
    let stop = code.indexOf(":");
    let supplier = code.substring(0, stop);
    return supplier;
}
function getProductNumber(code) {
    code = code.trim();
    let stop1 = code.indexOf(":");
    let stop2 = code.indexOf("-");
    let productNumber = code.substring(stop1 + 1, stop2);
    return productNumber;
}
function getSize(code) {
    code = code.trim();
    let stop = code.indexOf("-");
    let size = code.substring(stop + 1);
    return size;
}

function codeToText(code) { 
    let supplier = getSupplier(code);
    let productNumber = getProductNumber(code);
    let size = getSize(code);

    console.log("The size " + size + " part " + productNumber + " is supplied by " + supplier);
}

codeToText("ACME:123-L")
codeToText("DI:12345-M")
codeToText("ACE:1-12")

