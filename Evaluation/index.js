let rollDiceResult = document.getElementById("roll-dice-result")

// Generate random number

function getRandomDiceNumber() {
  let randomNumber = Math.floor( Math.random()*6 ) + 1
  if (randomNumber === 1) {
      return 0 // 0 = perte de tous les points
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
}