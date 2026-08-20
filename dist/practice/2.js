"use strict";
/* Problem statement: Declare a string | number union variable. Cast it safely to number and add 10. Then write a double assertion (as unknown as) example and comment why it's risky.
Input: let value: string | number = "100";
Output: 110 (safe cast result); commented risky example, no runtime output required.
 */
Object.defineProperty(exports, "__esModule", { value: true });
let num = "100";
if (typeof num === "string") {
    let num1 = Number(num);
    let finalNum = num1 + 10;
    console.log(finalNum);
}
else {
    let finalNum = num + 10;
    console.log(finalNum);
}
let num2 = num;
console.log(num2);
// Risky: double assertion does not actually convert the value to a number.
//# sourceMappingURL=2.js.map