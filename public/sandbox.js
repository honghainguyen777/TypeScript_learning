"use strict";
// let character = 'Hai' // this variable can now only be a string
// let age = 30; // age only now hold a number
// let isRich = false; // isRich now hold a boolean
var Invoice = /** @class */ (function () {
    // client: string;
    // details: string;
    // amount: number;
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var Payment = /** @class */ (function () {
    function Payment(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    Payment.prototype.format = function () {
        return this.recipient + " is owed $" + this.amount + " for " + this.details;
    };
    return Payment;
}());
// now create docOne and docTwo that have the HasFormatter interface
var docOne;
var docTwo;
// because the Invoice and Payment classes has the same format as Hasformatter -> valid
docOne = new Invoice('Thao', 'web work', 2500);
docTwo = new Payment('Mario', 'killing a fly', 2021000);
var docs = [];
docs.push(docOne);
docs.push(docTwo);
var me = {
    name: 'hai',
    age: 30,
    speak: function (text) { console.log(text); },
    spend: function (amount) {
        console.log('I spent', amount);
        return amount;
    }
};
var greetPerson = function (person) {
    console.log('hello ', person.name);
};
greetPerson(me);
