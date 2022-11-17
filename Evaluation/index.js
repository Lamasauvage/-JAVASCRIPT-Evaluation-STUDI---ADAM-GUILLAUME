
const rollDice = document.getElementById("roll-dice");

const rollDiceResult = document.getElementById("roll-dice-result");

const roundPlayer0 = document.getElementById("current--0");
const roundPlayer1 = document.getElementById("current--1");

const totalPlayer0 = document.getElementById("total-player-0");
const totalPlayer1 = document.getElementById("total-player-1");

const messageEl = document.getElementById("message-el");
const winMessage = document.getElementById("win-message");

const player0El = document.querySelector(".player--0")
const player1El = document.querySelector(".player--1")

totalPlayer0.textContent = 0
totalPlayer1.textContent = 0
let round = 0;
let activePlayer = 0;
const scores = [0,0];

// document.getElementById("roll-dice").addEventListener('click', function() {}

// Generate random number

function getRandomDiceNumber() {
  const randomNumber = Math.floor( Math.random()*6 ) + 1
    return randomNumber
}

// Roll the dice once

function diceRoll() {
  let roll = getRandomDiceNumber()
  rollNumber = roll

  renderGame()
}

//Display the result in the round player

function renderGame() {

  rollDiceResult.innerHTML = rollNumber
 
  if (rollNumber !== 1 ){
    // Add the dice result to the round of active player
    round += rollNumber
    document.getElementById(`current--${activePlayer}`).textContent = round

  } else {
    // Set the player round to 0 because he rolled a 1
    document.getElementById(`current--${activePlayer}`).textContent = 0
    // Switch player
    activePlayer = activePlayer === 0 ? 1 : 0
    round = 0
    player0El.classList.toggle("player--active")
    player1El.classList.toggle("player--active")
  }


// Message en cas de roll 1 (Temporaire)

  if (rollNumber === 1) {
    message = "You lost all your points"
  } else {
    message = ""
  }
  messageEl.textContent = message
}

// Function HOLD = player keep the round count and put it in the total points section
// Keep the total point and add up round point

function hold() {

  let totalNumberPlayerOne = parseInt(totalPlayerOne.textContent,10) + round
  let totalNumberPlayerTwo = parseInt(totalPlayerTwo.textContent,10) + round

  if (player1Turn){
    totalPlayerOne.textContent = totalNumberPlayerOne

  } else {
    totalPlayerTwo.textContent = totalNumberPlayerTwo
  }
  


// Display a alert/message when player reach 100 or more points and end game

  let winMessageEl;
  if (totalNumber >= 100) {
    winMessageEl = "You won"
  } else {
    winMessageEl = ""
  }
  winMessage.textContent = winMessageEl
}


// Faire une boucle qui se résume à : Si le P1 roll un 1 ou HOLD, début du round pour le joueur 2

