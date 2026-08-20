/* Problem statement: Create a type alias PaymentMethod = "cash" | "card" | "mobile". Comment why interface can't express this. Create an Order interface using PaymentMethod.
Input: let method: PaymentMethod = "card";
 */

type PaymentMethod =  "cash" | "card" | "mobile";

//Interface can't express this because this is union type. and interface can not represent unions

interface Order{
    name : string,
    quantity : number,
    price : number,
    paymentMethod : PaymentMethod;
}

let foodOrder:Order={
    name : "Burger",
    quantity:1,
    price:299,
    paymentMethod:"card"
}

console.log(foodOrder)