interface Response <T> {
    data:T,
    status:number;
}

const checkResponse : Response<string> = {
    data:"Found Data",
    status:200
}
const checkResponse1 : Response<boolean> = {
    data:false,
    status:404
}
const checkResponse2 : Response<number> = {
    data:500,
    status:200
}
const checkResponse3 : Response<unknown> = {
    data:798,
    status:200
}

function identify<T>(value:T):T{
    return value
}
console.log(identify("sraboni"))
console.log(identify<number>(123))




function checkValuee<T> (valuee:T):T {
    return valuee;
}
console.log(checkValuee("jani na bal"))
console.log(checkValuee(12345))
console.log(checkValuee(true))

function arrayCheck<T>(arr:T[]):T[]{
    return arr;
}
console.log(arrayCheck([3,4,5,6,7]))