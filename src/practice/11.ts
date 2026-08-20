interface User {
    username: string
    email: string
    age: number
    country: string
    password: string
}
function updateUser(input:Partial<User>){
    return input;
}
console.log(updateUser({ age: 25, country: "Bangladesh" }))

type selectedOnes = Pick<User,"username"|"email">
type deletedOnes = Omit<User,"password">

type bonus = Pick<User,"username">
type bonusFinal = Partial<bonus>