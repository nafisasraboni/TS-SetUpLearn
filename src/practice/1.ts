/* Problem statement: Declare a variable of type unknown holding a string. Use it to assert it as a string and get its length. Repeat using angle-bracket syntax <string>.
Input: let val: unknown = "Hello TypeScript";
Output: 16 (length), printed twice — once via as string, once via <string>.
*/

//assert it as a string

let variablee : unknown = "Hello TypeScript!!😄";
//console.log(variablee.length)

let variablee1 = variablee as string;

console.log(variablee1.length)

//angle-bracket syntax <string>

let variablee2 = <string>"Hello TypeScript!!😄";
console.log(variablee2.length)


