
const rollDice = document.getElementById("roll-dice")

const diceDisplay = document.querySelector(`.dice`)
const rollDiceResult = document.getElementById("roll-dice-result")

const player0El = document.querySelector(".player--0")
const player1El = document.querySelector(".player--1")

const roundPlayer0 = document.getElementById("current--0")
const roundPlayer1 = document.getElementById("current--1")

const totalPlayer0 = document.getElementById("total-player--0")
const totalPlayer1 = document.getElementById("total-player--1")

const messageEl = document.getElementById("message-el")
const winMessage = document.getElementById("win-message")


totalPlayer0.textContent = 0
totalPlayer1.textContent = 0

let winMessageEl
let round = 0;
let activePlayer = 0;
const scores = [0,0];

diceDisplay.classList.add("hidden")

// document.getElementById("roll-dice").addEventListener('click', function() {}

// Generate random number

function getRandomDiceNumber() {
  return Math.floor( Math.random()*6 ) + 1
}

// Roll the dice once

function diceRoll() {
  rollNumber = getRandomDiceNumber()

  renderGame()
}

// Switch player

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0

    activePlayer = activePlayer === 0 ? 1 : 0
    round = 0
    // CSS
    player0El.classList.toggle("player--active")
    player1El.classList.toggle("player--active")
}

//Display the result in the round player

function renderGame() {

  // Display the dice number
  diceDisplay.classList.remove("hidden")
  diceDisplay.src=`images/dice${rollNumber}.png`


  if (rollNumber !== 1 ){
    // Add the dice result to the round of active player
    round += rollNumber
    document.getElementById(`current--${activePlayer}`).textContent = round

  } else {
    switchPlayer()
  }


// Message en cas de roll 1 (Temporaire)

  if (rollNumber === 1) {
    message = "You lost all your points"
  } else {
    message = ""
  }
  messageEl.textContent = message
}


// Function HOLD = player keep the round/current count and put it in the total points section

function hold() {

  // Add the round active player's score to his total
  scores[activePlayer] += round
  document.getElementById(`total-player--${activePlayer}`).textContent = scores[activePlayer]

  // Check if total > 100
  if (scores[activePlayer] >= 100)
    winMessageEl = "You won"
  winMessage.textContent = winMessageEl

  // True : Game end

  // False : Switch player
  switchPlayer()
}


// Function New Game = reset all score to 0

 function newGame() {
  totalPlayer0.textContent = 0
  totalPlayer1.textContent = 0
  roundPlayer0.textContent = 0
  roundPlayer1.textContent = 0
  rollDiceResult.innerHTML = 0
  round = 0;
  activePlayer = 0;
  scores = [0,0];
  diceDisplay.classList.add("hidden")

}
