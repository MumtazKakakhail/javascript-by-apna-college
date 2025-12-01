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


//5- indexof
console.log(months.indexOf("july"));
console.log(months.indexOf("July"));

//6- includes
console.log(months.includes("june"));
console.log(months.includes("december"));

//7- concat
let primaryColors = ["red", "yellow", "blue"];
let secondaryColors= ["orange", "green", "violet"]
let allColors= primaryColors.concat(secondaryColors);
console.log(allColors);


//8- reverse
let colors = ['red', 'blue', 'yellow'];
console.log(colors);
let colours = colors.reverse();
console.log(colours);

//9- slice
let stds = ['ali','zain','shams','amir','yasir'];
let newStds = stds.slice(3,4);
console.log(newStds);
let newstd = stds.slice(3);
console.log(newstd);

console.log(newstd.slice(-1));


//10- splice
let numbers = ['one','two','three','four','five'];
console.log(numbers);

let newNum = numbers.splice(0, 3, 'eight' );
console.log(newNum);

let newNumss = numbers.splice(0, 0, 'zero', 'nine');
console.log(numbers);
