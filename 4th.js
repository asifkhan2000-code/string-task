const prompt = require("prompt-sync")();
let str = prompt("Enter a sentence: ");
for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
        str = str.replace(str[i], "y");
    } else if (str[i] === "X") {
        str = str.replace(str[i], "Y");
    }
}
console.log(str);

// second method
str = str.replaceAll("x", "y").replaceAll("X", "Y");
console.log(str);
