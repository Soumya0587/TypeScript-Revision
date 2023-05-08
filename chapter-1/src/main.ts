let username = "soumya";
console.log(username);

let a: number = 12;
let b: number = 6;
let c: number = 2;

console.log(a / b);
console.log(a / c);

// implicitly
let myName = "soumalya";
// explicitly decleared
let myFatherName: string = "john";
let age: number;
let loading: boolean;
let album: string | number | boolean;
age = 7;
loading = true;
album = true;

const sum = (a: number, b: number) => {
  return a + b;
};

let re: RegExp = /\w+/g;

// Array

let arr1 = ["india", "usa", "russia"];
let arr2 = [1, 2, 3, "big"];
let arr3 = [1, true, "yes"];

arr1[0]="spain"
arr2[2]="germany"

// tuple

let myTuple : [string,number,boolean] = ["soumya",49,false]
myTuple[0]="hello"
console.log(myTuple);

// object and type

type player ={
    name : string,
    height : number,
    hobby : (string | number) []
}

let myobj : player ={
    name : "soumya",
    height : 5.6,
    hobby : [1,2, "painting"]
}

// enum

enum uni {
    u=1,
    a,
    b,
    v,
    k
}
console.log(uni.v);
