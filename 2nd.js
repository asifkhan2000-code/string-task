const prompt = require("prompt-sync")();
const str = prompt("Enter a sentence: ");
let count1 = 0;
let count2 = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
        count1++;
    } else if (str[i] === "A") {
        count2++;
    }
}
console.log("Number of `a` in the sentence is:", count1);
console.log("Number of `A` in the sentence is:", count2);
