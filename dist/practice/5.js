"use strict";
/* Problem statement: Write a generic function getLastElement<T> that returns the last element of an array. Test with number[] and string[].
Input: [10, 20, 30] and ["a", "b", "c"]
Output: 30 and "c"
 */
Object.defineProperty(exports, "__esModule", { value: true });
function getLastElement(arr) {
    let lastElement = arr.pop();
    return lastElement;
}
console.log(getLastElement(["a", "b", "c"]));
//# sourceMappingURL=5.js.map