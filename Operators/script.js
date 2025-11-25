// Arithmetic operators
let a = 25;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a ** b);
console.log(a % b);

// Unary operators
console.log(a++);
console.log(++a);
console.log(b--);
console.log(--b);

// Assignment operators
c = 30;
d = c;
f = 4;
console.log(d);
console.log((c += f));
console.log((c -= f));
console.log((c *= f));
console.log((c /= f));
console.log((c += f));
console.log((c %= f));

// Comparison operators
let age = 22;
console.log(age > 18);
console.log(age >= 22);
console.log(age < 23);
console.log(age <= 22);

// equal to  == not strickly check
console.log(5 == 5);
console.log(5 == "5"); //true

// === strickly check
console.log(5 === "5"); //false

// not equal to !=
console.log(5 != 5); //false
console.log(5 != 4); //true

let markss = 93;
if (markss >= 50 && markss >= 80) {
  console.log("pass");
  console.log("A+");
}
let marks = 52;
if (marks >= 50 || marks >= 80) {
  console.log("pass");
  console.log("A+");
}
let Marks = 52;
if (!(Marks < 33)) {
  console.log("pass");
  console.log("A+");
}

let Markss = 75;
if ((Markss > 33 && Marks <= 80) || !false) {
  // here it chack from left to right
  console.log("pass");
}

//!false or !true -> we avoid the values

//Practice Q
//Q- A "Good String" is a string that starts with letter 'a' and has a length > 3.
//write a program to find if a string is good or not

let str = "apple";
if (str[0] === "a" && str.length > 3) {
  console.log("Good String");
} else {
  console.log("Not a good string");
}

//Q-2
let num = 12;
if (num % 3 === 0 && (num + 1 == 15 || num - 1 == 11)) {
  console.log("Safe");
} else {
  console.log("UnSafe");
}


