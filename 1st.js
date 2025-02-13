const prompt = require("prompt-sync")();
let str = prompt("Enter something: ");
// first method
let count1 = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "a") {
        count1++;
    }
}
console.log("The above string has the letter `a`", count1, "times.");
// second method
str = str.split("");
let count2 = 0;
for (const index of str) {
    if (index.toLowerCase() === "a") {
        count2++;
    }
}
console.log("The above string has the letter `a`", count2, "times.");
