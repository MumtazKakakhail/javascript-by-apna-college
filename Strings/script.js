//string methods

//trim
let password = prompt("Enter Your Password");
let newPass = password.trim();
console.log(newPass);



//In js strings are immuteable means no changes can be made to string
//whenever we do try to make a change , a new string is created and old one remains same.


//toUpperCase and toLowerCase

let names = "mumtaz";
console.log(names.toUpperCase());


let lastNam = "WALI";
console.log(lastNam.toLowerCase());


//indexof

let str = "ILoveCoading";
// str.indexOf("I");
console.log(str.indexOf("I"));
console.log(str.indexOf("Love"));
console.log(str.indexOf("k"));
console.log(str.indexOf("o"));
console.log(str.indexOf("Coading"));


//method chaining

// let msg = "    hello!   ";
// console.log(msg);
// let newMsg = msg.trim();
// console.log("after trim:", newMsg);
// newMsg = newMsg.toUpperCase();
// console.log("after upperCase:", newMsg);

let msg = "    hello!   ";
let newMsg = msg.trim().toUpperCase();
console.log(newMsg);


//slice()
let nam = 'MumtazWali';
console.log(nam.slice(0,6));

let pet = 'cat';
console.log(pet.slice(2));
console.log(pet.slice(-2));


//replace
let message = 'IdoCoading';
console.log(message.replace("do","Love"));
console.log(message.replace("I","M"));


//repeat
let fruit = 'mango';
console.log(fruit.repeat(3));

