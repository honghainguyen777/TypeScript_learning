"use strict";
// let character = 'Hai' // this variable can now only be a string
// let age = 30; // age only now hold a number
// let isRich = false; // isRich now hold a boolean
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
