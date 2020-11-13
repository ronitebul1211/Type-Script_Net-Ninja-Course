"use strict";
var anchor = document.querySelector("a");
// console.log(anchor.href); // error - anchor could bu null
// anchor && console.log(anchor.href); // runtime checking
console.log(anchor.href); // use ! to tell compiler anchor !== null for sure
// const form = document.querySelector("form");
var form = document.querySelector(".new-item-form");
var typeInput = document.querySelector("#type");
var toFromInput = document.querySelector("#tofrom");
var detailsInput = document.querySelector("#details");
var amountInput = document.querySelector("#amount");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(typeInput.value, toFromInput.value, detailsInput.value, amountInput.valueAsNumber);
});
