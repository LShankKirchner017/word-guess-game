// vars

// select dom elements
  var startButton = document.querySelector(".start-button")
  var resetButton = document.querySelector(".reset-button");
  var timerEl = document.querySelector(".timer");
  var wordBlanksEl = document.querySelector(".word-blanks");
  var winsEl = document.querySelector(".win");
  var lossesEl = document.querySelector(".lose");

// list of words
var words = ["jellyfish", "pancakes", "callback", "bacon", "porcupine"]
var userGuesses = [] // list of letters guessed by user
var answer // undefined until start button is hit

function getRandomWord(){
 var randomIdx = Math.floor(Math.random() * words.length);
 answer = words[randomIdx];
 console.log(answer)
}

function renderWord(){

  var blanks = "";
  for (var i = 0; i < answer.length; i++) {
    var letter = answer[i]
    // check if userGuesses contains current letter
    if (userGuesses.includes(letter)){
      blanks += letter
    } else{
      blanks += "_";
    }
 
  }
  wordBlanksEl.innerText = blanks.split("").join(" ");
}


function startRound(){
  console.log("Starting round...")
  // TODO: start timer 
  getRandomWord()
  renderWord()
}

function onKeydown(event){ 
  console.log(answer.includes(event.key))
  // check if letter pressed is in the answer string
  // and if not already guessed
  if( answer.includes(event.key) && !userGuesses.includes(event.key)){
    userGuesses.push(event.key)
    console.log(userGuesses)

    }
    renderWord()
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
startButton.addEventListener('click', startRound)

document.body.addEventListener('keypress', onKeydown)

  //TODO: reset
