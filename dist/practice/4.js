"use strict";
/* Problem statement: Create a type alias PaymentMethod = "cash" | "card" | "mobile". Comment why interface can't express this. Create an Order interface using PaymentMethod.
Input: let method: PaymentMethod = "card";Output: Order object like { id: 1, method: "card" }, type-checked successfully
 */
Object.defineProperty(exports, "__esModule", { value: true });
let method = {
    id: 1,
    paymentMethod: "card"
};
console.log(method);
//# sourceMappingURL=4.js.map