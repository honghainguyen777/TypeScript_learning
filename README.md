# Knowledge to remember about TypeScript

## Installation
- Install NodeJS
- In terminal/shell: npm install -g typescript

## Compile
- Browser can not understand TypeScript file (*ts extension) -> need to be compiled to JS file
- In terminal: `tsc filename.ts`
- or: `tsc filename.ts filenamexx.js` (in some cases: `tsc filename.ts --outFile filenamexx.js`)
- or automatically compile (w for watch): `tsc filename.ts -w`

## Datatypes
- Similar to JS, TS datatypes: number, string, boolean and object
- TS is type check or type restricted, that mean once a datatype is assigned to a variable, the variable can only be re-assigned another value with the same datatype
- Like JS we can declare a varible with out specifying a value to it. That variable will have any types and can be re-assigned to any types: `let x; x = 5; x = "char";`
- But this is TS, it better to explicitly infer a type from usage: `let character: string;` `let number: number;` `let isRaining: boolean;`.
- Union variable: `let aVar: number|string;` -> aVar can store a string or a number;
### Arrays
- If the array is assigned with values that have same type -> A Value with a different type can not be pushed/added in
- Of course, we can not re-assigned the array variable to another value with different datatypes
- If the array is assigned with mixed datatypes -> the array can be modifed (pushed/changed) with different datatyped values regardless of order/index
- To define an array containning only a specific type: `let StrArray: string[];` `let numArray: number[];` etc. No error appear in the editor when pushing a value to the array: `numArray.push(5);` --> receiving an `TypeError: can not read property 'push' of undefined` in the browser's console because we have not yet declared the array.
- Sometime to initialize it with an empty array: `let numArray: number[] = [];` -> `numArray.push(5);` works
- Union array (mixed types): `let mixed: (string|number)[] = [];` -> now strings and numbers can be stored inside the mixed array

### Objects
- Objects can contain multple types
- When a key is assigned with a value, that key can only hold the same type of value. Key is now type-restricted as a variable -> we can't change that type
- The varible that assigned to an object can only re-assign to an object
- if a key does not exist in the object we can not create it using: obj.newKey = value; -> once we define an object, we can't add addional properties (key-value pairs) to it
- If we re-assign the variable to another object, the new objects has to contain the same keys with the same typed values as the initial object, no missing keys, extra keys, different typed values allow. (`let obj = {x:1, y:'hehe'}` now: `obj = {x:2, y:'kaka', z: 5)` or `= {x:3}` or `= {x:'huhu', y: 5}` not allowed) -> same structure, same type of object, same properties (same key names)
- Objects in TS is extremely restricted but less bugs when developing large application
- To declare a variable as an object: `let person1: object;`
- To explicitly declare an object: `let person2: {name: string, age: number};`
- 

