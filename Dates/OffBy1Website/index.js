"use strict"

window.onload = init;

function init()
{
    const Btn = document.getElementById("Btn");
    Btn.onclick = onBtnClicked;
}

function onBtnClicked() {
    const dateField = document.getElementById("dateField");
    let date1 = new Date(dateField.value);
    date1 = date1.toString();
    const display = document.getElementById("display");
    display.innerHTML = date1;
}

