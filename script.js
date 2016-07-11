$(document).on("ready", function() {
console.log("Hangmanned")
var words = ['html', 'javascript', 'jquery', 'laptop', 'statement'];
function chooseWord () {
    return words[Math.floor(Math.random() * words.length)];
  }
console.log(chooseWord())
})
