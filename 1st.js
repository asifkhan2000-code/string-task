const prompt = require("prompt-sync")();
let str = prompt("Enter something: ");
str = str.split("");
console.log(str);
let count = 0;
for (const index of str) {
    if (index.toLowerCase() === "a") {
        count++;
    }
}
console.log("String has the letter `a` for", count, "times.");
