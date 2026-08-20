"use strict";
/* Problem statement: Create a generic interface Container<T> with item: T. Create one Container<number> and one Container<string>.
Input: { item: 100 }, { item: "Books" }
Output: Container<number> = { item: 100 }, Container<string> = { item: "Books" }
 */
Object.defineProperty(exports, "__esModule", { value: true });
let cont1 = {
    item: "Books"
};
let cont2 = {
    item: 100
};
console.log(`Container<number> = { item: ${cont2.item} }, Container<string> = { item: "${cont1.item}" }`);
//# sourceMappingURL=6.js.map