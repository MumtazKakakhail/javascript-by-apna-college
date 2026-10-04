try {
  // Yeh code chalaya jayega
  console.log(a + b); // a aur b define nahi hain, is se error aayega
} catch (err) {
  // Agar error aaye to yeh code chalega
  console.log("Error pakra gaya: " + err.message);
}

console.log("Mera program rukta nahi.");


try {
  throw new Error("Yeh ek custom error hai!");
} catch (err) {
  console.log("Error pakra gaya: " + err.message);
}

console.log("Program abhi bhi chal raha hai.");


var letters = 'abc';
cpnsole.log(letters.match(/a/));