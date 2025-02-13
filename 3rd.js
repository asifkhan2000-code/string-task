const prompt = require("prompt-sync")();
const inputString = prompt("Enter any sentence: ").toLowerCase();

function containsAllVowels(str) {
    const vowels = "aeiou";
    for (let vowel of vowels) {
        if (!str.includes(vowel)) {
            return false;
        }
    }
    return true;
}

console.log(containsAllVowels(inputString));
