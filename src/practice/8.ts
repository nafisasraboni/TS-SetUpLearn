/* Problem statement: Create a string enum OrderStatus: Placed, Shipped, Delivered, Cancelled. Write a function that prints a readable message for a given status.
Input: OrderStatus.Shipped
Output: "Current status: SHIPPED" (or equivalent readable message)
 */

enum OrderStatus{
    placed = "Placed", 
    shipped = "Shipped", 
    delivered = "Delivered", 
    cancelled = "Cancelled"
}

function readableMessege (input:OrderStatus):string{
    return `Current status: ${input.toUpperCase()}`
}
console.log(readableMessege(OrderStatus.shipped))