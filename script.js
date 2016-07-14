$(document).on("ready", function() {
  console.log("Hangmanned")
  var words = ["html", "javascript", "jquery", "laptop", "statement", "pizza", "argument", "linux", "gui", "git", "commit", "github", "repository", "debug", "append"];
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
      // Adding value to userAnswer array, in the correct position inside the array
          userAnswer[i] = newInput;
      // Converting userAnswer into a string that will be compared with the original random word. Once they are equal, it means the user won and the game is over.
          var newAnswer = userAnswer.join('');
      // Console.log to check if newAnswer is working
          console.log ("the user value = " + newAnswer);
          if (newAnswer === random) {
            $("#wrongLetters").html("Correct! You are still alive. Refresh for new game." );
      // Disabling input box and 'Go' button once the game is over
            $(".button").attr("disabled", true);
            $("#guess > .input").attr("disabled", true);
          }
        }
      }
    } else {
    // Displaying wrong letters at the bottom of the page
      var currentWrongs = $("#wrongLetters").html();
      currentWrongs += " " + newInput;
      $("#wrongLetters").html(currentWrongs);
    // Displaying hangman images in sequence. First, currentWrongs is broken down and its length is defined
      var imgCount = currentWrongs.trim().split(" ").length;
    // Console.log to make sure we are getting a sequence of numbers out of the previous action
      console.log("the image entry = " + imgCount);
    // Creating variable imgName to put together the sequence of jpg files and replacing the gallows image
      var imgName = "images/deadman_" + imgCount + ".jpg";
      $(".gallows").html("<img src='" + imgName + "' height='400'>");
    // Game over once the drawing is complete
      if (imgCount > 5) {
        $("#wrongLetters").html("You're dead! The answer is '" + random + "'. Refresh for new game." );
        $(".button").attr("disabled", true);
        $("#guess > .input").attr("disabled", true);
      }
    }

    // Clearing input box
    console.log()
        $("#guess > .input").val("")

  })

})
