"use strict";
/* Problem statement: Create a Product interface with title: string, price: number, inStock?: boolean. Create two product objects — one with inStock, one without. Write a function that logs a product's price.
Input: { title: "Laptop", price: 55000 } and { title: "Mouse", price: 500, inStock: true }
Output: 55000 and 500 printed by the function.
 */
Object.defineProperty(exports, "__esModule", { value: true });
let product1 = {
    title: "Laptop",
    price: 55000
};
let product2 = {
    title: "Mouse",
    price: 500,
    inStock: true
};
function productPrice(product) {
    return product.price;
}
console.log(productPrice(product1));
console.log(productPrice(product2));
//# sourceMappingURL=3.js.map