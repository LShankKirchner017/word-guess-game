// vars

// select dom elements
  var startButton = document.querySelector(".start-button")
  var resetButton = document.querySelector(".reset-button");
  var timerEl = document.querySelector(".timer");
  // word blanks
  var wordBlanksEl = document.querySelector(".word-blanks");
  // wins
  var winsEl = document.querySelector(".win");
  // losses
  var lossesEl = document.querySelector(".lose");

// list of words
// userGuesses = [] list of letters guessed by user
// answer = "function"

function startRound(){
  // start timer 
  // pick a random word
  // set word blanks to have underscores
}

function onKeydown(event){
  // check if letter pressed is in the answer string
    // if yes
      // reveal letter in word-blanks
}

function tick(){
  // check if userGuesses has all the letters that are in the answer string
    // if has guessed all letters
      // end round
      // increment wins
      // display "You won!"
    // else
      // is timer count at zero
        // if yes
          // lost round
          // display "You lost"
          // increment losses
      // else
        // decrement timer count
}
// Event Listeners
  // start
  // reset
  // keydown - onKeydown
