//Primitive Types

//1
let name = "John";
let admin = name;
console.log(admin)

//2
let i = 10;
let n = i++ % 5;
let b = i++;
console.log(b)
//answer 0

//3
let a = 10;
let b = 3;
let c = a + b;
a = c - a;
b = c - b;
console.log(a, b)