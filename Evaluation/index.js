let round = 0
let rollDiceResult = document.getElementById("roll-dice-result")
let roundPlayerOne = document.getElementById("round-player-one")
let messageEl = document.getElementById("message-el")


// Generate random number

function getRandomDiceNumber() {
  let randomNumber = Math.floor( Math.random()*6 ) + 1
  if (randomNumber === 1) {
      return 1 // 1 = perte de tous les points
  } else {
      return randomNumber
  }
}

// Roll the dice once

function rollDice() {
  let rollNumber = getRandomDiceNumber()
  roll = rollNumber

  renderGame()
}

// Display the result

function renderGame() {
  rollDiceResult.innerHTML = roll

  round += roll
  roundPlayerOne.textContent = round


  if (roll === 1) {
    message = "You lost all your points, better luck next time"
  } else {
    message = ""
  }
  messageEl.textContent = message
}

// Ajouter le result du roll dice au current du player1 / Prendre le résultat du roll et l'ajouter au round player 1
// Si roll = 1 / round over + roundnumber = 0


