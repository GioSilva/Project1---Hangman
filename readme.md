===== HANGMAN =====

STORIES

Basic:
1. User should be able to click on a start button to start the game.
2. User should be able to reset the game.
3. User should input a letter into an input box
4. Screen should turn red when the game is lost and the hangman is completed.
5. Screen should reveal the word after player loses the game.


PSEUDOCODE

Click on Start button selects a random word from the Words array,

Random word is transformed into an array of letters using .split

Click on start also displays as many underscores as the number of letters of the random word, for the user to guess

...Displays an input box

...Displays new buttons with other options


Prevent default action from refreshing the page.

User types in a letter on input box.

If the letter in the input box is a match, it shows up in the underscores.

Otherwise, 1 new element of the hangman gets drawn.
