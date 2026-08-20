"use strict";
/* Problem statement: Declare a variable of type unknown holding a string. Use it to assert it as a string and get its length. Repeat using angle-bracket syntax <string>.
Input: let val: unknown = "Hello TypeScript";
Output: 16 (length), printed twice — once via as string, once via <string>.
*/
Object.defineProperty(exports, "__esModule", { value: true });
//assert it as a string
let variablee = "Hello TypeScript!!😄";
//console.log(variablee.length)
let variablee1 = variablee;
console.log(variablee1.length);
//angle-bracket syntax <string>
let variablee2 = "Hello TypeScript!!😄";
console.log(variablee2.length);
//# sourceMappingURL=1.js.map