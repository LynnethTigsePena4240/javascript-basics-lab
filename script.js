//1 declaring and using variables
var studentName = "John"
var studentAge = 21
var isEnrolled = true

console.log("1 Declaring and using variables:");
console.log("Logging the declared variables:");
console.log(studentName,studentAge,isEnrolled, '\n');

//2 demonstrating data type

var string = "Hello there"
var number = 123
var boolean = true
var animals = ["dog","cat","sloth"]
var person ={
    name: "Smith",
    age: 25,
    lastName: "Mcdonalds" 
}

console.log("2 Demonstrating data type:");
console.log(`Logging data type string: ${string}`);
console.log(`Logging data type number: ${number}`);
console.log(`Logging data type boolean: ${boolean}`);
console.log(`Logging data type array: ${animals}`);
console.log(`Logging data type object: ${JSON.stringify(person)}\n`);

//3 using basic operators
let a = 5
let b = 3

let y = false
let x = true
console.log("3 Using basic operators:");

//3.1 Arithmetic Operators:
console.log("3.1 Arithmetic operators:");
console.log("(a=5 and b=3)");

console.log("Addition: a + b = ",a+b);
console.log("Subtraction: b - 4 = ",b-4);
console.log("Multiplication: a * 10 =", a*10);
console.log("Division: b / a =",b/a, "\n");

//3.2 Comparison Operators:
console.log("3.2 Comparison operators:");

console.log("Is 'a' greater than 'b':",a>b);
console.log("Is 'a' less than 'b': ",a<b);
console.log("Is 'a' equal to 'a':",a===a);
console.log("Is 'b' NOT equal to 'a':", b!=a,"\n");

//3.3 Logical Operators:
console.log("3.3 Logical operators:");
console.log("(y=false and x=true)");

console.log("y AND x:",y&&x);
console.log("y OR x:",y||x);
console.log("NOT y:",!y);











