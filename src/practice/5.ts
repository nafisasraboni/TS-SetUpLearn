/* Problem statement: Write a generic function getLastElement<T> that returns the last element of an array. Test with number[] and string[].
Input: [10, 20, 30] and ["a", "b", "c"]
Output: 30 and "c"
 */

function getLastElement<T> (arr:T[]):T|undefined{
    let lastElement = arr.pop();
    return lastElement
}
console.log(getLastElement(["a", "b", "c"]))