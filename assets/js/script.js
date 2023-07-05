// vars

// select dom elements
  var startButton = document.querySelector(".start-button")
  var resetButton = document.querySelector(".reset-button");
  var timerEl = document.querySelector(".timer-count");
  var wordBlanksEl = document.querySelector(".word-blanks");
  var winsEl = document.querySelector(".win");
  var lossesEl = document.querySelector(".lose");
  var wins = 0
  var losses = 0
  var time = 10

// list of words
var words = ["jellyfish", "pancakes", "callback", "bacon", "porcupine"]
var userGuesses = [] // list of letters guessed by user
var answer // undefined until start button is hit
var intervalId

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

function tick() {
  console.log("tick...")
  // TODO:
  // check if userGuesses has all the letters that are in the answer string
  // if has guessed all letters
  if(!wordBlanksEl.innerText.includes("_")){
    // end round
    wins++
    wordBlanksEl.innerText = "You won! 🥳"
  } else {
    // are we out of time?
    if (time <= 0){
      clearInterval(intervalId)
      timerEl.innerText = "Out of time!"
      // display "You lost"
      // increment losses
    } else {
      // decrement timer count
      time--
      timerEl.innerText = time
    }
    // display count in page
  }
}

function startRound(){
  getRandomWord()
  renderWord()
  intervalId = setInterval(tick, 1000)
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


// Event Listeners
startButton.addEventListener('click', startRound)

document.body.addEventListener('keypress', onKeydown)

  //TODO: reset
