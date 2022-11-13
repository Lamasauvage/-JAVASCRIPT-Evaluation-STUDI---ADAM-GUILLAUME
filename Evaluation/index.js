let round = 0

let rollDiceResult = document.getElementById("roll-dice-result")
let roundPlayerOne = document.getElementById("round-player-one")
let roundPlayerTwo = document.getElementById("round-player-two")
let totalPlayerOne = document.getElementById("total-player-one")
let totalPlayerTwo = document.getElementById("total-player-two")
let messageEl = document.getElementById("message-el")
let winMessage = document.getElementById("win-message")


// Generate random number

function getRandomDiceNumber() {
  let randomNumber = Math.floor( Math.random()*6 ) + 1
      return randomNumber

}

// Roll the dice once for player1

function rollDice() {
  let roll = getRandomDiceNumber()
  rollNumber = roll

  renderGame()
}

//Display the result in the round player

function renderGame() {
  rollDiceResult.innerHTML = rollNumber

  round += rollNumber
  roundPlayerOne.textContent = "ROUND: " + round

// Make player1 lost all points if roll 1 and then make player2 roll, etc...

// Faire une boucle WHILE (BREAK ?) => Continue d'add le compteur de Round TANT QUE roll number ≠ 1 soit [2 à 6] (à voir comment l'écrire) et display un message pour le joueur 2 qui commence son tour

  if (rollNumber === 1) {
    round = 0
  }

// Msg if the player roll a 1 ! MAKE A ALERTE = BETTER

  if (rollNumber === 1) {
    message = "You lost all your points, better luck next time"
  } else {
    message = ""
  }
  messageEl.textContent = message
}

// Function HOLD = player keep the round count and put it in the total points section
// Keep the total point and add up round point

function hold() {
  totalPlayerOne.textContent = parseInt(totalPlayerOne.textContent,10) + round

// Display a alert/message when player reach 100 or more points and end game(NOT WORKING !!!)

  if (totalPlayerOne >= 100) {
    winMessage = "You won"
  } else {
    winMessage = ""
  }
  winMessage.textContent = winMessage
}




