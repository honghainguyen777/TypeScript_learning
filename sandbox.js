// let character = 'Hai' // this variable can now only be a string
// let age = 30; // age only now hold a number
// let isRich = false; // isRich now hold a boolean
// // a function
// const circ = (diameter: number) => {
//     return diameter * Math.PI;
// }
// console.log(circ(7.5));
// arrays
var names = ['hai', 'hana', 'pika'];
names.push('hallo');
// names = 'hello' // can not change type of the names to string
// names.push(30) // not possible because names previously declared with only one type - string
var numbers = [1, 2, 3, 4, 5];
numbers.push(6);
// we can create a mixed array
var mixed = [1, 'two', 3, false]; // -> TS will now know that mixed can hold number, string or boolean
mixed.push('hehe'); // ok
mixed.push(3); // ok
mixed.push(true); // ok
// objects
var weather = {
    temperature: 34,
    isRanning: true,
    sky: "cloudy"
};
// temperature now only be a number, isRanning is boolean, and sky is string -> we can't change that later
weather.temperature = 12; // ok
// weather.sky = 15 // not possible
// weather = {
//     temperature: 44,
//     isRanning: false;
// } // not allowed because of lacking sky key/property
// weather = {
//     temperature = "forty",
//     isRanning: true,
//     sky: "clear"
// } // not allowed because the temperature property changed its type
