$(document).on("ready", function() {
console.log("Hangmanned")
var words = ["html", "javascript", "jquery", "laptop", "statement", "pizza"];
var userChoices = [];

// function randomWord() {
//     return words[Math.floor(Math.random() * words.length)];
//   }
// console.log(randomWord())

var random = words[Math.floor(Math.random() * words.length)];
 console.log(random);

var splitWord = random.split("");

console.log(splitWord)




})
