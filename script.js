$(document).on("ready", function() {
  console.log("Hangmanned")
  var words = ["html", "javascript", "jquery", "laptop", "statement", "pizza", "argument", "linux", "gui"];
  var userChoices = [];

  // Selecting a random word from 'words' array:
  var random = words[Math.floor(Math.random() * words.length)];
   console.log(random);


  // Preventing default
  $(".button").on("click", function(evt){
      evt.preventDefault();


    // Splitting random word into letters and creating new array:
    var splitWord = random.split("");
    console.log(splitWord)

    // Getting user input
    var newInput = $("#guess > .input").val()
    console.log(newInput);

    // Adding user input to userChoices array
    userChoices.push(newInput);
    console.log(userChoices)

    // Checking if user letter matches letter in random word
    console.log( random.includes(newInput));

    console.log()
        $("#guess > .input").val("")
  })
})
