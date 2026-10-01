// 1: 
// Print something on the console
// console.log("Hello, I learn javascript")
// console.log(42);
// console.log(true);
// console.log("My name is", "siraj", "and I am", 21, "years old");

// You can pass multiple values separated by commas, and console.log will print them with spaces between.

//2:
//useful console methods:
// 

//3:
// Comments : Comments are notes for humans. JavaScript ignores them.
// This is a single-line comment
/*
 This is a
 multi-line comment
*/

// 4:
// Variable : A variable is a named box where you store a value. Later, you can use the name to get the value back, or change it.
// var age = 25;
// let name1 = "Aman";
//JavaScript has three keywords to declare variables: var , let , and const .
// const PI = 3.14159;
// console.log(age)
// console.log(name1)
// console.log(PI)

// Naming Rules
// Must start with a letter, _ , or $ .
// Can contain letters, digits, _ , $ .
// Cannot start with a digit.
// Cannot use reserved keywords ( let , if , function , etc.).
// Case-sensitive: age and Age are different variables.
// // Use camelCase for variables: firstName , totalAmount , userAge .
// Use meaningful names: let a = 5 is bad. let studentCount = 5 is good.

// Some Variable Good Practices


// 5:
// Data Types
// Primitive Types (7):
// string       "Hello" , 'JS' , template
// number       42 , 3.14 , -7
// boolean      true , false
// null         null (intentional empty value)
// undefined    undefined (no value assigned yet)
// symbol       Symbol("id") (advanced, rarely used early)
// bigint       9007199254740993n (for huge numbers)

// Non-Primitive Type
// object — covers objects, arrays, functions, dates, etc.

// example
// let name = "Aman"; // string
// let age = 25; // number
// let isStudent = true; // boolean
// let car = null; // null - "no car right now, intentionally"
// let job; // undefined - never assigned
// let id = Symbol("uid"); // symbol
// let bigNum = 12345678901234567890n; // bigint (note the 'n')

// console.log(name)
// console.log(age)
// console.log(isStudent)
// console.log(car)
// console.log(id)
// console.log(bigNum)

// typeof tells you the type of any value.
// console.log(typeof "hello"); // "string"


// 6:
//Operators : persorm mathematical calculation

// Arithmetic Operators

// let a = 10, b = 3;
// console.log(a + b); // 13 addition
// console.log(a - b); // 7 subtraction
// console.log(a * b); // 30 multiplication
// console.log(a / b); // 3.333... division
// console.log(a % b); // 1 modulus (remainder)
// console.log(a ** b); // 1000 exponentiation (10^3)

// Increment and Decrement

// let x1 = 500;
// x1++; // x is now 6 (post-increment)
// ++x1; // x is now 7 (pre-increment)
// x1--; // x is now 6
// --x1; // x is now 5
// console.log(x1);

//  Assignment Operators

// let x = 10;
// x += 5; // x = x + 5 → 15
// x -= 3; // x = x - 3 → 12
// x *= 2; // x = x * 2 → 24
// x /= 4; // x = x / 4 → 6
// x %= 4; // x = x % 4 → 2

// Comparison Operators

// console.log(5 == "5"); // true (loose equality — converts types)
// console.log(5 === "5"); // false (strict equality — checkstype AND value)
// console.log(5 != "5"); // false
// console.log(5 !== "5"); // true
// console.log(5 > 3); // true
// console.log(5 <= 5); // true

//Logical Operator

// let a = true, b = false;
// console.log(a && b); // false AND: both must be true
// console.log(a || b); // true OR: at least one must be tr
// ue
// console.log(!a); // false NOT: flips the value








