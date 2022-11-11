let round = 0
let rollDiceResult = document.getElementById("roll-dice-result")
let roundPlayerOne = document.getElementById("round-player-one")
let roundPlayerTwo = document.getElementById("round-player-two")
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
  let roll = getRandomDiceNumber()
  rollNumber = roll

  renderGame()
}

// Display the result

function renderGame() {
  rollDiceResult.innerHTML = rollNumber

//Display the result in the round player

  round += rollNumber
  roundPlayerOne.textContent = round

// Make player lost all points if roll 1

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



