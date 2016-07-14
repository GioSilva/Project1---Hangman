===== HANGMAN =====

STORIES

Basic:
1. User should be able to click on a start button to start the game.
2. User should be able to reset the game.
3. User should input a letter into an input box
4. Screen should turn red when the game is lost and the hangman is completed.
5. Screen should reveal the word after player loses the game.


PSEUDOCODE

Click on Start button (or refreshing the page) selects a random word from the Words array,

Random word is transformed into an array of letters using .split

Click on start also displays as many underscores as the number of letters of the random word, for the user to guess

...Displays an input box

...Displays new buttons with other options


Prevent default action from refreshing the page.

User types in a letter on input box.

If the letter in the input box is a match, it shows up in the underscores.

Otherwise, 1 new element of the hangman gets drawn.



EXPLANATIONS

This code mainly uses vanilla javascript and a bit of jquery when needed. I tried to keep it as simple as possible in terms of syntax and logic. That said, coming up with the correct syntax and logic was very difficult and basically took me the full 3 days, which means I still need to make a lot of progress until the programming logic comes as more natural thing to me.

The approach I came up with makes use of variables, lots of them. I learned a lot about this during the process of writing the program. Maybe functions would have make the code more simple and practical, but I stuck to the variables approach because it was safer.

There are still many unsolved issues:
- The input box is currently accepting letters and numbers, and more than 1 letter or number.
- When a wrong word is introduced twice, sometimes it goes to the bottom as the hangman gets one more line drawn, as if it were a new wrong word; other times it is ignored by the program. I have no idea why this happens.
- Should include hints of the word to guess.
- Should include buttons to start the game, reset the game and other options.
- The underscores move when replaced with a letter, this needs to be fixed in css.
