// if statement
let age = 22;
if (age => 18) {
    console.log("You Can Vote");

}

let firstName = "Mumtaz";
if (firstName == "Mumtaz") {
    console.log(`Welcome ${firstName}`);

}


// traffic lights

// let color = "green";
// if (color === "red") {
//     console.log("Stop!");

// }
// if (color === "yellow") {
//     console.log("Get Ready");

// }
// if (color === "green") {
//     console.log("Go");

// }

//else if
let Age = 16;
if (Age >= 18) {
    console.log("You Can Vote");

} else if (Age < 18) {
    console.log("You Can Not Vote");

}

// trafic light system
let color = "green";
if (color === "red") {
    console.log("Stop!");

}
else if (color === "yellow") {
    console.log("Get Ready");

}
else if (color === "green") {
    console.log("Go");

}

//results
let marks = 65;
if (marks >= 80) {
    console.log("A+");

} else if (marks >= 70) {
    console.log("A");

} else if (marks >= 60) {
    console.log("B");

} else if (marks >= 50) {
    console.log("C");

} else if (marks >= 40) {
    console.log("D");

} else if (marks < 40) {
    console.log("F");

}

//else 
let numbers = 40;
if (numbers >= 50) {
    console.log("You are pass");

} else {
    console.log("Fail");

}

let size = "L";
if (size === "XL") {
    console.log("price is", 250, "Rupees");

} else if (size === "L") {
    console.log("price is", 200, "Rupees");

} else if (size === "M") {
    console.log("price is", 150, "Rupees");
} else if (size === "S") {
    console.log("price is", 100, "Rupees");
}


//Nested if-else
let Marks = 45;
if (Marks >= 33) {
    console.log("pass");
    if (Marks >= 80) {
        console.log("A+");

    } else {
        console.log("A");

    }
} else {
    console.log("Better Luck Next Time!");

}