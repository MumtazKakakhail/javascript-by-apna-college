// for loop
for (let i = 1; i <= 5; i++) {
    console.log(i);

}

for (let i = 5; i >= 1; i--) {
    console.log(i);

}

// for (let p=10; p>=1; p-3) {
//     console.log(p);

// }

//print odd numbers
for (let i = 1; i <= 15; i = i + 2) {
    console.log("odd numbers:", i);

}

//print even numbers
for (let i = 2; i <= 10; i = i + 2) {
    console.log("even numbers:", i);

}

//backward
for (let i = 10; i >= 2; i = i - 2) {
    console.log("backward:", i);

}

//print multiplication table for 5
for (let i = 5; i <= 50; i = i + 5) {
    console.log(i);

}

// let n = prompt("write your number");
// n = parseInt(n);
// for (let i = n; i <= n * 10; i = i + n) {
//     console.log(i);

// }

//nested loop
for (let i = 1; i <= 3; i++) {
    console.log(`outer loop ${i}`);
    for (j = 1; j <= 3; j++) {
        console.log(j);

    }

}

//while loop
let i = 0;
while (i <= 6) {
    console.log(i);
    i++

}

//guess game
const favMovie = "avatar";
let guess = prompt("guess my favriote movie");
while ((guess != favMovie) && (guess != "quit")) {
    guess = prompt("wrong guess.Please try again");
}
if (guess == favMovie) {
    console.log("congrats!");

} else {
    console.log("You quit");

}

//break
// let m=1;
// while(m<=5) {
//     if (m == 3) {
//         break;
//     }
//     console.log(m);

// }

//Loops with arrays
let fruits = ["apple", "banana", "orange", "mango", "graps"];
fruits.push("pineapple");
for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);

}

//reverse
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(i, fruits[i]);

}

//Loops with nested arrays
let heroes = [["ironman", "spiderman", "thor"],
["superman", "wonder women", "flash"]];
for (let i = 0; i < heroes.length; i++) {
    console.log(i, heroes[i], heroes[i].length);
    for (let j = 0; j < heroes[i].length; j++) {
        console.log(`j=${j}, ${heroes[i][j]}`);

    }
}

let students = [["mumtaz", 92], ["kamran", 95], ["shahab", 93.5], ["basharat", 90]];
for (let i = 0; i < students.length; i++) {
    console.log(`info of student #${i}`);

    for (let j = 0; j < students[i].length; j++) {
        console.log(students[i][j]);

    }

}









