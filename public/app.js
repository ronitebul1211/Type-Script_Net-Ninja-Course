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
/** Class */
// class Invoice {
//    readonly client: string;
//    private details: string;
//    public amount: number;
//    constructor(client: string, details: string, amount: number) {
//       this.client = client;
//       this.details = details;
//       this.amount = amount;
//    }
//    format() {
//       return `${this.client} owes ${this.amount} for ${this.details}`;
//    }
// }
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invoiceOne = new Invoice("Roni", "Empanada", 90);
var invoiceTwo = new Invoice("Gal", "Empanada", 150);
var invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
