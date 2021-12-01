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

//4
let a = 10;
let b = 3;
a = a + b;
b = a - b;
a = a - b;
console.log(a, b)

//JSinfo  task_1

let name = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // hello Ilya

//JSinfo task_2
5 > 4 // true
"apple" > "pineapple" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false

//JSinfo task_3
alert( null || 2 || undefined ) // 2