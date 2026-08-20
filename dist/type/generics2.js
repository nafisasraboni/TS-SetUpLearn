"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function userInfo(initialValue) {
    let value = initialValue;
    function anotherInfo(newValue) {
        value = newValue;
    }
    return [value, anotherInfo];
}
console.log(userInfo(0));
//# sourceMappingURL=generics2.js.map