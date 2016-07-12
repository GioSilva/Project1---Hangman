$(document).on("ready", function() {
  console.log("Hangmanned")
  var words = ["html", "javascript", "jquery", "laptop", "statement", "pizza", "argument", "linux", "gui"];
  var userChoices = [];

  // Selecting a random word from 'words' array:
  var random = words[Math.floor(Math.random() * words.length)];
   console.log(random);
   // Splitting random word into letters and creating new array:
  var splitWord = random.split("");
   console.log(splitWord)

  var wordLength = splitWord.length;

  var underscores = "";

  for(i=0; i<wordLength; i++) {
    underscores = underscores + "_ "
    }
    console.log(underscores)
    // $("body").append("<div>_</div>");

    $(".spaces").html(underscores);

  // Preventing default
  $(".button").on("click", function(evt){
      evt.preventDefault();

    // Getting user input
    var newInput = $("#guess > .input").val()
    console.log(newInput);

    // Adding user input to userChoices array
    userChoices.push(newInput);
    console.log(userChoices)

    // Checking if user letter matches letter in random word
    var TrueOrFalse = splitWord.includes(newInput);

    // Console.log just to make sure everything's working:
    console.log(TrueOrFalse);

    console.log()
        $("#guess > .input").val("")


    // if (TrueOrFalse == "True") {
    //   console.log("Good guess!")
    // } else {
    //   console.log("1 step closer to death")
    // }


  })
})
