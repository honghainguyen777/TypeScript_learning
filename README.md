# Knowledge to remember about TypeScript

## Installation
- Install NodeJS
- In terminal/shell: npm install -g typescript

## Compile
- Browser can not understand TypeScript file (*ts extension) -> need to be compiled to JS file
- In terminal: `tsc filename.ts`
- or: `tsc filename.ts filenamexx.js` (in some cases: `tsc filename.ts --outFile filenamexx.js`) (same directory)
- or automatically compile (w for watch): `tsc filename.ts -w` (same directory)
- To compile to a different JS version: `tsc --init` then go to the generated `tscofig.json` and change the `target` to the targeted JS version
- If we want the *ts files and generated *js in different directory: go to `tscofig.json`, uncomment the `"rootDir": "./src"` and `"outDir": "./public"` -> in the terminal: `tsc` or `tsc -w` to compile all *ts files
- In case we have more *ts files outside the `src` folder, we can avoid compiling those files buy adding another attribute to the parent object of `compilerOptions` as: `{compilerOptions: {...}, "include" : ["src"]}`

## Types
- Similar to JS, TS datatypes: number, string, boolean and object
- TS is type check or type restricted, that mean once a datatype is assigned to a variable, the variable can only be re-assigned another value with the same datatype
- Like JS we can declare a varible with out specifying a value to it. That variable will have any types and can be re-assigned to any types: `let x;` or `let x: any;` then we store any type in x: `x = 5; x = "char";` 
- But this is TS, it better to explicitly infer a type from usage: `let character: string;` `let number: number;` `let isRaining: boolean;`.
- Union variable: `let aVar: number|string;` -> aVar can store a string or a number;

### Arrays
- If the array is assigned with values that have same type -> A Value with a different type can not be pushed/added in
- Of course, we can not re-assigned the array variable to another value with different datatypes
- If the array is assigned with mixed datatypes -> the array can be modifed (pushed/changed) with different datatyped values regardless of order/index
- To define an array containning only a specific type: `let StrArray: string[];` `let numArray: number[];` etc. No error appear in the editor when pushing a value to the array: `numArray.push(5);` --> receiving an `TypeError: can not read property 'push' of undefined` in the browser's console because we have not yet declared the array.
- Sometime to initialize it with an empty array: `let numArray: number[] = [];` -> `numArray.push(5);` works
- Union array (mixed types): `let mixed: (string|number)[] = [];` -> now strings and numbers can be stored inside the mixed array.
- An array of any types: `let mixedArr: any[] = [];`

### Objects
- Objects can contain multple types
- When a key is assigned with a value, that key can only hold the same type of value. Key is now type-restricted as a variable -> we can't change that type
- The varible that assigned to an object can only re-assign to an object
- if a key does not exist in the object we can not create it using: obj.newKey = value; -> once we define an object, we can't add addional properties (key-value pairs) to it
- If we re-assign the variable to another object, the new objects has to contain the same keys with the same typed values as the initial object, no missing keys, extra keys, different typed values allow. (`let obj = {x:1, y:'hehe'}` now: `obj = {x:2, y:'kaka', z: 5)` or `= {x:3}` or `= {x:'huhu', y: 5}` not allowed) -> same structure, same type of object, same properties (same key names)
- Objects in TS is extremely restricted but less bugs when developing large application
- To declare a variable as an object: `let person1: object;` be careful, if we use: `person1 = {name: "John", age: 24}`, then we want to change the name property: `person1.name = "Philipp";` -> Error: `Property age does not exist on object` -> this is because we first we tell TS: `let person1: object;` that says person1 is just a plain object without any attributes. Even we assign `{name: "John", age: 24}` later to it, the compiler just thinks we are missing the `age` property. --> solution: use `interface`;
- To explicitly declare an object: `let person2: {name: string, age: number};`. Remember we need to declare the person2: `person2 = {name: "hai", age: 30};` before using dot-notation or []: `person2.name = "John"`
- An object of any types: `let mixedObj: {name: any, age: any};`. Again remember to declare the `mixedObj`;

