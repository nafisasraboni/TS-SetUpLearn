function userInfo<T>(initialValue:T):[T,(newValue:T)=>void]{
    let value = initialValue;

    function anotherInfo(newValue:T){
        value = newValue;
    }

    return [value,anotherInfo];
}
console.log(userInfo(0))