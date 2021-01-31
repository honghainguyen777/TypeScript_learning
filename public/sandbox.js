"use strict";
// let character = 'Hai' // this variable can now only be a string
// let age = 30; // age only now hold a number
// let isRich = false; // isRich now hold a boolean
// // a function
// const circ = (diameter: number) => {
//     return diameter * Math.PI;
// }
// console.log(circ(7.5));
// arrays
// let names = ['hai', 'hana', 'pika'];
// names.push('hallo');
// // names = 'hello' // can not change type of the names to string
// // names.push(30) // not possible because names previously declared with only one type - string
// let numbers = [1, 2, 3, 4, 5];
// numbers.push(6);
// // we can create a mixed array
// let mixed = [1, 'two', 3, false] // -> TS will now know that mixed can hold number, string or boolean
// mixed.push('hehe'); // ok
// mixed.push(3); // ok
// mixed.push(true); // ok
// // objects
// let weather = {
//     temperature: 34,
//     isRanning: true,
//     sky: "cloudy"
// }
// // temperature now only be a number, isRanning is boolean, and sky is string -> we can't change that later
// weather.temperature = 12; // ok
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
// // Explicit types
// let character: string;
// let age: number;
// let isRaining: boolean;
// age = 30;
// // age = "hello" // not allowed
// // a variable with any types
// // let a; // or
// let a: any;
// a = 5;
// a = "haha";
// but it better to explicitly specify a type to a variable from usage
// Array
// let nums: number[]; // the nums can only contains numbers
// let chars: string[]; // chars only contains strings
// nums.push(5); // error because the nums has not been declared
// let nums: number[] = [];
// nums.push(5);  // okay now
// // nums.push("hello") // not allowed
// // union types
// let mixed: (string|number)[] = []; // mixed can store string and number types
// mixed.push(5);
// mixed.push("hello");
// // mixed.push(true); // not allowed
// console.log(mixed);
// let aVar: number|string;
// aVar = 5; // ok
// aVar = "hello" // ok
// // aVar = false; // not allowed
// // array of any types
// let mixedArr: any[] = [];
// objects
// let person1: object;
// person1 = {name: "John", age: 24};
// // person1.age = 5; //-> an error: Property age does not exist on type(object)
// // let person1 = {name: "John", age: 24};
// // person1.age = 5;
// // explicit an objects:
// let person2: {
//     name: string,
//     age: number
// }
// person2 = {name: "John", age: 24};
// // object of any types
// let person3: {
//     name: any, // need to give a value otherwise we can't assign a person3.name = "John" later
//     age: any
// }
// person3 = {name: "hai", age: 30};
// person3.name = "John";
// // Function
// let greeting1 = () => {
//     console.log("hello, world");
// }
// // greeting = "hi" // not allowed
// let greeting2: Function;
// greeting2 = () => {
//     console.log("hello, again");
// }
// const add = (a: number, b: number) => {
//     console.log(a+b);
// }
// add(5, 10);
// // add(5, "10") // not allowed
// // optional parameter
// const add2 = (a: number, b: number, c?:number|string) => {
//     console.log(a + b);
// } // return void
// add2(1, 3); // c will be undefined
// add2(1,2, 3); // ok
// // inference
// let minus = (a: number, b: number) => {
//     return a - b;
// }
// let result = minus(15, 10);
// console.log(result);
// // Type Aliases // loai bi danh
// type StringOrNum = string | number;
// type objWithName = {name: string, uid: StringOrNum};
// const logDetails = (uid: StringOrNum, item: string) => {
//     console.log(`${item} has a uid of ${uid}`);
// }
// const greet = (user: objWithName) => {
//     console.log(`${user.name} says hello`);
// }
// const greet2 = (user: objWithName, age: number) => {
//     console.log(`${user.name} says hello`);
// }
// Function signatures
// let greet: (a: string, b: string) => void; // signitures
// greet = (name: string, greeting: string) => {
//     console.log(`${name} says ${greeting}`);
// }
// // this is not allowed
// // greet = (name: string, greeting: number) => {
// //     console.log(`${name} says ${greeting}`);
// // }
// let calc: (a: number, b: number, c: string) => number;
// calc = (numOne: number, numTwo: number, action: string) => {
//     if (action === "add") {
//         return numOne + numTwo;
//     } else {
//         return numOne - numTwo;
//     }
// }
// let logDetails: (obj: {name: string, age: number}) => void;
// type person = {name: string, age: number};
// logDetails = (ironhack: person) => {
//     console.log(`${ironhack.name} is ${ironhack.age} years old`);
// }
// // interfaces
// interface HasFormatter {
//     format():string;
// }
// class Invoice implements HasFormatter{
//     // client: string;
//     // details: string;
//     // amount: number;
//     constructor(
//         readonly client: string,
//         private details: string,
//         public amount: number,
//     ) {}
//     format() {
//         return `${this.client} owes $${this.amount} for ${this.details}`;
//     }
// }
// class Payment implements HasFormatter {
//     constructor(
//         readonly recipient: string,
//         private details: string,
//         public amount: number,
//     ) {}
//     format() {
//         return `${this.recipient} is owed $${this.amount} for ${this.details}`;
//     }
// }
// // now create docOne and docTwo that have the HasFormatter interface
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// // because the Invoice and Payment classes has the same format as Hasformatter -> valid
// docOne = new Invoice('Thao', 'web work', 2500);
// docTwo = new Payment('Mario', 'killing a fly', 2021000);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }
// const me: IsPerson = {
//     name: 'hai',
//     age: 30,
//     speak(text: string): void {console.log(text);},
//     spend(amount: number): number {
//         console.log('I spent', amount);
//         return amount;
//     }
// }
// const greetPerson = (person: IsPerson) => {
//     console.log('hello ', person.name);
// }
// greetPerson(me);
// Generics
// const addUID = (obj: object) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid}; // return a new object with all properties in obj and added in a new property uid
// }
// let docOne = addUID({name: 'hai', age: 40});
// console.log(docOne);
// console.log(docOne.name) // not allow
// // to solve that:
// const addUID = <T>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid}; // return a new object with all properties in obj and added in a new property uid
// }
// let docOne = addUID({name: 'hai', age: 40});
// let docTwo = addUID('hello') // allow!!!
// console.log(docOne);
// console.log(docOne.name) // not it is allowed
// // to have only object as argument:
// const addUID = <T extends object>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid}; // return a new object with all properties in obj and added in a new property uid
// }
// // let docTwo = addUID('hello') // not allow!!!
// // or even more restricted:
// const addUID1 = <T extends {name: string}>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid}; // return a new object with all properties in obj and added in a new property uid
// } // new object an the name property must be a string
// // with interfaces
// interface Resource {
//     uid: number;
//     resourceName: string;
//     data: object; 
// }
// const docThree: Resource = {
//     uid: 1,
//     resourceName: 'person',
//     data: {name: 'hai'}
// }
// // but we can pass in data: "a string" -> data must be an object
// interface Resource2<T> {
//     uid: number;
//     resourceName: string;
//     data: T; 
// }
// const docFour: Resource2<string> = {
//     uid: 1,
//     resourceName: 'person',
//     data: "hai"
// }
// const docFive: Resource2<string[]> = {
//     uid: 1,
//     resourceName: 'person',
//     data: ["hai", "Lena"]
// }
// Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
var docThree = {
    uid: 1,
    resourceName: ResourceType.BOOK,
    data: { name: 'hai' }
};
