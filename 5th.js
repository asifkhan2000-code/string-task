const prompt = require("prompt-sync")();
let str = prompt("Enter a sentence: ");
let capitalizedString = "";
let words = str.split(" ");
for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let capitalizedWord =
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    capitalizedString += capitalizedWord + " ";
}
console.log(capitalizedString);
