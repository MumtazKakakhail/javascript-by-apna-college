let students = ["mumtaz", "kamran", "sameer"];
console.log(students);

//Arrays are are muteable in js
console.log((students[1] = "shah"));

// console.log((students[10] = "shaukat"));


//Array property
//length
console.log(students.length);

//Array Methods
//1- push
console.log(students.push("saleem"));
//2- pop
console.log(students.pop());
//3- unshift
console.log(students.unshift("shahab"));
//4- shift
console.log(students.shift());

let followers = ["a", "b", "c"]
console.log(followers);

let blocked = followers.shift();


//practice-Q
//Q- for the given start state of the array,change it to final form using methods
// start = ["january", "july", "march", "august"]
// final = [ "july", "june" "march", "august"]
let months = ["january", "july", "march", "august"]
console.log(months.shift());
console.log(months.shift());
console.log(months.unshift("june"));
console.log(months.unshift("july"));



