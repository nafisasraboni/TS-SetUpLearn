"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkResponse = {
    data: "Found Data",
    status: 200
};
const checkResponse1 = {
    data: false,
    status: 404
};
const checkResponse2 = {
    data: 500,
    status: 200
};
const checkResponse3 = {
    data: 798,
    status: 200
};
function identify(value) {
    return value;
}
console.log(identify("sraboni"));
console.log(identify(123));
function checkValuee(valuee) {
    return valuee;
}
console.log(checkValuee("jani na bal"));
console.log(checkValuee(12345));
console.log(checkValuee(true));
function arrayCheck(arr) {
    return arr;
}
console.log(arrayCheck([3, 4, 5, 6, 7]));
//# sourceMappingURL=generics.js.map