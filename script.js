$(document).on("ready", function() {
  console.log("Hangmanned")
  var words = ["html", "javascript", "jquery", "laptop", "statement", "pizza", "argument", "linux", "gui", "git", "commit", "github"];
  var userChoices = [];
  var userAnswer = [];

  // Selecting a random word from 'words' array:
  var random = words[Math.floor(Math.random() * words.length)];
   console.log(random);
   // Splitting random word into letters and creating new array:
  var splitWord = random.split("");
   console.log(splitWord)

  //  Creating number of underscores equal to number of letters in splitWord. They will be kept in an array called blankSpaces.
  var wordLength = splitWord.length;
  var underscores = "";
  var blankSpaces = [];

    for(i=0; i<wordLength; i++) {
      var name = "letter_" + (i+1);
    underscores += "<span class='spaces' id='" + name + "'>_ </span>";
    }
    console.log(underscores)

    // Displaying underscores on screen
    $("#missingWord").html(underscores);
    $("#wrongLetters").html("");

// USER INPUT

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

    // Console.log to make sure true and false values are working:
    console.log(TrueOrFalse);

    // Replacing underscores with correct letter, displaying wrong letters at the bottom
    if (TrueOrFalse) {
      for(i=0; i<splitWord.length; i++) {
        if (newInput === splitWord[i]) {
          var name = "letter_" + (i+1);
          $("#" + name).html(newInput);
          userAnswer[i] = newInput;
          var newAnswer = userAnswer.join('');
          console.log ("the user value = " + newAnswer);
          if (newAnswer === random) {
            $("#wrongLetters").html("Game Over!!! You guessed correctly. Please refresh for new game." );
            $(".button").attr("disabled", true);
            $("#guess > .input").attr("disabled", true);
          }
        }
      }
    } else {
      var currentWrongs = $("#wrongLetters").html();
      currentWrongs += " " + newInput;
      $("#wrongLetters").html(currentWrongs);
      }
    }

    // Clearing input box
    console.log()
        $("#guess > .input").val("")

  })

})
