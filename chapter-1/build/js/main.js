"use strict";
let username = "soumya";
console.log(username);
let a = 12;
let b = 6;
let c = 2;
console.log(a / b);
console.log(a / c);
// implicitly
let myName = "soumalya";
// explicitly decleared
let myFatherName = "john";
let age;
let loading;
let album;
age = 7;
loading = true;
album = true;
const sum = (a, b) => {
    return a + b;
};
let re = /\w+/g;
// Array
let arr1 = ["india", "usa", "russia"];
let arr2 = [1, 2, 3, "big"];
let arr3 = [1, true, "yes"];
arr1[0] = "spain";
arr2[2] = "germany";
// tuple
let myTuple = ["soumya", 49, false];
myTuple[0] = "hello";
console.log(myTuple);
let myobj = {
    name: "soumya",
    height: 5.6,
    hobby: [1, 2, "painting"]
};
// enum
var uni;
(function (uni) {
    uni[uni["u"] = 1] = "u";
    uni[uni["a"] = 2] = "a";
    uni[uni["b"] = 3] = "b";
    uni[uni["v"] = 4] = "v";
    uni[uni["k"] = 5] = "k";
})(uni || (uni = {}));
console.log(uni.v);
