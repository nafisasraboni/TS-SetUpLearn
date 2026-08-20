"use strict";
/* Problem statement: Create a string enum OrderStatus: Placed, Shipped, Delivered, Cancelled. Write a function that prints a readable message for a given status.
Input: OrderStatus.Shipped
Output: "Current status: SHIPPED" (or equivalent readable message)
 */
Object.defineProperty(exports, "__esModule", { value: true });
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["placed"] = "Placed";
    OrderStatus["shipped"] = "Shipped";
    OrderStatus["delivered"] = "Delivered";
    OrderStatus["cancelled"] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
function readableMessege(input) {
    return `Current status: ${input.toUpperCase()}`;
}
console.log(readableMessege(OrderStatus.shipped));
//# sourceMappingURL=8.js.map