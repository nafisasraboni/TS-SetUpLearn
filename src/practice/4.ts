/* Problem statement: Create a type alias PaymentMethod = "cash" | "card" | "mobile". Comment why interface can't express this. Create an Order interface using PaymentMethod.
Input: let method: PaymentMethod = "card";Output: Order object like { id: 1, method: "card" }, type-checked successfully
 */

type PaymentMethod =  "cash" | "card" | "mobile";

//Interface can't express this because this is union type. and interface can not represent unions

interface Order{
    id: number,
    paymentMethod : PaymentMethod;
}

let method:Order={
    id:1,
    paymentMethod:"card"
}

console.log(method)