### Function
- Explicit a function: `let funcName: Function;`
- Like other types, we can not re-assign the funcName to another type
- Parameter in TS function: `const add = (a: number, b: number, c?:number|string) => {....};`  Here `a` and `b` can only be numbers. `c` with a `?` tells us that `c` is optional parameter. If we do: `add(3, 5);` -> `a=3`, `b=5` and `c=undefined`;
- If we want `c` has a default value, we dont need to use `?`: `const add = (a: number, b: number, c:number|string = 10) => {....};` (`c` is still optional);
- If we do: `let result = add(3, 5);` the result will be infered the type from the returned value;
- If we want to explicit the type of returned value: `const aFunc = (parameters):number => {}` -> so the returned type of the aFunc will be a number. BUT we don't need to do that because TS automatically infer the type of the returned value.
- If we dont return anything from the function, we actually return a value called `void`

#### Function Signatures
- describe general structure of a function what arguments it takes in and what type of data it returns
- EXP: `let greet: (a: string, b: string) => void;` signitures: a function that take two arguments `a` - a string and `b` - a string and return `void` value;
- Base on the above function signitures: greet = (name: string, greeting: string) => {...no return}; if we do greet = (name: string, age: number) => {...} -> Error (need to match the greet signature exactly).

### Custom types
- Sometimes the type specification of the parameters can get quite long-winded. To avoid repeation we can create a custom type: `type StringOrNum = string | number;` then use `StringOrNum` type to replace `string | number` in other lines of code.


## DOM
### The DOM interactions and Type Casting
- We can do DOM queries as in JS with querySelector, etc.
- EXP: `const a = document.querySelector('a');` -> this is fine in TS
`console.log(a);` -> also fine in TS
`console.log(a.href);` -> `Error: Object is possibly 'null'` -> Because *ts files do not have access to the corresponding html file. The compiler think it is an object of null
--> add in an exclamation mark `!` at the end of the querySelector: `const a = document.querySelector('a')!;`; `!` says: this will return a value and not null
- DOM manipulation in TS: it automatically contains special types for every DOM elements (ex. HTMLAnchorElement)
- To do type casting to define the type of a variable/element: `const form = document.querySelector('.a-class') as HTMLFormElement;` (because when we use class in the query selector, TS does not know what is returned type, it only assume to be `Element`) -> we have to cast the type to the type we want. Some DOM elements: HTMLFormElement, HTMLInputElement, HTMLSelectElement, ...


## Classes
- Classes in TS is very similar to JS, BUT
- In JS: `class AClass { constructor(a, b) {this.num1 = a; this.num2 = b}}`
- In TS: if we do the same (`class AClass { constructor(a: number, b: number) {this.num1 = a; this.num2 = b}}`), we will get an error: `Property 'a' does not exist on the type 'AClass'`;
- We have to define num1, num2 before adding into the constructor: `class AClass { num1: number; num2: number; constructor(a: number, b: number) {this.num1 = a; this.num2 = b}}`
- Another way to define num1, num2 directly to the constructor is using modifier for each property: `class AClass { constructor(public num1: number, public num2: number){}}`
- We can have an array of objects: `let arr: AClass[] = [];`
- Same as JS: we can change value of a property: `let a = AClass(3, 5); a.num1 = 7;`
### Access modifiers (Public, Private, Readonly)
- Public: Default modifier for property in the class: `class AClass { num1: number; num2: number; constructor(a: number, b: number) {this.num1 = a; this.num2 = b}}` === `class AClass { public num1: number; public num2: number; constructor(a: number, b: number) {this.num1 = a; this.num2 = b}}`
- Private: Not allow to access outside of the Class: `class AClass { private num1: number; num2: number; constructor(a: number, b: number) {this.num1 = a; this.num2 = b}}` then create an instance: `let a = AClass(3, 5)` if we do: `a.num1` or `a.num1 = 7` -> Error
- Readonly: we can read a property from outside of the class, but we can't re-assign/change it: we can do `console.log(a.num1)`  but not `a.num1 = 7`; also we can't modifed the num1 in a method inside the Class: `sum() {this.num1 = 3} `-> error

